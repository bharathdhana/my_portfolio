import React, { useEffect, useState } from 'react';

const BLOGS_API_URL = 'https://dev.to/api/articles?username=bharathdhana&per_page=6';
const REFRESH_INTERVAL_MS = 5 * 60 * 1000;

const BlogSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 animate-pulse">
        <div className="h-4 w-1/4 bg-slate-200 rounded mb-3" />
        <div className="h-6 w-3/4 bg-slate-200 rounded mb-3" />
        <div className="h-4 w-full bg-slate-200 rounded mb-2" />
        <div className="h-4 w-2/3 bg-slate-200 rounded mb-4" />
        <div className="flex gap-2">
          <div className="h-6 w-12 bg-slate-200 rounded-full" />
          <div className="h-6 w-12 bg-slate-200 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      setError(null);

      try {
        const response = await fetch(BLOGS_API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Failed to fetch posts (${response.status})`);
        }

        const data = await response.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Failed to fetch posts');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchBlogs();

    const intervalId = window.setInterval(() => {
      if (!controller.signal.aborted) {
        fetchBlogs();
      }
    }, REFRESH_INTERVAL_MS);

    const handleFocus = () => {
      if (document.visibilityState === 'visible' && !controller.signal.aborted) {
        fetchBlogs();
      }
    };

    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleFocus);

    return () => {
      controller.abort();
      window.clearInterval(intervalId);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleFocus);
    };
  }, []);

  return (
    <section className="hero-surface py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Posts</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
            Latest posts from Dev.to, shared as a simple live feed.
          </p>
        </div>

        {loading ? (
          <BlogSkeleton />
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-rose-500 font-medium">Error: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-4 text-amber-600 hover:text-amber-700 font-semibold transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 text-sm text-slate-500 text-center">
              Showing latest posts
            </div>

            {blogs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-slate-500">No posts available.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
                {blogs.map((blog) => (
                  <a
                    key={blog.id}
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 mb-2 uppercase tracking-wider">
                      <span>{blog.readable_publish_date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span>{blog.reading_time_minutes} min read</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {blog.description}
                    </p>

                  </a>
                ))}
              </div>
            )}
          </>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">No posts found for this user.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;