import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
export default function Lista({listas}) {
  const styles = {
    nav: {
      display: "flex",
      height: "76px",
    },
    div: {
      marginRight: "9px",
    },
    ul: {
      textDecoration: "none",
      listStyle: "none",
      textAlign: "right",
      marginRight: "2px",  
        
    },
    li: {
      display: "inline",
      
    },
  };
  return (
    <motion.ul className="" style={styles.ul} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3,duration:.3}} >
      <li>
        <a>Mi cuenta</a>
      </li>
      <li>
        <a>Mis ordenes</a>
      </li>
      <li>
        <Link to="/Login" onClick={()=>listas()}>Iniciar sesion</Link>
      </li>
    </motion.ul>
  );
}
