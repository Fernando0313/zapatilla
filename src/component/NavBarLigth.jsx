import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
// import Busqueda from "./Busqueda";
import { motion } from "framer-motion"
import Lista from "./Lista";

export default function NavBarLigth({ estadoNav, setEstadoNav }) {
  const [buscar, setBuscar] = useState(false);
  const [lista,setLista]=useState(false)
  const listas=()=>{
    if(lista===false){
      setLista(true)
    }else{
      setLista(false)
    }
  }
  return (
    <motion.nav className="navbar" style={{backgroundColor:'black !important'}}
    animate={{ x: 100, y: 100, opacity: 1 }}
    transition={{
      delay: 1,
      x: { type: "spring", stiffness: 100 },
      default: { duration: 2 },
    }}
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

        <div className=" grupo-ul">
          <ul>
            <Link to="/">
            <li className="li-principal">Sneakers</li>
            </Link>
            <Link to="/">
            <li className="li-principal">Store</li>
            </Link>
            <li className="li-principal"><a onClick={()=>listas() }>Account</a>
            {
              lista?
              <Lista listas={listas}/> : ' '
            }
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

