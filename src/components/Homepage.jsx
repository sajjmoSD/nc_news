import Header from "./Header";
import { Link } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
export default function Homepage() {
  return (
    <section>
      <div>
        <Header text="Land of NC-News" />
      </div>
      <Box sx={{ textAlign: "center", margin: "auto" }}>
        <Link to="/articles">
          <Button size="large" variant="outlined">
            See Articles!
          </Button>
        </Link>
      </Box>
    </section>
  );
}
