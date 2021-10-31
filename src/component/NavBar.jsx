import { useState,useEffect,useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import Lista from "./Lista";
import { useLocation } from 'react-router-dom'
import {motion} from "framer-motion"
import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar({ estadoNav, setEstadoNav }) {
  const { carrito } = useContext(CarritoContext);
	// const { userState, signOut } = useContext(AuthContext);

	const totalCarrito = carrito.reduce((total, item) => {
		return total + item.cantidad;
	}, 0);
  const [buscar, setBuscar] = useState(false);
  const [lista,setLista]=useState(false)
  const listas=()=>{
    if(lista===false){
      setLista(true)
    }else{
      setLista(false)
    }
  }
  const[backColor,setBackcolor]=useState('transparent')
  const styles={
    nav:
    {
      backgroundColor: backColor
    }
  }
  let location = useLocation();
    
    useEffect(()=>{
      if(location.pathname==='/'){
        setBackcolor('transparent')
        
      }else{
        setBackcolor('black')
      }
  },[listas])
  return (
    
    <nav className="navbar" style={styles.nav}
    >
      
      <div className="d-flex justify-content-around mt-3">
        <div>
          <span className="busqueda">
            <i className="fas fa-search" style={{ color: "rgb(255,255,255)" }}></i>
            <input
              type="text"
              placeholder="Search"
              onClick={() => setEstadoNav(true)}
            />{" "}
          </span>
        </div>

        <motion.div
          initial={{y:-250}}
          animate={{y:-10}}
          transition={{delay:.2,type:'spring', stiffness:500}}  
        >
          <Link className="link-scaters" to="/">
        
          <a className="link-scaters">FLIGHT CLUB</a>
          </Link>
        </motion.div>
        <Link className="nav-link" to="/carrito">
							Carrito
							<Badge badgeContent={totalCarrito} color="primary">
								{/* <ShoppingCartIcon /> */}
							</Badge>
						</Link>
        <div className=" grupo-ul">
          <ul>
           
            <li className="li-principal"><a onClick={()=>listas() }>Account</a>
            {
              lista?
              <Lista listas={listas}/> : ' '
            }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
