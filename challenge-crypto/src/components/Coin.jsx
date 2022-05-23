import React from 'react'
import s from './coin.module.css'

function Coin({data}) {

    let number = data[data.length - 1]?.p*200
    number = number.toString()
    const [primero, segundo] = number.split(".")
/*     let aux = []
    while(primero.length > 3){
        aux.push(primero.substring(primero.length -3))
        console.log(aux)
    } */
    return (
        <div className={s.container} >
            <p>ARS</p>
            {
                segundo 
                    ?<p className={s.moneda} >${primero?.toString().concat(",", segundo?.toString().slice(0, 4))}</p>
                    :<p className={s.coin} >${primero?.toString()}</p>
            }
        </div>
    )
}

export default Coin