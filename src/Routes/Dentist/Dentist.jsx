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
            <p>Name: {dentista.name}</p>
            <p>Email: {dentista.email}</p>
            <p>Phone: {dentista.phone}</p>
            <p>Web: {dentista.website}</p>
            <button className={styles.button} onClick={()=>{navigate(-1)}}>Return</button>
          </div>
        </>
    
    </div>
  );
}

export default Dentist;
