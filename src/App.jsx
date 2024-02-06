import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import ArticleList from "./components/ArticleList";
import "../index.css";
import SingleArticle from "./components/SingleArticle";
function App() {
  const [articles, setArticles] = useState([]);
  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route
            path="/articles/:id"
            element={
              <SingleArticle articles={articles} setArticles={setArticles} />
            }
          />
          {/* <Route path="/users" element={<Users />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
