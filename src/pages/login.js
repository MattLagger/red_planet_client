import React, { Component } from "react"

// Material-ui Components
import Container from "@material-ui/core/Container"

// Custom Components
import { LoginContainer, Typography, LoginScreen } from '../styles'
import LoginButton from "../components/loginButton"

class Login extends Component {
  render() {
    return (
        <LoginScreen>
            <Container style={{height: '100%'}}>
            <LoginContainer>
            <Typography variant="h1">Red Planet</Typography>
            <Typography variant="h5" gutterBottom>
            Um vislumbre do próximo passo da humanidade.
            </Typography>
            <LoginButton />
            </LoginContainer>
            </Container>
        </LoginScreen>
    )
  }
}

export default Login
