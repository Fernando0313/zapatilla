import { useContext,useState } from "react"
import { CarritoContext } from "../context/carritoContext"
import { generarCompra } from "../services/comprarService"
import Swal from "sweetalert2"
export default function CarritoView() {

    

    const { carrito } = useContext(CarritoContext)
    const [compraT, setCompraT] = useState({
        "cliente_id":15,
        "detalle":[
            
        
            
        ]
    })
    
    
    console.log(carrito)
    console.log(compraT)
    const handleSubmit = async (e) =>{
        
        carrito.map((prod,i)=>{
            compraT.detalle.push({"producto_id":prod.productoId,
            "cantidad":prod.cantidad})
            
        })

        e.preventDefault()
        console.log(compraT)
        try {
            const rpta = await generarCompra(compraT)
            await Swal.fire({
                icon: "success",
                title: "Compra realizada!!",
                showConfirmButton: false,
                timer: 2000,
              });
            window.location = '/';
            console.log(rpta)
        } catch (error) {
            
        }
    }
    return (
        <div className="container" style={{paddingTop:"150px"}}>
            <div className="my-4 text-center">
                <h1 className="fw-bold">
                    <i className="fas fa-shopping-cart me-3"/>
                    Carrito de Compras
                </h1>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        {/* <th>Descuento</th> */}
                        <th>Precio Unitario</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((prod, i) => (
                        <tr key={i}>
                            <td>{prod.productoNombre}</td>
                            <td>{prod.cantidad}</td>
                            {/* <td>{prod.productooferta ? "10%" : "Sin Oferta"}</td> */}
                            <td>S/ {prod.productoPrecio}</td>
                            <td>S/ {prod.prod_oferta ? 
                            prod.cantidad * prod.productoPrecio * 0.9 : 
                            prod.cantidad * prod.productoPrecio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" class="btn btn-success" onClick={(e)=>handleSubmit(e)}>Comprar</button>
        </div>
    )
}
