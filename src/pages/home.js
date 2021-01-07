import React, { useEffect, useState } from "react";

import LinearProgress from "@material-ui/core/LinearProgress";

// Components
import RoversList from "../components/roversList";
import Page from "../components/page";

// Services
import NasaServices from "../services/nasa";

function Home() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);

  useEffect(() => {
    getRovers();
  }, []);

  async function getRovers() {
    const rovers = await NasaServices.listRovers();
    setState(rovers);
    setLoading(false);
  }

  return (
    <Page title="Lista de Rovers">
      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        <RoversList data={state} />
      )}
    </Page>
  );
}

export default Home;
