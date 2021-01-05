import React from "react";

import { Card, CardMedia } from "../styles";

import CardHeader from "@material-ui/core/CardHeader";

function Post({ data }) {
  return (
    <Card>
      <CardHeader title={data.camera.name} subheader={data.id} />
      <CardMedia image={data.img_src} />
    </Card>
  );
}

export default Post;
