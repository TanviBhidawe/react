import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="page">
      <h1>Welcome to Techspire Company</h1>
      <p>
        We create modern websites and digital solutions to help businesses grow.
      </p>
      <Link to="/Contact"> <button>Get Started</button></Link>
     

      <div className="cards">
        <div className="card">
          <h3>Innovation</h3>
          <p>Creative ideas for every project.</p>
        </div>

        <div className="card">
          <h3>Quality</h3>
          <p>Reliable and high-quality services.</p>
        </div>

        <div className="card">
          <h3>Support</h3>
          <p>Always available for our clients.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;