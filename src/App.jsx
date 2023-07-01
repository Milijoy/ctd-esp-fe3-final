import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Dentists from "./Routes/Dentist/Dentist";
import Contact from "./Routes/Contact/Contact"
import Favs from "./Routes/Favs/Favs";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ThemeContextProvider from "./Context/ThemeContextProvider";
import OdontologosContextProvider from "./Context/OdontologosContextProvider";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <OdontologosContextProvider>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Dentists />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </OdontologosContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
