import app from "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Nav from "./components/NavBar";
import ReviewsList from "./components/ReviewsList";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Comments from "./components/Comments";
import { UserContext } from "./contexts/UserContext";
import FilterBar from "./components/FilterBar";
function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value="">
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <FilterBar />
          <Routes>
            <Route path="/" element={<ReviewsList />} />
            <Route path="/reviews" element={<ReviewsList />} />
            <Route
              path="/reviews/:review_id"
              element={
                <>
                  <Review />
                  <Comments />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
