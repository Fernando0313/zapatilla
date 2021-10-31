import {useState,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { crearMarca } from "../services/marcaService";
import Swal from "sweetalert2";
export default function CrearMarca() {

    const [marca, setMarca] = useState({
        marcaNombre:"",
        marcaDescripcion:"",
        
    })

    let handleInput = (e) =>{
        setMarca({
            ...marca,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
            const rpta = await crearMarca(marca)
            console.log(rpta)
            setMarca({
                marcaNombre:"",
        marcaDescripcion:"",
            })
            await Swal.fire({
                icon: "success",
                title: "Marca creada!!",
                showConfirmButton: false,
                timer: 2000,
              });
              window.location = '/ListMarcas';

        } catch (error) {
            throw error
        }
    }

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
          Crear
        </Button>
      </Form>
    </div>
  );
}
