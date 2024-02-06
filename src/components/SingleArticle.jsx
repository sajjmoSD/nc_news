import { useState, useEffect } from "react";
import { fetchArticlebyId } from "../../api";
import { useParams } from "react-router-dom";
import Article from "./Article";
import ArticleList from "./ArticleList";
import { Grid } from "@mui/material";

export default function SingleArticle({ articles, setArticles }) {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const existingArticle = articles.find((article) => article.id === id);
  useEffect(() => {
    if (!id) {
      console.error("No id provided");
      return;
    }

    if (existingArticle) {
      setArticle(existingArticle);
    } else {
      fetchArticlebyId(id).then((data) => {
        setArticle(data.article);
        setArticles((prevArticles) => [...prevArticles, data.article]);
      });
    }
  }, [id, articles, setArticles]);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      style={{ minWidth: "150vw" }}
    >
      <Grid item>
        <div className="sAc">
          {article ? <Article article={article} /> : <div>Loading....</div>}
        </div>
      </Grid>
    </Grid>
  );
}
