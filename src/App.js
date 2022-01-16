import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo } from "react";

import ReviewsList from "./components/ReviewsList";
import Footer from "./components/Footer";
import Review from "./components/Review";
import { UserContext } from "./contexts/UserContext";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar />
          <FilterBar />
          <Routes>
            <Route path="/" exact element={<ReviewsList />} />
            <Route path="/reviews" element={<ReviewsList />} />
            <Route path="/reviews/:review_id" element={<Review />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
