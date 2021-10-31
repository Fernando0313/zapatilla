import { useState } from "react";

export default function Busqueda({ buscar }) {
  const [validar, setValidar] = useState(false);
    console.log(buscar)
  return (
      <>
      {
          buscar &&
          (
        <div className="d-flex">
      <div>Populares</div>
      <div>Categorias</div>
        </div>)
      }
      </>
    
  );
}
