import React from "react";
import { Paper, Grid } from "@mui/material";
export default function CommentCard({ comment }) {
  const key = comment.comment_id;
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
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
