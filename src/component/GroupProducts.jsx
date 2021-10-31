import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { obtenerProductos } from "../services/productoService";
export default function GroupProducts() {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1)
  const getProductos = async (pagina) => {
    try {
      const productosObtenidos = await obtenerProductos(pagina);
      console.log(productosObtenidos);
      setProductos(productosObtenidos);
    } catch (error) {
      console.error(error);
    }
  };

  const Siguiente=()=>{
      setPagina(pagina+1)
      getProductos(pagina);
      
  }
  const Anterior=()=>{
      if(pagina===1){
        getProductos(pagina)
        getProductos(pagina);
      }
      else{
        setPagina(pagina-1)
        getProductos(pagina);
        
      }
  }

  useEffect(() => {
    getProductos(pagina);
    
  },[]);

  return (
    <div className="container">
      <div className="row mt-3">
        {productos &&
          productos.map(
            (
              { productoNombre, productoFoto, productoPrecio, productoId },
              i
            ) => (
              <div className="col-6 col-lg-3" key={i}>
                <Link className="card mb-4" to={`/detalle/${productoId}`}>

                  
                    {productoFoto ? <img width="261" height="261"
                    src={productoFoto}
                    className="card-img-top"
                    alt={productoNombre}
                  />: <img width="261" height="261"
                  src="https://res.cloudinary.com/cloudfernando/image/upload/v1635635385/img234_vwgfmi.jpg"
                  className="card-img-top"
                  alt={productoNombre}
                /> }
                    

                  <div className="card-body">
                    <h6 className="card-title">{productoNombre}</h6>
                    <span className="fw-bold">s/ {productoPrecio}</span>
                  </div>
                </Link>
              </div>
            )
          )}
      </div>
      <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" onClick={ Anterior } >Anterior</button>
  <button type="button" class="btn btn-primary">-    -</button>
  <button type="button" class="btn btn-primary" onClick={Siguiente }>Siguiente</button>
</div>
    </div>
  );
}
