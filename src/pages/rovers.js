import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import AddIcon from '@material-ui/icons/AddCircle';

// Components
import Page from "../components/page";
import Post from "../components/post";
import RoverCard from "../components/roverCard";
import NasaServices from "../services/nasa";

function Rovers() {
  const { rover_name } = useParams();

  const [rover, setState] = useState();
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => getManifest(rover_name), []);

  // Busca os dados do manifesto
  async function getManifest(name) {
    const data = await NasaServices.showManifest(name);
    setState(data);
    let last_update = data.max_date;
    getPhotos(last_update);
  }

  // Altera data e reseta os dados
  function changeDate(date) {
    setPage(1);
    setPhotos([]);
    getPhotos(date);
  }

  // Buscar imagens da data
  async function getPhotos(date = selectedDate) {
    const newPhotos = await NasaServices.listPhotos(rover_name, date, page);
    setSelectedDate(date);
    setPhotos([...photos, ...newPhotos]);
    setLoading(false);
    setFetching(false);
  }

  // Adiciona mais fotos na lista
  function morePhotos() {
    setPage(page + 1);
    setFetching(true);
    getPhotos();
  }

  return (
    <Page>
      <header style={{display: 'flex', justifyContent: 'space-between', marginBottom: 15}}>
        <Typography variant="h3">Fotos</Typography>
        <TextField
          id="date"
          label="Data inicial"
          type="date"
          value={selectedDate}
          onChange={(e) => changeDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </header>
      {!loading ? <RoverCard displayName={false} rover={rover} /> : null}
      <Grid container spacing={3}>
        {photos.map((item) => (
          <Grid key={item.id} item xs={4}>
            <Post data={item} />
          </Grid>
        ))}
        <Grid key={0} item xs={12}>
          {loading || fetching ? (
            <LinearProgress color="secondary" />
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => morePhotos()}
                style={{ margin: "auto", width: 250, background: '#96281b' }}
                size="large"
                variant="contained"
                color="secondary"
              >
                Ver Mais
                &nbsp;
                <AddIcon/> 
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </Page>
  );
}

export default Rovers;
