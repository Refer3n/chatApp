import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { useAppContext } from "../utils/context";

function Login() {
  const { auth, firebase } = useAppContext();

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          style={{ width: 400, background: "#fafafa", borderRadius: 15 }}
        >
          <Box p={5}>
            <Button color={"warning"} variant={"outlined"} onClick={login}>
              Log in{" "}
              <img
                style={{ marginLeft: "10px" }}
                width={90}
                src="https://iconape.com/wp-content/files/ur/370111/svg/google-logo-icon-png-svg.png"
                alt="google icon"
              />{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
