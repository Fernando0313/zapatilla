import {useState} from 'react'
import Clogin from '../component/Clogin'
import RecuperarContrasena from '../component/RecuperarContrasena';


export default function Login() {
    const [recuperarPass, setRecuperarPassw] = useState(false);
    return (
        
          <div >
              {
                  !recuperarPass ?(
                    <Clogin setRecuperarPassw={setRecuperarPassw}/>
                  ):(
                    <RecuperarContrasena setRecuperarPassw={setRecuperarPassw}/>
                  )
              }
        
        
        </div>
    )
}
