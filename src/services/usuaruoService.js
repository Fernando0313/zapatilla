import axios from "axios";

const URL = `${process.env.REACT_APP_API}manejoEc/registro`
const URLOGIN = `${process.env.REACT_APP_API}manejoEc/login`

const crearUsuario = async (nuevoUsuario) =>{
    try {
        const headers = {
            "Content-Type": "application/json"
        }

        let {data} = await axios.post(URL,nuevoUsuario,{headers})

        return data
    } catch (error) {
        throw error
    }
}

const loginUsuario = async (loginUsuario) =>{
    try {
        const headers = {
            "Content-Type": "application/json"
        }
        let {data} = await axios.post(URLOGIN,loginUsuario,{headers})

        return data
    } catch (error) {
        throw error
    }
}

export{
    crearUsuario,
    loginUsuario,
    
}