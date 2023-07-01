import { Link } from "react-router-dom";
import styles from "./DentistCard.module.css";


function DentistCard(props) {
  return (
    <div className={styles.dentista}>
      <img
        className={styles.imagen}
        src="/images/doctor.jpg"
        alt={props.username}
      />

      <h3 className={styles.h3}>{props.objeto.name}</h3>
      {props.button && (
        <button
          className={styles.button}
          onClick={() => props.button.onClick(props.objeto)}
        >
          {props.button.info}
        </button>
      )}
      {props.link && (
        <Link className={styles.link} to={props.link.path}>
          {props.link.info}
        </Link>
      )}
    </div>
  );
}

export default DentistCard;
