import React from 'react';
import {MainContainer} from '../styles';

function Page({title, children}) {
    return(
        <MainContainer>
            <h1>{title}</h1>
            <br/>
            {children}
        </MainContainer>
    )
};

export default Page
