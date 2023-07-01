import { useContext, useEffect, useState } from "react";
import DentistCard from "../../Components/DentistCard";
import styles from "./Home.module.css";
import { OdontologosContext } from "../../Context/OdontologosContextProvider";

function Home() {
  const odontologos = useContext(OdontologosContext);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    traerFavs();
  }, []);

  function traerFavs() {
    const localData = localStorage.getItem("favoritos");
    const data = localData ? JSON.parse(localData) : [];
    setFavoritos(data);
  }

  function handleFav(objeto) {
    const localData = localStorage.getItem("favoritos");
    const data = localData ? JSON.parse(localData) : [];
    const actualizado = data.filter((data) => data.id != objeto.id);
    if (actualizado.length < favoritos.length) {
      setFavoritos(actualizado);
      localStorage.setItem("favoritos", JSON.stringify(actualizado));
    } else {
      setFavoritos([...actualizado, objeto]);
      localStorage.setItem(
        "favoritos",
        JSON.stringify([...actualizado, objeto])
      );
    }
  }

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.title}> Home </h1>
  
      <div className={styles.dentistas}>
        {odontologos.map((dentista) => {
          return (
            <DentistCard
              key={dentista.id}
              objeto={dentista}
              button={{
                onClick: handleFav,
                info: favoritos.find((d) => d.id == dentista.id)
                  ? "Remove fav"
                  : "Add fav",
              }}
              link={{ path: `/dentist/${dentista.id}`, info: "More Info" }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
