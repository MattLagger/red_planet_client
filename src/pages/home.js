import React, {useEffect, useState} from 'react';
import Page from '../components/page';
import RoverCard from '../components/roverCard';
import RoversList from '../components/roversList';
import NasaServices from '../services/nasa';


function Home () {
    const [state, setState] = useState([]);

    useEffect(() => {
        getRovers();
    }, []);

    async function getRovers() {
        const {success, data} = await NasaServices.listRovers();
        // console.log(success, data);
        setState(data);
    }

    return(
        <Page title='Lista de Rovers'>
            <RoversList data={state} />
        </Page>
    )
}

export default Home;