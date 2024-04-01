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
  FaNode,
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

  const fontendTools = [
    {
      name: "React",
      image1: <FaReact className={styles.icon} />,
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
    { name: "HTML5", image1: <FaHtml5 className={styles.icon} /> },
  ];

  const backendAndTools = [
    { name: "Node.js", image1: <FaNode className={styles.icon} /> },
    { name: "PostgreSQL", image1: <SiPostgresql className={styles.icon} /> },
    { name: "Prisma", image1: <SiPrisma className={styles.icon} /> },
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
            variant="h3"
            gutterBottom
            align="center"
            className={styles.title}
          >
            Habilidades <span style={{ color: "#92E3A9" }}> técnicas</span>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              paddingX: "6%",
              paddingY: "1%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 5,
            }}
          >
            <Grid
              container
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
              className={styles.gridContainer}
            >
              <div
                style={{ borderBottom: "1px solid white", textAlign: "center" }}
              >
                <Typography variant="h4">Frontend</Typography>
              </div>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  flex: 1,
                }}
              >
                {fontendTools.map((tool, index) => (
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    key={index}
                    className={styles.gridTool}
                  >
                    <div className={styles.skillContainer}>
                      <div className={styles.iconContainer}>{tool.image1}</div>
                      <Typography variant="body1" className={styles.skillName}>
                        {tool.name}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}
              className={styles.gridContainer}
            >
              <div
                style={{ borderBottom: "1px solid white", textAlign: "center" }}
              >
                <Typography variant="h4">Backend & Herramientas</Typography>
              </div>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  flex: 1,
                }}
              >
                {backendAndTools.map((tool, index) => (
                  <Grid
                    item
                    xs={4}
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
            </Grid>
          </Box>
        </div>
      )}
    </>
  );
};

export default Services;
