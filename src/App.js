import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/NavBar";
import ReviewsList from "./components/ReviewsList";
import Footer from "./components/Footer";
import Review from "./components/Review";
import CommentForm from "./components/CommentForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ReviewsList />} />
          <Route path="/reviews" element={<ReviewsList />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="reviews/:review_id/comments" element={<CommentForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
