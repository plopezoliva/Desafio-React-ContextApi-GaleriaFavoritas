import { useContext } from "react";
import MyContext from "../context/My_context";

export default function Favoritos() {
  const {dataPhoto, favorito}= useContext(MyContext);

  let favoritosimg = dataPhoto.filter((imagen) => favorito.includes(imagen.id));

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {favoritosimg.map((imagen) => (
    <div key={imagen.id}>
      <img  src={imagen.src.tiny} alt=''></img>
      <p>{imagen.photographer}</p>
    </div>
      )
        )};
      
      </div>
    </div>
  );
}
