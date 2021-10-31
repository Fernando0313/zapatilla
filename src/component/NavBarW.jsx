import React from "react";
import Busqueda from "./Busqueda";
import "../css/NavBarW.css";
import { useState } from "react";
import NavBar from "./NavBar";
import {motion} from "framer-motion"
export default function NavBarW({ estadoNav, setEstadoNav }) {

  const [estadoOpen, setEstadoOpen] = useState("0");
  const [isOpen, setIsOpen] = useState(true)

  const navMotion ={
    hidden: {
      y:"-100vw"
    },
    hidden2: {
      y:"0",
      x:"0"
    },
    show:{
      x:"0",
      y:"0",
      transition:{
        duration:1,
        ease: "easeInOut"
      }
    },
    closed:{
      y:"-200vw",
      x:"-100",
      transition:{
        duration:1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.nav variants={navMotion} initial={isOpen ? "hidden" :"hidden2"} animate={isOpen ? "show" : "closed"} className="navbar  fixed-top" style={{ backgroundColor: "white" }} >
      <div
        className="d-flex justify-content-around align-items-center color-w"
        style={{
          borderBottom: "2px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <div>
          <span className="busqueda">
            <i className="fas fa-search" style={{ color: "black" }}></i>
            <input
              type="text"
              placeholder="Search"
              style={{ color: "black" }}
            />{" "}
          </span>
        </div>
        <div className=" grupo-ul-w">
          <button
            type="button"
            className="btn-nav btn-disable "
            disabled
            style={{
              marginRight: "-448px",
            }}
          >
            Clear
          </button>

          <button
            type="button"
            className="btn-nav float-end"
            style={{ color: "black", borderLeft: "2px solid #0000001f" }}
            onClick={()=>{setEstadoNav(false)
              setIsOpen(isOpen => !isOpen) }}
          >
            Close
          </button>
        </div>
      </div>
      <div className="d-flex contenido">
        <div>Populares</div>
        <div style={{ borderLeft: "2px solid #0000001f" }}>Categorias</div>
      </div>
    </motion.nav>
  );
}
