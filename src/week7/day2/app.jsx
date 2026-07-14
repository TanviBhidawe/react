import { Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import Course from "./course";
import CourseDetails from "./coursedetails";
import Contact from "./contact";
import "./course.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>CourseHub</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;