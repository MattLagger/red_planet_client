import React, {useEffect, useState} from 'react';
import Page from '../components/page';
import RoversList from '../components/roversList';
import NasaServices from '../services/nasa';


function Home () {
    const [state, setState] = useState([]);

    useEffect(() => {
        getRovers();
    }, []);

    async function getRovers() {
        const rovers = await NasaServices.listRovers();
        setState(rovers)
    }

    return(
        <Page title='Lista de Rovers'>
            <RoversList data={state} />
        </Page>
    )
}

export default Home;