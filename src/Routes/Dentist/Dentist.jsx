import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./Dentist.module.css";

function Dentist() {
  const { id } = useParams();

  const [dentista, setDentista] = useState("");
  const [loadig, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const dentista = await data.json();
    setDentista(dentista);
    setLoading(false);
  }

  const navigate = useNavigate();

  return (
    <div className={styles.contenedor}>

        <>
          <h1>Dentist Information</h1>
          <div className={styles.dentista}>
            <h3>Name: {dentista.name}</h3>
            <h3>Email: {dentista.email}</h3>
            <h3>Phone: {dentista.phone}</h3>
            <h3>Web: {dentista.website}</h3>
            <button className={styles.button} onClick={()=>{navigate(-1)}}>Return</button>
          </div>
        </>
    
    </div>
  );
}

export default Dentist;
