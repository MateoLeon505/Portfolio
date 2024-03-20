import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../Components/index";
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
import { FaLocationDot, FaGithub, FaPeopleGroup } from "react-icons/fa6";
import { FaPhoneAlt, FaArrowAltCircleRight } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdDocumentScanner, MdCastForEducation } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { PiFileCodeFill } from "react-icons/pi";
import { PiMonitorPlayFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { GrContactInfo } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";
import Me from "../../assets/img/Me.jpg";
import styles from "./about.module.css";

const About = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");

  const handleChange = (event, value) => {
    setValue(value);
  };

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
            sx={{
              padding: "0 4%",
              flexDirection: { lg: "row", md: "row", xs: "column" },
              justifyContent: "space-evenly",
              alignItems: "center",
              minHeight: "100vh",
              margin: "1rem 0",
              gap: "1rem",
            }}
          >
            <Grid item xs={12} sm={9} md={5.5} lg={4}>
              <Card
                sx={{ minWidth: 275, height: 480, backgroundColor: "#181a1b" }}
              >
                <CardContent>
                  <Stack className={styles.header}>
                    <Avatar
                      alt="Me"
                      src={Me}
                      sx={{
                        width: 80,
                        height: 80,
                        zoom: 2.0,
                        border: "4px solid #1d7235",
                      }}
                    />
                  </Stack>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="#D8D4CF"
                    gutterBottom
                  >
                    Bogotá, Colombia <FaLocationDot />
                  </Typography>
                  <Typography variant="h5" component="div" color="#FFFFFF">
                    Mateo León
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="#D8D4CF">
                    Desarrollador Fullstack / Frontend & Estudiante de
                    ingeniería multimedia
                  </Typography>
                  <Typography variant="body2">
                    <a
                      href="https://wa.me/3245310156"
                      className={styles.anchor}
                      target="blank"
                    >
                      <FaPhoneAlt
                        style={{ color: "#92E3A9", fontSize: "18" }}
                      />
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
            <Grid item xs={12} sm={9} md={5.8} lg={4.3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#121212",
                  color: "#ffffff",
                  border: "1px solid #ffffff",
                  padding: 0,
                }}
              >
                <CardContent>
                  <div>
                    <Tabs value={value} onChange={handleChange}>
                      <Tab
                        label={<GrContactInfo style={{ fontSize: "1.5rem" }} />}
                        value="1"
                        style={value !== "1" ? { color: "#ffffff" } : {}}
                      />
                      <Tab
                        label={
                          <MdCastForEducation style={{ fontSize: "1.5rem" }} />
                        }
                        value="2"
                        style={value !== "2" ? { color: "#ffffff" } : {}}
                      />
                      <Tab
                        label={<GiProgression style={{ fontSize: "1.5rem" }} />}
                        value="3"
                        style={value !== "3" ? { color: "#ffffff" } : {}}
                      />
                      <Tab
                        label={<FaPeopleGroup style={{ fontSize: "1.5rem" }} />}
                        value="4"
                        style={value !== "4" ? { color: "#ffffff" } : {}}
                      />
                    </Tabs>
                    {value === "1" && (
                      <Paper
                        style={{
                          backgroundColor: "#121212",
                          color: "#ffffff",
                          padding: "1rem",
                          border: "1px solid #ffffff",
                        }}
                        className={styles.paper}
                      >
                        <Typography
                          variant="h5"
                          align="center"
                          style={{ color: "#92E3A9" }}
                        >
                          Sobre mí
                        </Typography>
                        <Typography variant="body2" gutterBottom align="left">
                          Soy estudiante de ingeniería multimedia y
                          desarrollador web fullstack. Mi enfoque principal se
                          encuentra en el desarrollo frontend, donde busco
                          fusionar la creatividad visual con la funcionalidad
                          impecable.
                        </Typography>
                        <Typography variant="body2" gutterBottom align="left">
                          Actualmente, me encuentro desarrollando proyectos que
                          me permiten mejorar mis habilidades al implementar
                          innovaciones y curso mi carrera de ingeniería
                          multimedia.
                        </Typography>
                        <Typography variant="body2" gutterBottom align="left">
                          Mis objetivos profesionales son crecer como
                          desarrollador web, explorar el emocionante mundo del
                          desarrollo de aplicaciones móviles y contribuir a
                          proyectos que generen un impacto positivo en la
                          sociedad. Siempre estoy abierto a nuevas oportunidades
                          y desafíos emocionantes.
                        </Typography>
                      </Paper>
                    )}
                    {value === "2" && (
                      <Paper
                        style={{
                          backgroundColor: "#121212",
                          color: "#ffffff",
                          padding: "1rem",
                          border: "1px solid #ffffff",
                        }}
                        className={styles.paper}
                      >
                        <Typography
                          variant="h5"
                          align="center"
                          style={{ color: "#92E3A9" }}
                        >
                          Educación
                        </Typography>
                        <Typography variant="h6" style={{ color: "#92E3A9" }}>
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
                          marginBottom={[4]}
                        >
                          <b> +800 </b> horas de cursada
                        </Typography>
                        <Typography variant="h6" style={{ color: "#92E3A9" }}>
                          Ingeniería multimedia
                        </Typography>
                        <Typography variant="body1">
                          <b>
                            UNAD (Universidad Nacional abierta y a Distancia)
                          </b>
                        </Typography>
                        <Typography variant="body1">
                          Modalidad virtual
                        </Typography>
                        <Typography variant="body1">
                          2022 - En curso actualmente
                        </Typography>
                      </Paper>
                    )}
                    {value === "3" && (
                      <Paper
                        style={{
                          backgroundColor: "#121212",
                          color: "#ffffff",
                          padding: "1rem",
                          border: "1px solid #ffffff",
                        }}
                        className={styles.paper}
                      >
                        <Typography
                          variant="h5"
                          align="center"
                          style={{ color: "#92E3A9" }}
                        >
                          Experiencia
                        </Typography>
                        <Typography
                          variant="h6"
                          align="left"
                          style={{ color: "#92E3A9" }}
                        >
                          Proyecto Final SoyHenry
                        </Typography>
                        <Typography variant="body1" align="left">
                          <b>E-commerce 'Las Encinas Boutique'.</b>
                        </Typography>
                        <Typography variant="body2" align="left">
                          Oct. 2023 - Nov. 2023.
                        </Typography>
                        <Typography variant="body2" align="left">
                          El proyecto me brindó la oportunidad de fortalecer
                          tanto{" "}
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
                          desarrollo. Esencialmente, logramos cohesionar un
                          equipo en el que aprendimos nuevas tecnologías y
                          colaboramos de manera eficaz en grupo.
                        </Typography>
                        <Typography align="right">
                          <Button
                            onClick={() =>
                              window.open(
                                "https://las-encinas-boutique-omega.vercel.app/home"
                              )
                            }
                          >
                            <CgWebsite
                              style={{ fontSize: 20, marginRight: 5 }}
                            />
                            Sitio Web
                          </Button>
                        </Typography>

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
                      <Paper
                        style={{
                          backgroundColor: "#121212",
                          color: "#ffffff",
                          padding: "1rem",
                          border: "1px solid #ffffff",
                        }}
                        className={styles.paper}
                      >
                        <Typography variant="h5" align="center" style={{ color: "#92E3A9" }}>
                          Habilidades blandas
                        </Typography>
                        <div className={styles.softSkills}>
                          <Typography variant="h6" align="left">
                            <FaArrowAltCircleRight
                              style={{ color: "#92E3A9" }}
                            />{" "}
                            Autodidacta:                           
                            <Typography variant="body2" >
                            Autodidacta
                          </Typography>
                          </Typography>                          
                        </div>
                        <div>
                          <Typography variant="h6" align="left">
                            <FaArrowAltCircleRight
                              style={{ color: "#92E3A9" }}
                            />{" "}
                            Proactivo
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="h6" align="left">
                            <FaArrowAltCircleRight
                              style={{ color: "#92E3A9" }}
                            />{" "}
                            Creatividad
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="h6" align="left">
                            <FaArrowAltCircleRight
                              style={{ color: "#92E3A9" }}
                            />{" "}
                            Adaptabilidad
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="h6" align="left">
                            <FaArrowAltCircleRight
                              style={{ color: "#92E3A9" }}
                            />{" "}
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
        </div>
      )}
    </div>
  );
};

export default About;
