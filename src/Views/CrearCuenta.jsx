import {useState, useEffect} from "react";
import { crearUsuario} from "../services/usuaruoService";
import Swal from "sweetalert2";
export default function CrearCuenta() {

    const [usuario, setUsiario] = useState({
        usuarioDni:"",
        usuarioNombre:"",
        usuarioApellido:"",
        usuarioCorreo:"",
        password:"",
        usuarioTipo:3,
    })

    let handleInput = (e) =>{
        setUsiario({
            ...usuario,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try {
            const rpta = await crearUsuario(usuario)    
            console.log(rpta)
            setUsiario({
                usuarioDni:"",
                usuarioNombre:"",
                usuarioApellido:"",
                usuarioCorreo:"",
                password:"",
                usuarioTipo:3,
              })
            await Swal.fire({
                icon: "success",
                title: "Usuario creado!!",
                showConfirmButton: false,
                timer: 2000,
              });
              window.location = '/Login';
              
              
        } catch (error) {
            
        }

    }

  return (
    <div className="container" style={{paddingTop:"150px",display:"flex",justifyContent:"center"}}>
      <form style={{width:"26rem"}} onSubmit={(e) => {handleSubmit(e); }}>

<div class="row mb-4">
  <div class="col">
    <div class="form-outline">
      <input type="text" id="form3Example1" class="form-control"
      name="usuarioNombre"
      value={usuario ? usuario.usuarioNombre :' '}
      onChange={(e) => {
      handleInput(e);}}/>
      <label class="form-label" for="form3Example1">Nombre</label>
    </div>
  </div>
  <div class="col">
    <div class="form-outline">
      <input type="text" id="form3Example2" class="form-control" 
      name="usuarioApellido"
      value={usuario ? usuario.usuarioApellido :' '}
      onChange={(e) => {
      handleInput(e);}}/>
      
      <label class="form-label" for="form3Example2">Apellido</label>
    </div>
  </div>
</div>
<div class="form-outline mb-4">
  <input type="text" id="form3Example3" class="form-control" 
  name="usuarioDni"
  value={usuario ? usuario.usuarioDni :' '}
      onChange={(e) => {
      handleInput(e);}}
  />
  <label class="form-label" for="form3Example3">DNI</label>
</div>

<div class="form-outline mb-4">
  <input type="email" id="form3Example3" class="form-control" 
  name="usuarioCorreo"
  value={usuario ? usuario.usuarioCorreo :' '}
      onChange={(e) => {
      handleInput(e);}}
  />
  <label class="form-label" for="form3Example3">Email</label>
</div>


<div class="form-outline mb-4">
  <input type="password" id="form3Example4" class="form-control" 
  name="password"
  value={usuario ? usuario.password :' '}
  onChange={(e) => {
  handleInput(e);}}
  />
  <label class="form-label" for="form3Example4">Contraseña</label>
</div>



<button type="submit" class="btn btn-primary btn-block mb-4"
    onClick={(e)=>{handleSubmit(e)}}
>Crear Cuenta</button>

<div class="text-center">
  <p>o iniciar sesion con:</p>
  <button type="button" class="btn btn-primary btn-floating mx-1">
    <i class="fab fa-facebook-f"></i>
  </button>

  <button type="button" class="btn btn-primary btn-floating mx-1">
    <i class="fab fa-google"></i>
  </button>

  <button type="button" class="btn btn-primary btn-floating mx-1">
    <i class="fab fa-twitter"></i>
  </button>

  <button type="button" class="btn btn-primary btn-floating mx-1">
    <i class="fab fa-github"></i>
  </button>
</div>
</form>
    </div>
  );
}
