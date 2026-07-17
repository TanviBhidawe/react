import { Routes, Route } from "react-router-dom";

import Home from "./book/home";
import Books from "./book/books";
import BookDetails from "./book/bookdetails";
import "./book.css"
function Book() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/book/:id" element={<BookDetails />} />
    </Routes>
  );
}

export default Book;