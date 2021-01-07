import React, { useState, useEffect } from "react";

import api from "../services/api";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import LinearProgress from "@material-ui/core/LinearProgress";
import MuiAlert from "@material-ui/lab/Alert";

// Components
import Page from "../components/page";
import FavoritePost from "../components/favoritePost";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Favorites() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState([]);
  const [message, setMessage] = useState(null);
  const [severity, setSeverity] = useState("error");

  useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites(params) {
    const { data } = await api.get("favorites");
    setLoading(false);
    setPhotos(data);
  }

  function clearAlert() {
    setSeverity("error");
    setMessage(null);
  }

  async function deleteFavorite(id) {
    try {
      const {data} = await api.delete(`favorites/${id}`);
      setPhotos(data);
      setSeverity("success");
      setMessage("Excluido com sucesso");
    } catch (error) {
      setSeverity("error");
      setMessage("Não foi possível excluir");
    }
  }

  return (
    <Page>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 15,
        }}
      >
        <Typography variant="h3">Favoritos</Typography>
      </header>
      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        <>
          <Grid container spacing={3}>
            {photos.map((item) => (
              <Grid key={item.id} item xs={4}>
                <FavoritePost remove={deleteFavorite} data={item} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
      <Snackbar
        open={message != null}
        autoHideDuration={6000}
        onClose={() => clearAlert()}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </Page>
  );
}

export default Favorites;
