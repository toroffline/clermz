import "./app.css";
import Router, { Link } from 'preact-router';
import Landing from "./pages/landing";
import { Blogs } from "./pages/blogs";
import DummyPage from "./pages/dummy";

export function App() {
  return (
    <>
      <aside className="main-sidebar">
        <marquee>🤸🏻‍ ClermZ 🫛</marquee>

        <nav className="main-nav">
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </aside>


      <div className="main-content">
        <Router>
          <Landing path="/" />
          <Blogs path="/blog" />
          <DummyPage path="/blogs/workout/1" />
        </Router>
      </div>

    </>
  );
}
