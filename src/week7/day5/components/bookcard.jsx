import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">

      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150"
        }
        alt={book.title}
      />

      <h3>{book.title}</h3>

      <p>
        {book.author_name?.[0] || "Unknown Author"}
      </p>

      <p>
        {book.first_publish_year || "N/A"}
      </p>

      <Link
        to={`/book/${book.key.replace("/works/", "")}`}
        state={{ book }}
      >
        View Details
      </Link>

    </div>
  );
}

export default BookCard;