import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function BookDetails() {
  const { state } = useLocation();
  const book = state?.book;
  console.log(book)

  if (!book) {
    return (
      <>
        <Navbar /><h2>Book not found</h2><Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="book-details">

        <img
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : "https://via.placeholder.com/200"
          }
          alt={book.title}
        />

        <h1>{book.title}</h1>

        <p>
          <strong>Author:</strong>{" "}
          {book.author_name?.join(", ") || "Unknown"}
        </p>

        <p>
          <strong>Published:</strong>{" "}
          {book.first_publish_year || "N/A"}
        </p>

        <p>
          <strong>Languages:</strong>{" "}
          {book.language?.join(", ") || "N/A"}
        </p>

        <p>
          <strong>Subjects:</strong>{" "}
          {book.subject?.slice(0, 5).join(", ") || "N/A"}
        </p>

      </div>

      <Footer />
    </>
  );
}

export default BookDetails;