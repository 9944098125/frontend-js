import { Link } from "react-router-dom";
import "./index.css";

export default function Home() {
  return (
    <>
      <div className="desktop-home-container">
        <div className="sidebar">
          <h1 className="imp-head">Important questions</h1>
          <div className="sideheads">
            <Link to="/javascript" className="link-heads">
              Javascript
            </Link>
            <Link to="/sql" className="link-heads">
              SQL
            </Link>
            <Link to="/python" className="link-heads">
              Python
            </Link>
            <Link to="/node" className="link-heads">
              Node.js
            </Link>
            <Link to="/react" className="link-heads">
              React.js
            </Link>
          </div>
        </div>
        <div className="text-container">
          <h1 className="home-head">
            Select the language you wanna learn theory questions from...
          </h1>
          <img
            src="https://res.cloudinary.com/dakda5ni3/image/upload/v1638962448/Screenshot_50_ikpf6a.png"
            alt="hone"
            className="home-img-desktop"
          />
        </div>
      </div>
      <div className="mobile-home-container">
        <h1 className="mobile-head">Important questions</h1>
        <div className="top-links-container">
          <Link to="/javascript" className="link-heads-mobile">
            <p>Javascript</p>
          </Link>
          <Link to="/sql" className="link-heads-mobile">
            <p>SQL</p>
          </Link>
          <Link to="/python" className="link-heads-mobile">
            <p>Python</p>
          </Link>
          <Link to="/node" className="link-heads-mobile">
            <p>Node.js</p>
          </Link>
          <Link to="/react" className="link-heads-mobile">
            <p>React.js</p>
          </Link>
        </div>
        <h1 className="home-head-mobile">
          Select the language you wanna learn theory questions from...
        </h1>
        <img
          src="https://res.cloudinary.com/dakda5ni3/image/upload/v1638962448/Screenshot_50_ikpf6a.png"
          alt="hone"
          className="home-img-mobile"
        />
      </div>
    </>
  );
}
