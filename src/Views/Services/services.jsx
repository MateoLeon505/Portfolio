import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button } from "@mui/material";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaTrello,
  FaGitAlt,
  FaGitSquare,
} from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiVisualstudiocode,
} from "react-icons/si";
import { AiFillSlackCircle } from "react-icons/ai";
import { PiMonitorPlayFill } from "react-icons/pi";
import styles from "./services.module.css";

const Services = () => {
  const navigate = useNavigate();

  const devTools = [
    { name: "HTML5", image1: <FaHtml5 className={styles.icon} /> },
    { name: "CSS3", image1: <FaCss3Alt className={styles.icon} /> },
    { name: "JavaScript", image1: <SiJavascript className={styles.icon} /> },
    {
      name: "React",
      image1: <FaReact style={{ fontSize: "70px" }} className={styles.icon} />,
    },
    { name: "Redux", image1: <SiRedux className={styles.icon} /> },
    { name: "PostgreSQL", image1: <SiPostgresql className={styles.icon} /> },
  ];

  const tools = [
    { name: "VSCode", image1: <SiVisualstudiocode className={styles.icon} /> },
    { name: "GitHub", image1: <FaGithub className={styles.icon} /> },
    { name: "Slack", image1: <AiFillSlackCircle className={styles.icon} /> },
    { name: "GHProjects", image1: <FaGitSquare className={styles.icon} /> },
    {
      name: "Trello",
      image1: <FaTrello style={{ fontSize: "70px" }} className={styles.icon} />,
    },
    { name: "Git", image1: <FaGitAlt className={styles.icon} /> },
  ];

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.skillsContainer}>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        className={styles.title}
      >
        Herramientas |<span style={{ color: "#92E3A9" }}> Desarrollo</span>
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        className={styles.gridContainer}
      >
        {devTools.map((tool, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={index}
            className={styles.gridTool}
          >
            <span className={styles.skillContainer}>
              <span className={styles.iconContainer}>{tool.image1}</span>
              <Typography sx={{ fontSize: 14 }} className={styles.skillName}>
                {tool.name}
              </Typography>
            </span>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h5"
        gutterBottom
        align="center"
        className={styles.title}
      >
        Complementos |<span style={{ color: "#92E3A9" }}> Gestión</span>
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        className={styles.gridContainer}
      >
        {tools.map((tool, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={index}
            className={styles.gridTool}
          >
            <span className={styles.skillContainer}>
              <span className={styles.iconContainer}>{tool.image1}</span>
              <Typography sx={{ fontSize: 14 }} className={styles.skillName}>
                {tool.name}
              </Typography>
            </span>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" align="center">
        <Button
          className={styles.projects}
          variant="contained"
          onClick={() => navigate("/projects")}
          style={{ background: "#ECEFF1", color: "#121212" }}
        >
          <PiMonitorPlayFill style={{ fontSize: "23" }} /> Proyectos
        </Button>
      </Typography>
    </Box>
  );
};

export default Services;
