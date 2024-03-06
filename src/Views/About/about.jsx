import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  Avatar,
  Stack,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";
import { PiFileCodeFill } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { PiMonitorPlayFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import Me from "../../assets/img/Me.jpg";
import styles from "./about.module.css";

const About = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <section className={styles.container}>
      <Grid container direction="row" className={styles.gridContainer}>
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Card sx={{ minWidth: 275, height: 480 }} className={styles.mainCard}>
            <CardContent>
              <Stack className={styles.header}>
                <Avatar
                  alt="Me"
                  src={Me}
                  sx={{ width: 80, height: 80, zoom: 2.0 }}
                  className={styles.avatar}
                />
              </Stack>
              <Typography sx={{ fontSize: 14 }} color="#D8D4CF" gutterBottom>
                Bogotá, Colombia <FaLocationDot />
              </Typography>
              <Typography variant="h5" component="div" color="#FFFFFF">
                Mateo León
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="#D8D4CF">
                Desarrollador Fullstack / Frontend & Estudiante de ingeniería
                multimedia
              </Typography>
              <Typography variant="body2">
                <a
                  href="https://wa.me/3245310156"
                  className={styles.anchor}
                  target="blank"
                >
                  <FaPhoneAlt style={{ color: "#92E3A9", fontSize: "18" }} />
                  <IoLogoWhatsapp
                    style={{ color: "#92E3A9", fontSize: "18" }}
                  />{" "}
                  (+57) 3245310156
                </a>
              </Typography>
              <Typography variant="body2">
                <a
                  href="mailto:mateolt505@gmail.com"
                  className={styles.anchor}
                  target="blank"
                >
                  <MdEmail style={{ color: "#92E3A9", fontSize: "18" }} />{" "}
                  mateolt505@gmail.com
                </a>
              </Typography>
              <span className={styles.contactIcons}>
                <div className={styles.social_icon}>
                  <a
                    href="https://www.linkedin.com/in/mateo-le%C3%B3n-097b57268/"
                    target="blank"
                  >
                    <IoLogoLinkedin className={styles.socialMedia} />
                  </a>
                  <a href="https://github.com/MateoLeon505" target="blank">
                    <FaGithub className={styles.socialMedia} />
                  </a>
                </div>
              </span>
            </CardContent>
            <CardActions>
              <button
                className={styles.resumeButton}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/document/d/e/2PACX-1vSzKjJ3hAiBzIkVdRxHXcX22_eJR9VlFzltUmj-XaHPhZi-jXz0Ljn6c_xFuHMedvXoqWKJgqQTcnV9/pub",
                    "_blank"
                  )
                }
              >
                <span>
                  <MdDocumentScanner style={{ fontSize: 20 }} />
                  CV
                </span>
              </button>
              <Button
                className={`${styles.skillsButton} ${styles.effectSkillsButton}`}
                onClick={() => navigate("/skills")}
                style={{
                  background: "#000000",
                  color: "#ffffff",
                  border: "0.1rem solid #2d6c45",
                }}
              >
                <PiFileCodeFill style={{ fontSize: "23" }} />
                Habilidades
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Card
            sx={{ minWidth: 275, height: 480 }}
            className={styles.secondCard}
          >
            <CardContent>
              <div>
                <Tabs value={value} onChange={handleChange}>
                  <Tab
                    label="Acerca de"
                    value="1"
                    className={value !== "1" && styles.tab}
                  />
                  <Tab
                    label="Educación"
                    value="2"
                    className={value !== "2" && styles.tab}
                  />
                  <Tab
                    label="Experiencia"
                    value="3"
                    className={value !== "3" && styles.tab}
                  />
                  <Tab
                    label="Habilidades blandas"
                    value="4"
                    className={value !== "4" && styles.tab}
                  />
                </Tabs>
                {value === "1" && (
                  <Paper className={styles.paper}>
                    <div>
                      <Typography variant="h5" style={{ color: "#92E3A9" }}>
                        ¿Quién soy?
                      </Typography>
                      <Typography variant="body2" align="left">
                        Soy estudiante de ingeniería multimedia y desarrollador
                        web fullstack. Mi enfoque principal se encuentra en el
                        desarrollo frontend, donde siempre busco fusionar la
                        creatividad visual con la funcionalidad impecable.
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h5" style={{ color: "#92E3A9" }}>
                        ¿Qué hago?
                      </Typography>
                      <Typography variant="body2" gutterBottom align="left">
                        Actualmente, me encuentro desarrollando proyectos que me
                        permiten mejorar mis habilidades al implementar
                        innovaciones y curso mi carrera de ingeniería
                        multimedia.
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h5" style={{ color: "#92E3A9" }}>
                        ¿Adónde me dirijo?
                      </Typography>
                      <Typography variant="body2" gutterBottom align="left">
                        Mis objetivos profesionales son crecer como
                        desarrollador web, explorar el emocionante mundo del
                        desarrollo de aplicaciones móviles y contribuir a
                        proyectos que generen un impacto positivo en la
                        sociedad. Siempre estoy abierto a nuevas oportunidades y
                        desafíos emocionantes.
                      </Typography>
                    </div>
                  </Paper>
                )}
                {value === "2" && (
                  <Paper className={styles.paper}>
                    <div>
                      <Typography variant="h5" style={{ color: "#92E3A9" }}>
                        Desarrollador web FullStack
                      </Typography>
                      <Typography variant="body1">
                        <a
                          href="https://certificates.soyhenry.com/new-cert?id=3af51b507287f18ecd58ebabbd94c9c5cb8adf8671032854b18e34051a448e28"
                          target="blank"
                          style={{ color: "#FFFFFF", textDecoration: "none" }}
                        >
                          <b>Bootcamp SoyHenry</b>
                        </a>
                      </Typography>
                      <Typography variant="body1">2023</Typography>
                      <Typography
                        variant="body2"
                        gutterBottom
                        marginBottom={[10]}
                      >
                        <b> +800 </b> horas de cursada
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h5" style={{ color: "#92E3A9" }}>
                        Ingeniería multimedia
                      </Typography>
                      <Typography variant="body1">
                        <b>UNAD (Universidad Nacional abierta y a Distancia)</b>
                      </Typography>
                      <Typography variant="body1">Modalidad virtual</Typography>
                      <Typography variant="body1">
                        2022 - En curso actualmente
                      </Typography>
                    </div>
                  </Paper>
                )}
                {value === "3" && (
                  <Paper className={styles.paper}>
                    <div>
                      <Typography variant="h5" style={{ color: "#92E3A9" }}>
                        Proyecto Final SoyHenry
                      </Typography>
                      <Typography variant="body1" align="left">
                        <b>E-commerce 'Las Encinas Boutique'.</b>
                      </Typography>
                      <Typography variant="body2" align="left">
                        Oct. 2023 - Nov. 2023.
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="body2" align="left">
                        El proyecto me brindó la oportunidad de fortalecer tanto{" "}
                        <span
                          onClick={() => navigate("/skills")}
                          style={{ color: "#92E3A9", cursor: "pointer" }}
                        >
                          mis habilidades técnicas
                        </span>{" "}
                        como{" "}
                        <span
                          onClick={() => setValue("4")}
                          style={{ color: "#92E3A9", cursor: "pointer" }}
                        >
                          mis habilidades blandas
                        </span>{" "}
                        al enfrentar una diversidad de desafíos durante su
                        desarrollo. Esencialmente, logramos cohesionar un equipo
                        en el que aprendimos nuevas tecnologías y colaboramos de
                        manera eficaz en grupo.
                      </Typography>
                      <Typography align="right">
                        <Button
                          onClick={() =>
                            window.open(
                              "https://las-encinas-boutique-omega.vercel.app/home"
                            )
                          }
                        >
                          <CgWebsite style={{ fontSize: 20, marginRight: 5 }} />
                          Sitio Web
                        </Button>
                      </Typography>
                    </div>
                    <div></div>
                    <div>
                      <Button
                        onClick={() => navigate("/projects")}
                        className={`${styles.skillsButton} ${styles.effectSkillsButton}`}
                        style={{
                          background: "#000000",
                          color: "#ffffff",
                          border: "0.1rem solid #2d6c45",
                        }}
                      >
                        <PiMonitorPlayFill
                          style={{ fontSize: 20, marginRight: 7 }}
                        />
                        Mis proyectos
                      </Button>
                    </div>
                  </Paper>
                )}
                {value === "4" && (
                  <Paper className={styles.paper}>
                    <div>
                      <Typography variant="h6" align="left">
                        <FaArrowAltCircleRight style={{ color: "#92E3A9" }} />{" "}
                        Autodidacta
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h6" align="left">
                        <FaArrowAltCircleRight style={{ color: "#92E3A9" }} />{" "}
                        Proactivo
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h6" align="left">
                        <FaArrowAltCircleRight style={{ color: "#92E3A9" }} />{" "}
                        Creatividad
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h6" align="left">
                        <FaArrowAltCircleRight style={{ color: "#92E3A9" }} />{" "}
                        Adaptabilidad
                      </Typography>
                    </div>
                    <div>
                      <Typography variant="h6" align="left">
                        <FaArrowAltCircleRight style={{ color: "#92E3A9" }} />{" "}
                        Trabajo en equipo
                      </Typography>
                    </div>
                  </Paper>
                )}
              </div>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
