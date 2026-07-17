import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BookCard from "../components/bookcard";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("book");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBooks();
  }, [search, category]);

  const getBooks = async () => {
    setLoading(true);

    try {
      let query = search;

      if (category !== "All") {
        query = category;
      }

      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=50`
      );

      const data = await response.json();

      setBooks(data.docs || []);
    } catch (error) {
      console.log(error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="books-page">
        <h1>Next Chapter</h1>
       <div className="box">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="programming">Programming</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="fantasy">Fantasy</option>
        </select>
        </div>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="book-list">
            {books.map((book) => (
              <BookCard
                key={book.key}
                book={book}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Books;