import { useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import { TbMessage } from "react-icons/tb";
import styles from "./floatButt.module.css";

const FloatButton = () => {
  const navigate = useNavigate();

  return (
    <Fab
      color="cuaretiary"
      aria-label="add"
      style={{
        position: "fixed",
        bottom: 35,
        right: 35,
        height: 70,
        width: 70,
        transition: "background-color 0.3s, transform 0.3s",
      }}
      className={styles.floatButton}
      onClick={()=> navigate('/contact')}
    >
      <TbMessage class="contactIcon" className={styles.contactIcon} />
    </Fab>
  );
};

export default FloatButton;
