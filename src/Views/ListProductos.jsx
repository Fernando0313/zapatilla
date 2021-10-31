import {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { obtenerProductos } from '../services/productoService';


export default function ListProductos() {


const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1)
  const getProductos = async (pagina,numero) => {
    try {
      const productosObtenidos = await obtenerProductos(pagina,numero);
      console.log(productosObtenidos);
      setProductos(productosObtenidos);
    } catch (error) {
      console.error(error);
    }
  };

  const Siguiente=()=>{
    setPagina(pagina+1)
    getProductos(pagina,4);
}
const Anterior=()=>{
    if(pagina===1){
      getProductos(pagina)
      
    }
    else{
      setPagina(pagina-1)
      getProductos(pagina,4);
      
    }
}

  useEffect(() => {
    getProductos(pagina,4);
    
  },[]);
    return (
        
        <div class="" style={{paddingTop:"150px",display:"flex",alignItems:"center",flexDirection:"column"}}  >
<Link to="/CrearProducto">
    <button type="button" class="btn btn-primary"><i class="fas fa-plus-square"></i></button>
</Link>
            <Table striped bordered hover style={{maxWidth:"1100px"}}>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Foto</th>
      <th>Precio</th>
      <th>Talla</th>
      <th>Acción</th>
    </tr>
  </thead>
  <tbody>
  {productos &&
          productos.map(
            (
              { productoNombre, productoFoto, productoPrecio, productoTalla },
              i
            ) => (
              <tr>
                <td>{productoNombre}</td>
                <td> <img
                width="70"
                height="100"
                    src={productoFoto}
                    className="card-img-top"
                    alt={productoNombre}
                  /></td> 
                <td>{productoPrecio}</td>
                <td>{
                    productoTalla.map((item)=>item+",")
                    

                    
                    
                    }
                
                </td>
                <td><Link to="/ActualizarProducto">
                    <button type="button" class="btn btn-success" style={{width:"70px"}}><i class="fas fa-pen-square"></i></button>
                    </Link>
                    <Link to="/EliminarProducto">
                    <button type="button" class="btn btn-danger" style={{width:"70px"}}><i class="fas fa-trash-alt"></i></button>
                    </Link>
                </td>
              </tr>
            )
          )}
   

  </tbody>
</Table>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary" onClick={ Anterior } >Anterior</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary" onClick={{Siguiente }}>Siguiente</button>
</div>

        </div>
        
    )
}
