import React, { useState } from "react";
import { Typography, Box, Modal, IconButton } from "@mui/material";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

const Info = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <Typography
          variant="body1"
          align="center"
          sx={{ ":hover": { color: "#92E3A9" } }}
        >
          <BsFillInfoCircleFill /> Info +
        </Typography>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="Cerrar"
            sx={{ position: "absolute", top: 0, right: 0, margin: 1 }}
          >
            <IoMdCloseCircle />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Portfolio
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Proyecto desarollado con React, FormSpree, Material Ui, CSS & React
            Icons.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Info;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#121212",
  border: "2px solid #181A1B",
  boxShadow: 24,
  p: 4,
};
