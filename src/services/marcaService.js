import axios from "axios";

const URL = `${process.env.REACT_APP_API}manejoEc`

const obtenerMarcas = async (pagina=1,cantidad=12) =>{
    try {
        const response = await axios.get(`${URL}/marcas?pagina=${pagina}&cantidad=${cantidad}`)
        const data = await response.data.data.content
        return data
    } catch (error) {
        throw (error)
    }
}


const crearMarca = async (objMarca) =>{
    try {
        const headers ={
            "Content-Type": "application/json"
        }
        let {data} = await axios.post(`${URL}/marcas`,objMarca,{headers})

        return data

    } catch (error) {
        throw error
    }   
}

const actualizarMarca = async (objMarca,id) =>{
    try {
        const headers ={
            "Content-Type": "application/json"
        }
        let {data} = await axios.put(`${URL}/marca/${id}`,objMarca,{headers})
        return data
    } catch (error) {
        throw error
    }
}

const obtenerMarcaPorId = async (id) =>{
    try {
        const headers ={
            "Content-Type": "application/json"
        }
        let {data} = await axios.get(`${URL}/marca/${id}`)
        console.log(data)
        return data.content
    } catch (error) {
        throw error
    }
}

const eliminarMarca = async (id) =>{
    try {
        const headers ={
            "Content-Type": "application/json"
            
        }
        let {data} = await axios.delete(`${URL}/marca/${id}`)
            return data.content
    } catch (error) {
        throw error
    }
}


export{
    obtenerMarcas,
    crearMarca,
    actualizarMarca,
    obtenerMarcaPorId,
    eliminarMarca,
}