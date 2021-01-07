import React from 'react';
import {MainContainer} from '../styles';

import Typography from '@material-ui/core/Typography';

function Page({title, children}) {
    return(
        <MainContainer>
            <Typography variant="h2" component="h2" gutterBottom>{title}</Typography>
            <br/>
            {children}
        </MainContainer>
    )
};

export default Page
