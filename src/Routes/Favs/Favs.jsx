import { useEffect, useState } from "react";
import DentistCard from "../../Components/DentistCard";
import styles from "./Favs.module.css";

function Favs() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    traerFavs();
  }, []);

  function traerFavs() {
    const localData = localStorage.getItem("favoritos");
    const data = localData ? JSON.parse(localData) : [];
    setFavoritos(data)
  }

  function eliminarFavorito(dentista) {
    const filtrados = favoritos.filter((favorito)=> favorito.id != dentista.id) 
    setFavoritos(filtrados)
    localStorage.setItem("favoritos", JSON.stringify(filtrados))
  }

  return (
    <div className={styles.contenedor}>
      {favoritos.length > 0? (
        <>
          <h1>Favorite Dentists</h1>
          <div className={styles.dentistas}>
            {favoritos.map((dentista) => {
              return (
                <DentistCard
                  key={dentista.id}
                  objeto={dentista}
                  button={{onClick:()=>{eliminarFavorito(dentista)}, info:"Delete"}}
                  link={{ path: `/dentist/${dentista.id}`, info: "Info" }}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h1> Favorite Dentists </h1>
      )}
    </div>
  );
}

export default Favs;
