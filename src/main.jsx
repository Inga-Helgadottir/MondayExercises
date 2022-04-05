import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
// import Invoice from "./routes/invoice";
import Books from "./routes/books";
import AddBook from "./routes/addBook";
import FindBook from "./routes/findBook";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/books" element={<Books />} />
      <Route path="/add_book" element={<AddBook />} />
      <Route path="/find_book" element={<FindBook />}>
        <Route path=":bookId" element={<FindBook />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
