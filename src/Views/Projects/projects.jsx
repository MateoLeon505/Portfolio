import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import lasEncinasBoutique from "../../assets/img/projects/Las-Encinas-Boutique.png";
import { FaGithub, FaYoutube } from "react-icons/fa";
import raceHub from "../../assets/img/projects/Race-Hub.png";
import { IoLogoVercel } from "react-icons/io5";
import styles from "./projects.module.css";

const Projects = () => {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);

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

  const handleExpandClick = (id) => {
    id === "1" ? setExpanded(!expanded) : setExpanded2(!expanded2);
  };

  const projects = [
    {
      name: "RaceHub",
      date: "Octubre, 2023",
      image: raceHub,
      repo: "https://github.com/MateoLeon505/PI-Drivers",
      deploy: "https://deploy-eight-xi.vercel.app/",
      video: "",
      description:
        "SPA desarrollada con una API con pilotos de F1. Fue un proyecto para el bootcamp de SOYHENRY.",
      expanded: expanded,
      id: "1",
      title: "Desarrollo del proyecto:",
      challenges:
        "Integrar la API, optimizar el rendimiento y gestionar el estado de la aplicación.",
      skills:
        "Desarrollo Fullstack, UI/UX, React, Redux, Node, Express, Sequelize, CSS.",
      impact:
        "El proyecto me permitió mejorar mis habilidades como desarrollador y crear una aplicación completa y funcional.",
      title2: "Funcionalidades:",
      details:
        "La aplicación permite: Buscar pilotos, visualizar la información de los mismos, filtrarlos, ordenarlos y crear nuevos pilotos.",
      time: "3 Semanas",
    },
    {
      name: "Las Encinas Boutique",
      date: "Noviembre, 2023",
      image: lasEncinasBoutique,
      repo: "https://github.com/thomasrey99/Las-Encinas-Boutique-",
      deploy: "https://las-encinas-boutique-omega.vercel.app/home",
      video: "https://www.youtube.com/watch?v=ld3ZKo4DfjE&t=58s",
      description:
        "E-Commerce de chocolatería artesanal. Fue el proyecto grupal final del bootcamp de SOYHENRY.",
      expanded: expanded2,
      id: "2",
      title: "Participación en el proyecto:",
      challenges:
        "Implementar una interfaz de usuario atractiva y fácil de usar, integrar diferentes tecnologías y optimizar el rendimiento de la aplicación",
      skills:
        "Desarrollo Front-End/Fullstack, React, Redux Toolkit, Node, Express, Sequelize, Cloudinary, Firebase, Ant Design, UI/UX, Trabajo en equipo.",
      impact:
        "El proyecto me permitió aprender nuevas tecnologías, desarrollar habilidades blandas y trabajar en equipo de forma eficaz.",
      title2: "Funcionalidades:",
      details:
        "Usuarios: Registro/inicio de sesión, búsqueda/compra de productos, favoritos, perfil, historial, chat, 4 idiomas.",
      details2:
        "Administradores: Gestión de productos, usuarios, pedidos y pagos.",
      time: "4 semanas",
    },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
      className={styles.gridContainer}
    >
      {projects.map((project) => (
        <Grid item xs={12} sm={8} md={5} lg={4} className={styles.gridProject}>
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
              alt={project.name}
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
              {/* <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton> */}
              <IconButton aria-label="add to favorites">
                <a target="blank" href={project.repo} className={styles.link}>
                  <FaGithub />
                </a>
              </IconButton>
              <IconButton aria-label="add to favorites">
                <a target="blank" href={project.deploy} className={styles.link}>
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
                expand={project.expanded}
                onClick={() => handleExpandClick(project.id)}
                aria-expanded={project.expanded}
                style={{ color: "#FFFFFF" }}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={project.expanded}
              timeout="auto"
              unmountOnExit
              id={project.id}
              className={styles.collapse}
            >
              <CardContent>
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
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
