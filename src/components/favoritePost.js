import React from "react";
import moment from 'moment';

import { Card, CardMedia } from "../styles";

import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";

import DeleteIcon from "@material-ui/icons/Delete";

function FavoritePost({ data, remove }) {
  return (
    <Card>
      <CardHeader
        title={data.camera_name}
        subheader={`${data.image_id} - ${moment(data.image_date).format('DD/MM/YYYY')}`}
        action={
          <IconButton onClick={() => remove(data.id)} aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardMedia image={data.image_url} />
    </Card>
  );
}

export default FavoritePost;
