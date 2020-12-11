import React from 'react'
import Button from '@material-ui/core/Button'

const authorizeUrl = 'https://github.com/login/oauth/authorize'
const clientId = '90c663150f8be97ea2aa'
const scope = 'user'

function login () {
    return(
        <div>
            <h1>Logar</h1>
            <Button
                href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}>
                Login with GitHub
            </Button>
        </div>
    )
};

export default login;
