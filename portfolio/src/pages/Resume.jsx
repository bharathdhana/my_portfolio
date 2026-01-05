
const Resume = () => (
  <section className="py-5 bg-light text-center">
    <h2 className="section-title mb-4">My Resume</h2>

    {/* Responsive iframe wrapper */}
    <div style={{ 
      width: '100%', 
      maxWidth: '900px', 
      margin: '0 auto' 
    }}>
      <iframe
        src="/Resume.pdf"
        title="Resume"
        style={{
          width: '100%',
          height: '80vh',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      ></iframe>
    </div>

    {/* Fallback download link */}
    <p className="mt-3">
      If the resume is not visible on your device, 
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"> download it here</a>.
    </p>
  </section>
);

export default Resume;
