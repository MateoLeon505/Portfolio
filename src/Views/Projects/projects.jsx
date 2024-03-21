import { useState, useEffect } from "react";
import projectsList from "./projectsList.js";
import { Loading } from "../../Components/index.js";
import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Box,
  Modal,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./projects.module.css";

const Projects = () => {
  const projects = projectsList();

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (id) => setSelectedProject(id);

  const handleClose = () => setSelectedProject(null);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 18 }}
            justifyContent="space-evenly"
            sx={{
              padding: "5% 4%",
              alignItems: "center",
              minHeight: "100vh",
              margin: "1rem 0",
              gap: "1rem",
            }}
          >
            {projects.map((project) => (
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                lg={4}
                className={styles.gridProject}
                key={project.id}
              >
                <Card sx={{ maxWidth: 370 }} className={styles.card}>
                  <CardHeader
                    title={project.name}
                    subheader={project.date}
                    style={{ color: " #92E3A9" }}
                    subheaderTypographyProps={{ style: { color: "#FFFFFF" } }}
                  />
                  <CardMedia
                    component="img"
                    image={project.image}
                    className={styles.cardMedia}
                    alt={project.name}
                    // style={{height: 170}}
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#FFFFFF" }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <a
                        target="blank"
                        href={project.repo}
                        className={styles.link}
                      >
                        <FaGithub />
                      </a>
                    </IconButton>
                    <IconButton aria-label="add to favorites">
                      <a
                        target="blank"
                        href={project.deploy}
                        className={styles.link}
                      >
                        <IoLogoVercel />
                      </a>
                    </IconButton>
                    {project.video && (
                      <IconButton aria-label="add to favorites">
                        <a
                          target="blank"
                          href={project.video}
                          className={styles.link}
                        >
                          <FaYoutube />
                        </a>
                      </IconButton>
                    )}

                    <ExpandMore
                      onClick={() => handleOpen(project.id)}
                      style={{ color: "#FFFFFF" }}
                      aria-label="show more"
                    >
                      {selectedProject === project.id ? (
                        <IoIosEye />
                      ) : (
                        <IoIosEyeOff />
                      )}
                    </ExpandMore>
                  </CardActions>
                  <Modal
                    open={selectedProject === project.id}
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
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          margin: 1,
                        }}
                      >
                        <IoMdCloseCircle />
                      </IconButton>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ color: " #92E3A9" }}
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                        <span className={styles.subtitle}> Habilidades: </span>
                        {project.skills}
                      </Typography>
                      <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                        <span className={styles.subtitle}>Desafíos: </span>
                        {project.challenges}
                      </Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        style={{ color: "#FFFFFF" }}
                      >
                        <span className={styles.subtitle}>Impacto: </span>
                        {project.impact}
                      </Typography>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ color: " #92E3A9" }}
                      >
                        Funcionalidades
                      </Typography>
                      <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                        {project.details}
                      </Typography>
                      <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                        {project.details2}
                      </Typography>
                    </Box>
                  </Modal>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Projects;

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
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
