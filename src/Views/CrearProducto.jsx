import {useState,useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { crearProducto } from "../services/productoService";
import Swal from "sweetalert2";
export default function CrearProducto() {

    const [producto, setProducto] = useState({
        productoNombre:"",
        productoPrecio:0,
        productoFoto:"",
        productoCantidad:0,
        productoTalla:0,
        marca:3
    })

    let handleInput = (e) =>{
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        try {
            const rpta = await crearProducto(producto)
            console.log(rpta)
            setProducto({
                productoNombre:"",
        productoPrecio:"",
        productoFoto:"",
        productoCantidad:0,
        productoTalla:0,
        marca:2
            })
            await Swal.fire({
                icon: "success",
                title: "Producto creado!!",
                showConfirmButton: false,
                timer: 2000,
              });
              window.location = '/ListProductos';

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
          <Form.Control type="text" placeholder="Producto" 
          name="productoNombre"
          value={producto ? producto.productoNombre: ' '}
          onChange={(e)=>{
              handleInput(e)
          }}/>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Foto</Form.Label>
          <Form.Control type="file"/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number"  step="0.01" placeholder="Precio"
          name="productoPrecio"
          value={producto ? producto.productoPrecio: ' '}
          onChange={(e)=>{
              handleInput(e)
          }} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control type="number" placeholder="Cantidad" 
          name="productoCantidad"
          value={producto ? producto.productoCantidad: ' '}
          onChange={(e)=>{
              handleInput(e)
          }}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Producto Talla</Form.Label>
          <Form.Control type="text" placeholder="Talla" 
          name="productoTalla"
          value={producto ? producto.productoTalla: ' '}
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
