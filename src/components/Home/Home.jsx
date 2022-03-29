import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Home() {
  return (
    <div>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h1" component="div" gutterBottom>
          Välkommen!
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Alltid billigast på byn!
        </Typography>
      </Box>
    </div>
  );
}

export default Home;
