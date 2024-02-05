import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import "../index.css";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/articles" element={<ArticleList />} />
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
