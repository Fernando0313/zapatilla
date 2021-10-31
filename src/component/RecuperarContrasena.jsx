import React from 'react'

export default function RecuperarContrasena({setRecuperarPassw}) {

    const styles= {
        div: {
            fontSize:'12px',
            color:'#a2a2a2',
            textAlign: 'left'
        },
        textLeft:{
            textAlign: 'left',
            color: '#818181'
        },
        fontStyle:{
            color: 'rgb(129, 129, 129)',
            fontSize:'14px',
            textAlign: 'left'
        },
        button:{
            backgroundColor: 'rgb(255, 255, 255)',
            border: '1px solid rgb(0, 0, 0)',
            color: 'rgb(0, 0, 0)',
            minHeight: '40px'
        },
        input:{
            minHeight: '30px'
        }


    }

    return (
        <div className="container d-flex flex-column pt-150 w-700">
            <form>
            <div className="d-flex flex-column">
                <div style={styles.textLeft}>OLVIDO SU CONTRASEÑA?</div>
                <div style={styles.div} >‎Por favor, introduzca su dirección de correo electrónico a continuación. Recibirá un enlace para restablecer su contraseña.‎</div>
                <hr/>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="mb-3" style={styles.fontStyle}>Email</label>
                <input style={styles.input} className="mb-3"/>
            </div>
            <div className="mb-3 d-flex">
                <button className=" w-100" style={styles.button}>ENVIAR</button>
            </div>
            <div className="d-flex">
                <button className=" w-100" style={styles.button} onClick={()=>setRecuperarPassw(true) }>Regresar al Login</button>
            </div>
            </form>
        </div>
    )
}
