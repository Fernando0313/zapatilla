import {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { obtenerMarcas } from '../services/marcaService';


export default function ListMarcas() {


const [marcas, setMarcas] = useState([]);
  const [pagina, setPagina] = useState(1)
  const getMarcas = async (pagina,numero) => {
    try {
      const marcasObtenidos = await obtenerMarcas(pagina,numero);
      console.log(marcasObtenidos);
      setMarcas(marcasObtenidos);
    } catch (error) {
      console.error(error);
    }
  };

  const Siguiente=()=>{
    setPagina(pagina+1)
    getMarcas(pagina,4);
}
const Anterior=()=>{
    if(pagina===1){
      getMarcas(pagina)
    }
    else{
      setPagina(pagina-1)
      getMarcas(pagina,4);
    }
}

  useEffect(() => {
    getMarcas(pagina,4);
   
  },[]);
    return (
        
        <div class="" style={{paddingTop:"150px",display:"flex",alignItems:"center",flexDirection:"column"}}  >
<Link to="/CrearMarca">
    <button type="button" class="btn btn-primary"><i class="fas fa-plus-square"></i></button>
</Link>
            <Table striped bordered hover style={{maxWidth:"1100px"}}>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Descripcion</th>
      <th>Acción</th>
    </tr>
  </thead>
  <tbody>
  {marcas &&
          marcas.map(
            (
              {marcaId, marcaNombre, marcaDescripcion },
              i
            ) => (
              <tr>
                <td>{marcaNombre}</td>
                
               <td>{marcaDescripcion}</td>
               
                <td><Link to={`/ActualizarMarca/${marcaId}`}>
                    <button type="button" class="btn btn-success" style={{width:"70px"}}><i class="fas fa-pen-square"></i></button>
                    </Link>
                    
                    <Link to={`/ElimarMarca/${marcaId}`}>
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
  <button type="button" class="btn btn-primary" onClick={Siguiente }>Siguiente</button>
</div>

        </div>
        
    )
}
