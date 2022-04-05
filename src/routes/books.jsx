import bookFacade from "../bookFacade";
import Book from "./book";

export default function books() {
  return (
    <>
      <h2>Get All Books!</h2>
      {bookFacade.getBooks().map((book) => (
        <div key={book.id}>
          <Book key={book.id} book={book} />
        </div>
      ))}
    </>
  );
}
