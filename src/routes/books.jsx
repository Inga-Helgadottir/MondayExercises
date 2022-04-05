import bookFacade from "../bookFacade";

export default function books() {
  return (
    <>
      <h2>Get All Books!</h2>
      {bookFacade.getBooks().map((book) => (
        <div>
          <h3>{book.title}</h3>
          <p>{book.info}</p>
        </div>
      ))}
    </>
  );
}
