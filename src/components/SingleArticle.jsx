import { useState, useEffect } from "react";
import { fetchArticlebyId, fetchCommentsByArticleId } from "../../api";
import { useParams } from "react-router-dom";
import Article from "./Article";
import { Grid, Button, Typography, Card, CardActionArea } from "@mui/material";
import CommentCard from "./CommentCard";

export default function SingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [showBody, setShowBody] = useState(false);
  useEffect(() => {
    if (!id) {
      console.error("No id provided");
      return;
    }
    fetchArticlebyId(id).then((data) => {
      setArticle(data.article);
    });
    fetchCommentsByArticleId(id).then((data) => {
      setComments(data.comments);
    });
  }, [id]);
  const toggleBody = () => {
    setShowBody(!showBody);
  };
  return (
    <Grid container style={{ minWidth: "150vw" }} spacing={2}>
      <Grid item xs={12} md={8} lg={6}>
        <Card sx={{ maxWidth: 345, margin: 2 }}>
          <div className="sAc">
            {article ? (
              <>
                <Article article={article} />
                <Button
                  onClick={toggleBody}
                  variant="contained"
                  sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}
                >
                  {showBody ? "Hide Body" : "Show Body"}
                </Button>
                <div className="bodyPara">
                  {showBody && (
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      {article.body}
                    </Typography>
                  )}
                </div>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
          <h2>Comments:</h2>
          <div className="CC">
            {comments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}
