import axios from "axios";

const URL = `${process.env.REACT_APP_API}manejoEc`




const generarCompra = async (compra) =>{
    
    try {
        const headers ={
            "Content-Type": "application/json"
        }

        let {data} = await axios.post(`${URL}/generar-compra`,compra,{headers})
        return data
    } catch (error) {
        throw error
    }
}

export{
    generarCompra,
}