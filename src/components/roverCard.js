import React from "react";

import moment from 'moment';

// Material UI Components
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Material UI Icons
// import Online from "@mate"

/* <p>
            {JSON.stringify(rover)}
        </p> */

function RoverCard({ rover }) {
  return (
    <>
      <Card>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="h2">
              {rover.name}
            </Typography>
            <Chip
              style={{ width: 75 }}
              color={rover.status == "active" ? "primary" : "secondary"}
              label={rover.status == "active" ? "Ativo" : "Inativo"}
            />
          </div>
          <Typography color="textSecondary">
            {rover.total_photos || 0} Fotos
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" component="p">
              <b>Data de Pouso:</b> {moment(rover.landing_date).format('DD/MM/YYYY')}
            </Typography>
            <Typography variant="body2" component="p">
              <b>Ultima Atividade:</b> {moment(rover.max_date).format('DD/MM/YYYY')}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary">Ver Mais</Button>
        </CardActions>
      </Card>
      <br />
    </>
  );
}

export default RoverCard;
