import React from "react";

const Map = (props) => {
  return (
    <div
      style={{
        margin: 10,
        padding: 10,
        border: "1px solid #073b5d",
        width: 280,
      }}
    >
      {props.id}. {props.name}
    </div>
  );
};

export default Map;
