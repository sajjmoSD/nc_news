import { useEffect, useState } from "react";
import { fetchAllArticles } from "../../api";
import Header from "./Header";
import Article from "./Article";
import { Grid, Pagination, Stack } from "@mui/material";
export default function ArticleList() {
  const articlesPerPage = 6;
  const [currPage, setCurrPage] = useState(1);

  const [articles, setArticle] = useState([]);
  useEffect(() => {
    fetchAllArticles().then((data) => {
      setArticle(data.articles);
    });
  }, []);
  const lastArticle = currPage * articlesPerPage;
  const firstArticle = lastArticle - articlesPerPage;
  const currArticles = articles.slice(firstArticle, lastArticle);
  const handlePageChange = (event, page) => {
    setCurrPage(page);
  };
  if (articles.length > 0) {
    return (
      <section>
        <Header text="List of Articles!" />
        <Grid container spacing={2}>
          {currArticles.map((article) => {
            return <Article key={article.article_id}>{article}</Article>;
          })}
        </Grid>
        <Stack spacing={2} justifyContent={"center"} mt={3}>
          <Pagination
            color="primary"
            count={Math.ceil(articles.length / articlesPerPage)}
            page={currPage}
            onChange={handlePageChange}
          />
        </Stack>
      </section>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
}
