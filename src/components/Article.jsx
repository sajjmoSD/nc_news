import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { updateArticleVotes } from "../../api";

export default function Article({ article }) {
  const [votes, setVotes] = useState(article.votes);
  useEffect(() => {
    const storedVotes = localStorage.getItem(
      `article_${article.article_id}_votes`
    );
    if (storedVotes !== null) {
      setVotes(parseInt(storedVotes));
    }
  }, [article.article_id, votes]);
  const handleUpvote = () => {
    const newVotes = votes + 1;
    setVotes(newVotes);
    updateArticleVotes(article.article_id, 1);
    localStorage.setItem(
      `article_${article.article_id}_votes`,
      newVotes.toString()
    );
  };
  const handleDownvote = () => {
    if (votes === 0) {
      alert("Votes is already zero");
    }
    const newVotes = Math.max(votes - 1, 0);
    setVotes(newVotes);
    updateArticleVotes(article.article_id, -1);
    localStorage.setItem(
      `article_${article.article_id}_votes`,
      newVotes.toString()
    );
  };
  // const handleResetVotes = () => {
  //   updateArticleVotes(article.article_id, 28);
  //   setVotes(0);
  //   localStorage.removeItem(`article_${article.article_id}_votes`);
  // }; --- Only for testing / Resetting votes
  if (!article) {
    return "No article found";
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={article.article_img_url}
            alt={article.article_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link
                to={`/articles/${article.article_id}`}
                style={{ textDecoration: "none" }}
              >
                Open Article!
              </Link>
              <br />
              Author: {article.author}
              <br />
              Topic: {article.topic}
              <br />
              Votes: {votes}
              <br />
              Comment Count: {article.comment_count};
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardContent>
          <Button
            onClick={handleUpvote}
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
          >
            Up Vote
          </Button>
          <Button
            onClick={handleDownvote}
            variant="contained"
            color="secondary"
          >
            Down Vote
          </Button>
          {/* <Button onClick={handleResetVotes} variant="contained" color="error">
            Reset
          </Button> */}
        </CardContent>
      </Card>
    </Grid>
  );
}
