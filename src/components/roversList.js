import React from "react";
import RoverCard from "./roverCard";

function RoversList({ data }) {
  function renderRovers() {
    return data.rovers.map((item) => <RoverCard rover={item} />);
  }

  if (data.rovers) return <div>{renderRovers()}</div>;

  return null;
}

export default RoversList;
