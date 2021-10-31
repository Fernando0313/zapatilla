import {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { actualizarMarca, obtenerMarcaPorId } from '../services/marcaService'
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
export default function ActualizarMarca() {

    const [marca, setMarca] = useState({})

    const {id} = useParams()
    console.log(id)
    const getMarca = async () =>{
        try {
            let marcaObtenida = await obtenerMarcaPorId(id)
            console.log(marcaObtenida)
            setMarca(marcaObtenida)
            
        } catch (error) {
            throw error
        }
    }
    let handleInput = (e) =>{
        setMarca({
            ...marca,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
            const rpta = await actualizarMarca(marca,id)
            console.log(rpta)
            setMarca({
                marcaNombre:"",
        marcaDescripcion:"",
            })
            await Swal.fire({
                icon: "success",
                title: "Marca actualizada!!",
                showConfirmButton: false,
                timer: 2000,
              });
              window.location = '/ListMarcas';

        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getMarca()
    }, [])


    return (
        <div
      style={{ paddingTop: "150px", display: "flex", justifyContent: "center" }}
    >
      <Form style={{ width: "26rem" }} onSubmit={(e) =>{handleSubmit(e)}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Marca" 
          name="marcaNombre"
          value={marca ? marca.marcaNombre: ' '}
          onChange={(e)=>{
              handleInput(e)
          }}/>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" placeholder="Descripcion" 
          name="marcaDescripcion"
          value={marca ? marca.marcaDescripcion: ' '}
          onChange={(e)=>{
              handleInput(e)
          }}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e)=>{handleSubmit(e)}}>
          Actualizar
        </Button>
      </Form>
    </div>
    )
}
