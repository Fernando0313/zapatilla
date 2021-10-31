import {useState} from "react";
import { loginUsuario } from "../services/usuaruoService";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'
import  Cloginss from '../css/Cloginss.css'

export default function Clogin({ setRecuperarPassw}) {
 const [login, setLogin] = useState({
  usuarioCorreo:"",
  password:""
 })

 let handleInput = (e) =>{
   setLogin({
     ...login,
     [e.target.name]: e.target.value,
   })
 }

 const handleSubmit = async (e) =>{
   e.preventDefault()

   try {
     const rpta = await loginUsuario(login)
     console.log(rpta)
     setLogin({
      usuarioCorreo:"",
      password:""
     })
     await Swal.fire({
      icon: "success",
      title: "inicio sesion",
      showConfirmButton: false,
      timer: 3000,
    });
    window.location = '/';
   } catch (error) {
     
   }
 }
  return (
      
    <div className="container d-flex flex-column pt-150 w-700">
      <form onSubmit={(e) =>{handleSubmit(e)}}>
      <div className="">
        <span className="ml-430 font-style">Login</span>
        <hr/>
      </div>
      <div className="d-flex flex-column">
        <label className=" ml-430 font-style">Email</label>
        <input className="mb-3 input-border"
        name="usuarioCorreo"
        type="text"
        value={login ? login.usuarioCorreo: ''}
        onChange={(e) =>{
          handleInput(e)
        }}/>
      </div>
      <div className="d-flex flex-column">
      <label className=" float-start ml-390 font-style">Contraseña</label>
        <input className="mb-3 input-border"
         type="password"
         name="password"
      
         value={login ? login.password: ''}
           onChange={(e) =>{
             handleInput(e)
           }}/>
      </div>
      <div className="mb-3">
        <a className="recuperar-contra float-start" onClick={()=>setRecuperarPassw(true) } >Olvido su Contraseña?</a>
      </div>
      <div>
        <Link to="/">
        <button className="mb-3 btn-style" type="submit"
        onClick={(e)=>{handleSubmit(e)}}>Login</button>
        </Link>
        <div className="d-flex align-items-center mb-3">
          <div className="flex-grow-1 bg-color"></div>
          <div className="color-white ">NUEVO EN EL CLUB?</div>
          <div className="flex-grow-1 bg-color"></div>
        </div>
        <div>
          <Link to="/CrearCuenta">
          <button className="btn-style">Crear cuenta</button>
          </Link>
        </div>
      </div>
      </form>
    </div>
    
   
  );
}
