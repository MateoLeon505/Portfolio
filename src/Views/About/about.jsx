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
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={4}
        >
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
                  <FaPhoneAlt style={{ color: "#92E3A9", fontSize: '18' }} />
                  <IoLogoWhatsapp style={{ color: "#92E3A9", fontSize: '18' }} /> (+57) 3245310153
                </a>
              </Typography>
              <Typography variant="body2">
                <a
                  href="mailto:mateolt505@gmail.com"
                  className={styles.anchor}
                  target="blank"
                >
                  <MdEmail style={{ color: "#92E3A9", fontSize: '18' }} />{" "}
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
              <Button
                className={styles.resume}
                onClick={() =>
                  window.open(
                    "https://docs.google.com/document/d/e/2PACX-1vSzKjJ3hAiBzIkVdRxHXcX22_eJR9VlFzltUmj-XaHPhZi-jXz0Ljn6c_xFuHMedvXoqWKJgqQTcnV9/pub",
                    "_blank"
                  )
                }
              >
                <MdDocumentScanner style={{fontSize: '22'}} />
                CV
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
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // textColor="#92E3A9"
                >
                  <Tab
                    label="Educación"
                    value="1"
                    className={value === "1" ? styles.tabSelected : styles.tab}
                  />
                  <Tab
                    label="Experiencia"
                    value="2"
                    className={value === "2" ? styles.tabSelected : styles.tab}
                  />
                </Tabs>
                {value === "1" && (
                  <Paper className={styles.paper}>
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ color: "#92E3A9" }}
                    >
                      Desarrollador FullStack
                    </Typography>
                    <Typography variant="body1" align="center">
                      <a
                        href="https://certificates.soyhenry.com/new-cert?id=3af51b507287f18ecd58ebabbd94c9c5cb8adf8671032854b18e34051a448e28"
                        target="blank"
                        style={{ color: "#FFFFFF" }}
                      >
                        <b>Bootcamp SoyHenry</b>
                      </a>
                    </Typography>
                    <Typography variant="body1" align="center">
                      2023
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      gutterBottom
                      marginBottom={[10]}
                    >
                      <b> +800 </b> horas de cursada
                    </Typography>
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ color: "#92E3A9" }}
                    >
                      Ingeniería multimedia
                    </Typography>
                    <Typography variant="body1" align="center">
                      <b> UNAD (Universidad Nacional a Distancia)</b>
                      <a
                        href="https://www.unad.edu.co/"
                        target="blank"
                        style={{ color: "#FFFFFF" }}
                      ></a>
                    </Typography>
                    <Typography variant="body1" align="center">
                      2022 - En curso actualmente
                    </Typography>
                    {/* <Typography variant='body2' align='center' >
                                            <b>10 </b> semestres
                                        </Typography> */}
                  </Paper>
                )}
                {value === "2" && (
                  <Paper className={styles.paper}>
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ color: "#92E3A9" }}
                      marginTop={[10]}
                    >
                      Proyecto Final SoyHenry
                    </Typography>
                    <Typography variant="body1" align="center">
                      <b>E-commerce 'Las Encinas Boutique'</b>
                    </Typography>
                    <Typography variant="body1" align="center">
                      Oct. 2023 - Nov. 2023
                    </Typography>
                    {/* <Typography variant='body2' align='center' gutterBottom >
                                            <b> +800 </b> horas de cursada
                                        </Typography> */}
                  </Paper>
                )}
              </div>
            </CardContent>
            <CardActions>
              <Button
                className={styles.skills}
                onClick={() => navigate("/skills")}
              >
                <PiFileCodeFill style={{fontSize:'23'}} />
                Habilidades
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
