import Image from "next/image";

export default function Home() {
  return (
    <>
       <nav className="nav">
          <div className="logo"></div>
          <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#skills">Experience</a></li>
              <li><a href="#contact">Contact Me</a></li>
          </ul>
      </nav>

      <section id="home" className="hero">
          <div>
              <h1>Hi, I'm Sam</h1>
              <p className="subtitle">Graphic Designer & Freelance Video Editor</p>
              <a href="#work" className="cta-btn">View the Work</a>
          </div>
      </section>

      <section id="work">
          <div style={{width: "100%"}}>
              <h2 className="section-title">My Work</h2>
              <div className="grid">
                  <div className="card">
                      <h3>Advertisements</h3>
                      <p>Various advertisements that I have designed.</p>
                      <div className="card-image">📷</div>
                  </div>
                  <div className="card">
                      <h3>Posters</h3>
                      <p>Various posters that I have designed.</p>
                      <div className="card-image">📷</div>
                  </div>
                  <div className="card">
                      <h3>Personal Projects</h3>
                      <p>E-commerce platform with advanced analytics, real-time inventory management, and seamless payment integration.</p>
                      <div className="card-image">📷</div>
                  </div>
              </div>
          </div>
      </section>

      <section id="skills">
          <div style={{width: "100%"}}>
              <h2 className="section-title">I am experienced in...</h2>
              <div style={{maxWidth: "800px", margin: "0 auto", textAlign: "center"}}>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">UI/UX Design</span>
                  <span className="skill-tag">Adobe Premier Pro</span>
                    <span className="skill-tag">Adobe Illustrator</span>
                    <span className="skill-tag">Adobe Photoshop</span>
              </div>
          </div>
      </section>

      <section id="contact">
          <div className="contact-content">
              <h2 className="section-title">Let's Get in Touch</h2>
              <p>We will create something amazing</p>
              <a href="sschristensen@nic.edu" className="cta-btn">Email</a>
              <div className="social-links">
                  <a href="#" title="GitHub">GH</a>
                  <a href="#" title="LinkedIn">LI</a>
                  <a href="#" title="Twitter">TW</a>
                  <a href="#" title="Dribbble">DR</a>
              </div>
          </div>
      </section>
    </>
  );
}
