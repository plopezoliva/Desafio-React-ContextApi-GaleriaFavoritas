import { useContext, useState} from "react";
import "../assets/css/galeria.css";
import MyContext from "../context/My_context";
import Heart from "./Heart";

export default function Home() {
const {dataPhoto,favorito, setFavorito }= useContext(MyContext);

const [isFavorite, setIsFavorite] = useState(false);


const agregarFavorito = (id) => {
  if (!favorito.includes(id)) {
    setFavorito(favorito.concat(id));
    setIsFavorite((current) => !current);
    console.log(id);
  } else {
    removeFavorite(id);
  }
};
const removeFavorite = (id) => {
  let index = favorito.indexOf(id);
  console.log(index);
  let temp = [...favorito.slice(0, index), ...favorito.slice(index + 1)];
  setFavorito(temp);
};


  return (
    
    <div className="galeria grid-columns-5 p-3">
      {/* se guardan datos con dataPhoto */}
      {dataPhoto.map((imagen) => (
    <div key={imagen.id}>
      <img onClick={() => agregarFavorito(imagen.id)}  src={imagen.src.tiny} alt='' >
        {/* {imagen.favoritoImg ? <Heart filled={true} /> : <Heart/>}*/}
        </img> 
      <p>{imagen.photographer}</p>
    </div>
      )
        )};
      
    </div>
    
  );
}
