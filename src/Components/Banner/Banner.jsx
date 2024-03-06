import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";

import styles from "./Banner.module.css";
import { MdAccountCircle } from "react-icons/md";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import coding from "../../assets/img/Code typing-bro.svg";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Grid container direction="row" className={styles.gridContainer}>
        <Grid item xs={12} md={6} lg={6} className={styles.text}>
          <Typography variant="h2" align="center" gutterBottom>
            Bienvenido a mi portfolio
            <WavingHandIcon style={{ color: "#92E3A9", fontSize: 40, marginLeft: 2}} className={styles.WavingHandIcon} />
          </Typography>
          <Typography variant="h4" align="center">
            {" "}
            Soy
            <span style={{ color: "#92E3A9" }}> Mateo León</span>
          </Typography>
          <Typography variant="body1" align="center" className={styles.Typography}>
            Desarrollador
            <span style={{ color: "#92E3A9" }}> Fullstack / Frontend</span> &
          </Typography>
          <Typography variant="body1" align="center" gutterBottom className={styles.Typography}>
            Estudiante de
            <span style={{ color: "#92E3A9" }}> Ingeniería Multimedia</span>
          </Typography>
          <Typography variant="body1" align="center">
            <Button
              variant="contained"
              onClick={() => navigate("/about")}
              className={styles.buttonAbout}
              style={{
                background: "#000000",
                color: "#D8D4CF",
                border: "none",
                padding: "12px 22px",
                position: "relative",
                borderRadius: "12px",
              }}
            >
              <MdAccountCircle fontSize="large" />
              Sobre mí
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className={styles.imageContainer}>
            <img src={coding} alt="HeaderImage" className={styles.image} />
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Banner;
