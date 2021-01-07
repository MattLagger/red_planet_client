import styled from 'styled-components'

// Material-ui buttons
import MUITypography from "@material-ui/core/Typography"
import MUIButton from '@material-ui/core/Button'
import MUIContainer from '@material-ui/core/Container';
import MUICard from '@material-ui/core/Card';
import MUICardMedia from '@material-ui/core/CardMedia';

import background from './assets/mars_surface.jpg';

export const MainContainer = styled(MUIContainer)`
    margin-top: 50px;
`;

export const LoginScreen = styled.div`
    background:
    linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${background});
    background-size: cover;
    height: 100vh; 
`;

export const LoginContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

export const Typography = styled(MUITypography)`
    text-align: center;
    color: whitesmoke;
`;

export const Button = styled(MUIButton)`
    background-color: rgb(245, 245, 245, 0.3) !important; 
    color: white !important; 
    margin-Top: 150px;
    transition: ease-in-out .3s;
    
    &:hover {
        color: #212121 !important;
        background-color: whitesmoke !important;
        transition: ease-in-out .3s;
    }
`;

export const Card = styled(MUICard)`
    width: 100%;
`;

export const CardMedia = styled(MUICardMedia)`
    height: 0;
    padding-top: 56.25%; 
`;