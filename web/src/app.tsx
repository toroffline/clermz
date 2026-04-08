import "./app.css";
import Router from "preact-router";
import { Blogs } from "./pages/blogs";
import DummyPage from "./pages/dummy";
import Landing from "./pages/landing";

export function App() {
  return (
    <>
      <aside className="main-sidebar">
        <marquee>🤸🏻‍ ClermZ 🫛</marquee>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <Router>
          <Landing path="/" />
          <Blogs path="/blogs" />
          <DummyPage path="/blogs/workout/1" />
        </Router>
      </div>
    </>
  );
}
