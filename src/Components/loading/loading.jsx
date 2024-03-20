import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <CircularProgress sx={style} />
    </div>
  );
};

export default Loading;

const style = {
    borderRadius: "25px",
    boxShadow: "0 0 5px #1d7235",
};
