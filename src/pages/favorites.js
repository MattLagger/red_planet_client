import React, { useState, useEffect, useRef } from "react";

import api from "../services/api";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import AddIcon from "@material-ui/icons/AddCircle";

// Components
import Page from "../components/page";
import Post from "../components/post";

function Favorites() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites(params) {
    const { data } = await api.get("favorites");
    setLoading(false);
    setPhotos(data);
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
          {JSON.stringify(photos)}
          {/* <Grid container spacing={3}>
          {photos.map((item) => (
            <Grid key={item.id} item xs={4}>
              <Post data={item} />
            </Grid>
          ))}
        </Grid> */}
        </>
      )}
    </Page>
  );
}

export default Favorites;
