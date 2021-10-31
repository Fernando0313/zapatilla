import axios from "axios";

const URL = `${process.env.REACT_APP_API}manejoEc`

const obtenerProductos = async (pagina=1,cantidad=12) =>{
    try {
        const response = await axios.get(`${URL}/productos?pagina=${pagina}&cantidad=${cantidad}`)
        const data = await response.data.data.content
        
        return data
    } catch (error) {
        throw (error)
    }
}

const crearProducto = async (objProducto) =>{
    try {
        const headers ={
            "Content-Type": "application/json"
            // 'Content-Type': 'multipart/form-data'
            
        }
        let {data} = await axios.post(`${URL}/productos`,objProducto,{headers})

        return data

    } catch (error) {
        throw error
    }   
}

const obtenerProductoPorId = async (id) =>{
    try {
        let { data } = await axios.get(`${URL}/producto/${id}`)
        console.log(data)
        return data.content //ya tenemos los datos
    } catch (error) {
        throw error
    } 
}

export{
    obtenerProductos,
    crearProducto,
    obtenerProductoPorId,
}