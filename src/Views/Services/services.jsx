import { useEffect, useState } from "react";
import { Loading } from "../../Components/index";
import { Box, Grid, Typography } from "@mui/material";
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
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiTailwindcss, SiPrisma } from "react-icons/si";
import styles from "./services.module.css";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const devTools = [
    {
      name: "React",
      image1: <FaReact style={{ fontSize: "70px" }} className={styles.icon} />,
    },
    { name: "Next.js", image1: <TbBrandNextjs className={styles.icon} /> },
    {
      name: "React Native",
      image1: <TbBrandReactNative className={styles.icon} />,
    },
    { name: "JavaScript", image1: <SiJavascript className={styles.icon} /> },
    { name: "Redux", image1: <SiRedux className={styles.icon} /> },
    { name: "CSS3", image1: <FaCss3Alt className={styles.icon} /> },
    { name: "Tailwind CSS", image1: <SiTailwindcss className={styles.icon} /> },
    { name: "Prisma", image1: <SiPrisma className={styles.icon} /> },
    { name: "PostgreSQL", image1: <SiPostgresql className={styles.icon} /> },
    { name: "HTML5", image1: <FaHtml5 className={styles.icon} /> },
  ];

  const tools = [
    { name: "VSCode", image1: <SiVisualstudiocode className={styles.icon} /> },
    { name: "GitHub", image1: <FaGithub className={styles.icon} /> },
    { name: "Slack", image1: <AiFillSlackCircle className={styles.icon} /> },
    { name: "GHProjects", image1: <FaGitSquare className={styles.icon} /> },
    {
      name: "Trello",
      image1: <FaTrello className={styles.icon} />,
    },
    { name: "Git", image1: <FaGitAlt className={styles.icon} /> },
  ];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.servicesContainer}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            className={styles.title}
          >
            Mis <span style={{ color: "#92E3A9" }}> Habilidades</span>
          </Typography>
          <Box sx={{ flexGrow: 1, paddingX: "6%", paddingY: "1%", display: "flex"}}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent="center"
              flex={1}
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
                  <div className={styles.skillContainer}>
                    <div className={styles.iconContainer}>{tool.image1}</div>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className={styles.skillName}
                    >
                      {tool.name}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent="center"
              flex={1}
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
                  <div className={styles.skillContainer}>
                    <div className={styles.iconContainer}>{tool.image1}</div>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className={styles.skillName}
                    >
                      {tool.name}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/* <Box sx={{ flexGrow: 1, padding: "6%" }}>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              className={styles.title}
            >
              Herramientas |
              <span style={{ color: "#92E3A9" }}> Desarrollo</span>
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
                  <div className={styles.skillContainer}>
                    <div className={styles.iconContainer}>{tool.image1}</div>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className={styles.skillName}
                    >
                      {tool.name}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
            <Typography
              variant="h4"
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
                  <div className={styles.skillContainer}>
                    <div className={styles.iconContainer}>{tool.image1}</div>
                    <Typography
                      sx={{ fontSize: 14 }}
                      className={styles.skillName}
                    >
                      {tool.name}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box> */}
        </div>
      )}
    </>
  );
};

export default Services;
