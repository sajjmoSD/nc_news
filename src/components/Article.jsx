import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
export default function Article({ children }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={children.article_img_url}
            alt={children.article_title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {children.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Author: {children.author}
              <br />
              Topic: {children.topic}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
