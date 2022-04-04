import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";
// import Invoice from "./routes/invoice";
import Books from "./routes/books";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/books" element={<Books />} />
      <Route path="/add_book" element={<div>Add book</div>} />
      <Route path="/find_book" element={<div>Find book</div>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
