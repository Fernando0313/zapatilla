import {useState,useEffect,useContext} from 'react'
import { obtenerProductoPorId } from '../services/productoService'
import { useParams } from 'react-router'
import { CarritoContext } from '../context/carritoContext'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'
export default function DetalleProducto() {
    const [producto, setProducto] = useState({})

    const {id} = useParams()

    const history = useHistory()

    const {anadirACarrito} = useContext(CarritoContext)
    const getProducto = async () =>{
        try {
            let productoObtenido = await obtenerProductoPorId(id)
            console.log(id)
            setProducto(productoObtenido)
        } catch (error) {
            throw error
        }
    }
    const anadirACarritoContext = async() => {
        anadirACarrito(producto)
        const resultado = await Swal.fire({
            icon:'success',
            title:"Producto añadido!",
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:'Seguir comprando',
            denyButtonText:'Ir a carrito'
        })
        if(resultado.isConfirmed){
            history.push('/')
        }else if(resultado.isDenied){
            history.push('/carrito')
        }
    }

    useEffect(() => {
        getProducto()
    }, [])

    return (
        <div style={{paddingTop:"150px"}}>
           <div>
               <div className="container">
                   <h2 className="fw-bold">{producto.prod_nombre}</h2>
                   <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img 
                                className="img-fluid"
                                src={producto.productoFoto}
                                alt={producto.productoNombre}
                            />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h5 className="fw-bold">Descripción</h5>
                            <p>{producto.productoNombre}</p>
                            <div className="py-3 d-flex justify-content-between">
                                <span className="fw-bold">
                                    S/ {producto.productoPrecio}
                                </span>

                                { <button 
                                    className="btn btn-dark btn-lg"
                                    onClick={anadirACarritoContext}
                                >
                                    <i className="fas fa-shopping-cart me-2"/>
                                    Añadir a Carrito
                                </button> }
                            </div>
                        </div>
                    </div>
                </div>
           </div> 
        </div>
    )
}
