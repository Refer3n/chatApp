import React from "react";
import s from "../style/loader.module.css";
import { Container, Grid } from "@mui/material";

function Loader() {
  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <div className={s.loader}></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Loader;
