// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
  return (
    <div className="about-container">
      <h1>Get to know me</h1>
      <section className="about-section-container">
        <div className="about-section-child">
          <img src="./img/about_me.jpeg" alt="Khoi Phan" />
        </div>
        <div className="about-section-child">
          <p>
            Hello, I'm Khoi Phan, and I'm currently based in San Jose, CA.<br />
            I've just completed a full-stack development program and am excited to apply my skills in both front-end and back-end development.<br />
            As I begin my journey in the tech world, I'm actively seeking an entry-level position where I can contribute to the success of your projects.<br />
            My passion for coding drives me to create efficient, user-friendly solutions, and I'm eager to bring my knowledge and enthusiasm to a collaborative team.<br />
            If you're looking for a motivated developer with a continuous learning mindset and a drive to help your company thrive, I'd be thrilled to connect.<br />
            Please feel free to explore my portfolio to learn more about my work and capabilities.
          </p>
        </div>
      </section>




      <section className="about-section-container">
        <div className="about-section-child">
          <img src="./img/why-choose-me.png" alt="Khoi Phan" />
        </div>
        <div className="about-section-child">
          <ul className="about-list">
            <li>
              <strong>🌀 Adaptability:</strong> I thrive in dynamic environments and am always eager to learn new technologies.
            </li>
            <li>
              <strong>🧩 Problem-Solving:</strong> I enjoy tackling challenges and finding innovative solutions to complex problems.
            </li>
            <li>
              <strong>🚀 Passion for Growth:</strong> As a recent graduate, I'm motivated to apply my knowledge in real-world scenarios and grow alongside a supportive team.
            </li>
            <li>
              <strong>🤝 Collaborative Spirit:</strong> I'm always open to feedback and believe in the power of teamwork to drive project success.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section-container">
        <div className="about-section-child" >
          <h2 style={{ marginRight: '150px' }}>🧠 Work Ethic & Mindset</h2>
          
          <ul className="about-list" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <li>
              <strong>💡 Growth Mindset & Self-Learning:</strong> I continuously improve through self-study, coding challenges, and building personal projects. I believe learning never stops in tech.
            
            </li>
            <li>
              <strong>📋 Diligent & Organized:</strong> I manage my tasks efficiently, prioritize responsibilities, and follow through with consistency and focus.
            </li>
            <li>
              <strong>🔍 Attention to Detail:</strong> I write clean, maintainable code and ensure everything I create is functional, accessible, and user-friendly.
            </li>
            <li>
              <strong>🤝 Honesty & Integrity:</strong> I value transparency and trust, and I bring a reliable and ethical mindset to every project and collaboration.
            </li>
            <li>
              <strong>🎨 Creative Thinker:</strong> I enjoy solving problems with innovative ideas, whether through design or technical solutions.
            </li>
            <li>
              <strong>🗣 Sociable & Collaborative:</strong> I work well in teams, communicate clearly, and welcome constructive feedback to improve and grow.
            </li>
            <li>
              <strong>🛠 Calm Under Pressure:</strong> I stay composed and focused when solving bugs, meeting tight deadlines, or learning new frameworks.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-section-container">
        <div className="about-section-child">
          <h2 style={{ marginRight: '50px' }} >💻 Skills & Technologies</h2>
          <ul className="about-list">
            <li><strong>Languages & Frameworks:</strong> HTML, CSS, JavaScript, React, Node.js, Express.js</li>
            <li><strong>Databases & Tools:</strong> MongoDB, SQL, Git, GitHub</li>
            <li><strong>Other:</strong> Responsive Design, RESTful APIs</li>
          </ul>
        </div>
      </section>

      <section className="about-section-container">
        <div className="about-section-child">
          <h2 style={{ marginRight: '50px' }} >📫 Let's Connect</h2>
          <p>
            I'm excited to connect with like-minded professionals and explore opportunities in the tech industry.<br />
            Feel free to reach out to me on LinkedIn or GitHub, or drop me an email at{" "}
            <a href="mailto:phanminhkhoi91@gmail.com">phanminhkhoi91@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
