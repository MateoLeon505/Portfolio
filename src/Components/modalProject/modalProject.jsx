// import React from "react";
// import { useState } from "react";
// import projectsList from "./projectsList.js";
// import {
//   Grid,
//   Typography,
//   Card,
//   CardHeader,
//   CardMedia,
//   CardContent,
//   CardActions,
//   IconButton,
//   Box,
//   Modal,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { FaGithub, FaYoutube } from "react-icons/fa";
// import { IoLogoVercel } from "react-icons/io5";
// import { IoIosEye } from "react-icons/io";
// import { IoIosEyeOff } from "react-icons/io";
// import { IoMdCloseCircle } from "react-icons/io";
// import styles from "./projects.module.css";


// const ModalProject = ({project}) => {
//   return (
//     <Modal
//       id={project.id}
//       key={project.id}
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <IconButton
//           edge="end"
//           color="inherit"
//           onClick={handleClose}
//           aria-label="Cerrar"
//           sx={{ position: "absolute", top: 0, right: 0, margin: 1 }}
//         >
//           <IoMdCloseCircle />
//         </IconButton>
//         <Typography variant="h6" align="center" style={{ color: " #92E3A9" }}>
//           {project.title}
//         </Typography>
//         <Typography variant="body2" style={{ color: "#FFFFFF" }}>
//           <span className={styles.subtitle}> Habilidades: </span>
//           {project.skills}
//         </Typography>
//         <Typography variant="body2" style={{ color: "#FFFFFF" }}>
//           <span className={styles.subtitle}>Desafíos: </span>
//           {project.challenges}
//         </Typography>
//         <Typography variant="body2" gutterBottom style={{ color: "#FFFFFF" }}>
//           <span className={styles.subtitle}>Impacto: </span>
//           {project.impact}
//         </Typography>
//         <Typography variant="h6" align="center" style={{ color: " #92E3A9" }}>
//           Funcionalidades
//         </Typography>
//         <Typography variant="body2" style={{ color: "#FFFFFF" }}>
//           {project.details}
//         </Typography>
//         <Typography variant="body2" style={{ color: "#FFFFFF" }}>
//           {project.details2}
//         </Typography>
//       </Box>
//     </Modal>
//   );
// };

// export default ModalProject;
