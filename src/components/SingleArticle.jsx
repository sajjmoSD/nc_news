import { useState, useEffect } from "react";
import {
  fetchArticlebyId,
  fetchCommentsByArticleId,
  postComment,
} from "../../api";
import { useParams } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
  Card,
  CardMedia,
  TextField,
} from "@mui/material";
import CommentCard from "./CommentCard";

export default function SingleArticle() {
  const { id } = useParams();
  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);
  const [showBody, setShowBody] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    });
  }, [id, newComment]);
  const toggleBody = () => {
    setShowBody(!showBody);
  };
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  const handleSubmitComment = async () => {
    setIsSubmitting(true);
    try {
      const comData = {
        body: newComment,
        article_id: id,
        author: "grumpy19",
        votes: 0,
        created_at: new Date(),
      };
      const res = await postComment(id, comData);
      setComments([...comments, res]);
      setNewComment("");
    } catch (err) {
      console.error("posting comment failed", err);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h2" align={"center"}>
        {article.title}
      </Typography>
      <Typography variant="subtitle1" align={"left"} sx={{ marginTop: "10px" }}>
        Author: {article.author}
      </Typography>
      <CardMedia
        component="img"
        style={{
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "10px",
          marginTop: "10px",
          borderRadius: "10px",
        }}
        image={article.article_img_url}
        alt={article.article_title}
      />
      Votes: {article.votes}
      <br />
      Comment Count: {article.comment_count}
      <div className="sAc">
        {article ? (
          <>
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
      <div>
        <TextField
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          multiline
          fullWidth
          variant="outlined"
          rows={4}
          sx={{ mt: 2 }}
        />
        <Button
          onClick={handleSubmitComment}
          variant="contained"
          disabled={isSubmitting}
          sx={{ mt: 2, mb: 2, ml: 2, mr: 2 }}
        >
          {isSubmitting ? "Posting..." : "Post Comment"}
        </Button>
      </div>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Card sx={{ maxWidth: 600, margin: 2 }}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Comments:
            </Typography>
            <div className="CC" style={{ backgroundColor: "lightgrey" }}>
              {comments.map((comment) => (
                <CommentCard key={comment.comment_id} comment={comment} />
              ))}
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
