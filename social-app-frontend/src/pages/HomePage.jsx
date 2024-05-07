import { Link, useNavigate } from "react-router-dom";

import { Box, Grid } from "@mui/material";

import AppBar from "../Component/AppBar";

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    if (true) navigate("/profile");
    else navigate("/ggez");
  };

  return (
    <>
      {/* <h1>HomePage</h1> */}
      <Box>
        <AppBar />
        <Grid
          container
          sx={{ textAlign: "center", height: "calc(100vh-64px)" }}
        >
          <Grid
            item
            md={3}
            sx={{
              backgroundColor: "wheat",
              display: { sm: "none", md: "block" },
            }}
          >
            L
          </Grid>
          <Grid item sm={12} md={6}>
            M
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              backgroundColor: "wheat",
              display: { sm: "none", md: "block" },
            }}
          >
            R
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;
