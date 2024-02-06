import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Article({ article }) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  if (!article) {
    return null;
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardActionArea onClick={toggleDetails}>
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
              Read More:
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
        {showDetails && (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Comment Count: {article.comment_count};
              <br />
              Votes: {article.votes}
            </Typography>
          </CardContent>
        )}
      </Card>
    </Grid>
  );
}
