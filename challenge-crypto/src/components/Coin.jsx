import React from 'react'

function Coin({data}) {

    let number = data[data.length - 1]?.p*200
    number = number.toString()
    const [primero, segundo] = number.split(".")
    return (
        <div>
            <p>ARS</p>
            {
                segundo 
                    ?<p>${primero?.toString().concat(".", segundo?.toString().slice(0, 4))}</p>
                    :<p>${primero?.toString()}</p>
            }
        </div>
    )
}

export default Coin