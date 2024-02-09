import Header from "./components/Header";
import { useEffect, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import "../index.css";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<SingleArticle />} />
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
