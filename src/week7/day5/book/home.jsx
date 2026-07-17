import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="home">
        <div className="home-text">
          <h1>
            Explore. Discover. Read.
          </h1>

          <p>
            Search millions of books and discover stories,
            knowledge, and ideas from around the world.
          </p>

          <Link to="/books">
            <button>
              Start Exploring
            </button>
          </Link>
        </div>

        <div className="home-books">
          <div className="book-preview">
            <img
              src="https://covers.openlibrary.org/b/id/10521270-L.jpg"
              alt="book"
            />
          </div>

          <div className="book-preview">
            <img
              src="https://i.pinimg.com/1200x/3b/b6/0d/3bb60dc52cc44180c856b94914dce96f.jpg"
              alt="book"
            />
          </div>

          <div className="book-preview">
            <img
              src="https://covers.openlibrary.org/b/id/11153223-L.jpg"
              alt="book"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;