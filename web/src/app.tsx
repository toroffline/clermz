import "./app.css";

export function App() {
  return (
    <>
      <aside className="main-sidebar">
        <marquee>🤸🏻‍ ClermZ 🫛</marquee>

        <nav className="main-nav">
          <ul>
            <li href="">
              <a href="./">About</a>
            </li>
            <li href="">
              <a href="">Blog</a>
            </li>
            <li href="">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <section className="introduce">
          <div className="lead-introduce">
            <h1>สวัสดีคับ, I'm Nui</h1>
            <span className="full-name">(Narkkarux Tripiyaratana)</span>
          </div>
          <h2 className="job-title">Software Engineer</h2>
          <p>A bad boy who in love with Calisthenics, Vegie food, som cooking and some coding.</p>
        </section>

        <section className="blog-list">
          <h2>Blog</h2>
          <h3>incoming soon</h3>
          <p>I want to write about my 2024🚀</p>
        </section>
      </div>
    </>
  );
}
