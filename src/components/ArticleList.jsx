import { useEffect, useState } from "react";
import { fetchAllArticles, fetchArticlesByTopic } from "../../api";
import Header from "./Header";
import Article from "./Article";
import { Grid, Pagination, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
export default function ArticleList() {
  const navigate = useNavigate();
  const location = useLocation();
  const articlesPerPage = 6;
  const [currPage, setCurrPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");
  const [headerText, setHeaderText] = useState("List of Articles");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const topicQuery = searchParams.get("topic");
    if (topicQuery) {
      fetchArticlesByTopic(topicQuery).then((data) => {
        setArticles(data.articles);
        setHeaderText(`List of ${topicQuery} Articles`);
        navigate(`/articles?topic=${topicQuery}`);
      });
    } else {
      fetchAllArticles().then((data) => {
        setArticles(data.articles);
        setHeaderText("List of Articles");
      });
    }
  }, [location.search]);
  const lastArticle = currPage * articlesPerPage;
  const firstArticle = lastArticle - articlesPerPage;
  const currArticles = articles.slice(firstArticle, lastArticle);
  const handlePageChange = (event, page) => {
    setCurrPage(page);
  };
  const handleTopicChange = (e) => {
    const target = e.target.value;
    setTopic(target);
    navigate(`/articles?topic=${target}`);
  };
  if (articles.length > 0) {
    return (
      <section>
        <Header text={headerText} />
        <select className="dropBar" value={topic} onChange={handleTopicChange}>
          <option value="All-items">All Articles</option>
          <option value="cooking">Cooking</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
        </select>
        <Grid container spacing={2}>
          {currArticles.map((article) => {
            return <Article key={article.article_id} article={article} />;
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
