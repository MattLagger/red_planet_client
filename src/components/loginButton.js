import React from 'react'

// Material Component
import {Button} from '../styles'

// Icons
import GithubIcon from '@material-ui/icons/GitHub'

const authorizeUrl = 'https://github.com/login/oauth/authorize'
const clientId = '90c663150f8be97ea2aa'
const scope = 'user'


function login () {
    return(
        <Button
            accent
            size='large'
            href={`${authorizeUrl}?client_id=${clientId}&scope=${scope}`}>
            Login com GitHub &nbsp; <GithubIcon/>
        </Button>
    )
};

export default login;