import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/NavBar";
import GamesList from "./components/GamesList";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<GamesList />} />
          <Route path="/games" element={<GamesList />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
