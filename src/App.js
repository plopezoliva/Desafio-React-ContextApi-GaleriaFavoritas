import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./view/Home";
import Favoritos from "./view/Favoritos";
import MyContext from "./context/My_context";
import { useEffect, useState } from "react";


export default function App() {

  const [dataPhoto, setdataPhoto]= useState([]);
  const [favorito, setFavorito] = useState([]);
  const globalImagenes= {dataPhoto, setdataPhoto, favorito, setFavorito};

  const endpoint = "/fotos.json";

  useEffect(() => {
    buscarFotos();
  }, []);

const buscarFotos= async () =>{
  const response= await fetch(endpoint);
  const data = await response.json();
  console.log(data)
  setdataPhoto(data.photos)
}

  return (
    <div className="App">
      <MyContext.Provider value={globalImagenes}>
      <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
