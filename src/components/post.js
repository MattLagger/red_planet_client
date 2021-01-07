import React, { useState } from "react";

import { Card, CardMedia } from "../styles";

import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import StarIcon from "@material-ui/icons/Star";
import api from "../services/api";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Post({ data }) {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('error');

  function saveFavorite() {
    let favorite = {
      rover_name: data.rover.name,
      camera_name: data.camera.name,
      image_date: data.earth_date,
      image_url: data.img_src,
      image_id: data.id,
    };

    api
      .post("/favorites", favorite)
      .then((resp) => {
        setSeverity("success");
        setMessage("Favoritado com sucesso");
      })
      .catch((err) => {
        setSeverity("error");
        if (err.response.status === 422) {
          setMessage(err.response.data.image_id[0]);
        } else {
          setMessage(
            "Falha de conexão com servidor, tente novamente mais tarde."
          );
        }
      });
  }

  function clearAlert() {
    setSeverity('error');
    setMessage(null);
  }

  return (
    <Card>
      <CardHeader
        title={data.camera.name}
        subheader={data.id}
        action={
          <IconButton onClick={() => saveFavorite()} aria-label="settings">
            <StarIcon />
          </IconButton>
        }
      />
      <CardMedia image={data.img_src} />
      <Snackbar
        open={message !== ''}
        autoHideDuration={6000}
        onClose={() => clearAlert()}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </Card>
  );
}

export default Post;
