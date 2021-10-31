import { Route } from 'react-router-dom'
import Menu from './Views/Menu'
import Login from './Views/Login'
import LocalesView from './Views/LocalesView'
import Productos from './Views/Productos'
import CrearCuenta from './Views/CrearCuenta'
import ListProductos from './Views/ListProductos'
import ActualizarProducto from './Views/ActualizarProducto'
import CrearProducto from './Views/CrearProducto'
import EliminarProducto from './Views/EliminarProducto'
import DetalleProducto from './Views/DetalleProducto'
import CarritoView from './Views/CarritoView'
import ListMarcas from './Views/ListMarcas'
import CrearMarca from './Views/CrearMarca'
import ActualizarMarca from './Views/ActualizarMarca'
import EliminarMarca from './Views/EliminarMarca'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={Menu}/>
            <Route path="/Login" exact component={Login}/>
            <Route path="/Locales" exact component={LocalesView}/>
            <Route path="/Productos" exact component={Productos}/>
            <Route path="/CrearCuenta" exact component={CrearCuenta}/>
            <Route path="/ListProductos" exact component={ListProductos}/>
            <Route path="/CrearProducto" exact component={CrearProducto}/>
            <Route path="/ActualizarProducto" exact component={ActualizarProducto}/>
            <Route path="/EliminarProducto" exact component={EliminarProducto}/>
            <Route path="/Detalle/:id" exact component={DetalleProducto}/>
            <Route path="/carrito" exact component={CarritoView}/>
            <Route path="/ListMarcas" exact component={ListMarcas}/>
            <Route path="/CrearMarca" exact component={CrearMarca}/>
            <Route path="/ActualizarMarca/:id" exact component={ActualizarMarca}/>
            <Route path="/ElimarMarca/:id" exact component={EliminarMarca}/>

        </div>
    )
}
