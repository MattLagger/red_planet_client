import React, { useEffect } from "react";

// Services
import { isAuthenticated } from "../services/auth";

// Utils
import { getQueryParams } from "../utils";

// Material-ui Components
import Container from "@material-ui/core/Container";

// Custom Components
import { LoginContainer, Typography, LoginScreen } from "../styles";
import LoginButton from "../components/loginButton";

function Login(props) {
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    const { token } = getQueryParams();

    if (isAuthenticated()) {
      props.history.push("/main");
    } else if (token !== undefined) {
      localStorage.setItem("token", token);
      props.history.push("/main");
    }
  };

  return (
    <LoginScreen>
      <Container style={{ height: "100%" }}>
        <LoginContainer>
          <Typography variant="h1">Red Planet</Typography>
          <Typography variant="h5" gutterBottom>
            Um vislumbre do próximo passo da humanidade.
          </Typography>
          <LoginButton />
        </LoginContainer>
      </Container>
    </LoginScreen>
  );
}

export default Login;
