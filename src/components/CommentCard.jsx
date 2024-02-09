import React from "react";
import { useState } from "react";
import { Paper, Grid, Button } from "@mui/material";
import { deleteComment } from "../../api";
export default function CommentCard({ comment }) {
  const key = comment.comment_id;
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteComment(comment.comment_id);
      alert("Comment deleted successfully");
      window.location.reload();
    } catch (err) {
      console.error("Error Deleting Comment", err);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <div className="commentCard" style={{ padding: 14 }}>
      <Paper key={key} style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item></Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{comment.author}</h4>
            <p style={{ textAlign: "left" }}>{comment.body}</p>
            <p style={{ textAlign: "left" }}>
              {new Date(comment.created_at).toLocaleDateString()}
            </p>
            {comment.author === "grumpy19" && (
              <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete Comment"}
              </Button>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
