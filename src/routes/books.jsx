import bookFacade from "../bookFacade";

export default () => {
  return (
    <>
      <h2>Books!</h2>
      {bookFacade.getBooks().map((book) => (
        <div>
          <h2>{book.title}</h2>
          <p>{book.info}</p>
        </div>
      ))}
    </>
  );
};
