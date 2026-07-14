import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to CourseCode</h1>

        <p> Learn the latest technologies from expert instructors and build real-world projects.</p>
       <Link to="/courses">  <button>Explore Courses</button></Link>
      </section>

      <section className="about">
        <h2>Why Choose Us?</h2>

        <div className="features">
          <div className="feature-card">
            <h3> Expert Instructors</h3>
            <p>Learn from experienced professionals.</p>
          </div>

          <div className="feature-card">
            <h3> Practical Learning</h3>
            <p>Build projects while learning.</p>
          </div>

          <div className="feature-card">
            <h3> Certificate</h3>
            <p>Receive a certificate after course completion.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;