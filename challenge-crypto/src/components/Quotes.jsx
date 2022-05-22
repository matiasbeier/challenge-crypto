import React, { useState } from 'react'

function Quotes() {
/*     const [quote, setQuote] = useState([]) */
    const [bitcoin, setBitcoin] = useState([])
    const [ethereum, setEthereum] = useState([])
    const [bnb, setBnb] = useState([])
    const [luna, setLuna] = useState({})
    const [sol, setSol] = useState({})
    const [litecoin, setLitecoin] = useState({})
    const [mati, setMati] = useState({})
    const [avax, setAvax] = useState({})
    const [xrp, setXrp] = useState({})
    const [bus, setBus] = useState({})

    let ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcbusd@trade/ethbusd@trade/bnbbusd@trade/lunabusd@trade/solbusd@trade/ltcbusd@trade/maticbusd@trade/avaxbusd@trade/xrpbusd@trade/busdusdt@trade')
    ws.onmessage = ({data}) =>{
        const result = JSON.parse(data) 
        console.log(result.data)
        switch (result.data.s) {
            case "BTCBUSD":
                setBitcoin((prevState) => [...prevState, result.data]);
                break;
            case "ETHBUSD":
                setEthereum((prevState) => [...prevState, result.data]);
                break;
            case "BNBBUSD":
                setBnb((prevState) => [...prevState, result.data]);
                break;
            case "LUNABUSD":
                setLuna(result.data);
                break;
            case "SOLBUSD":
                setSol(result.data);
                break;
            case "LTCBUSD":
                setLitecoin(result.data);
                break;
            case "MATICBUSD":
                setMati(result.data);
                break;
            case "AVAXBUSD":
                setAvax(result.data);
                break;
            case "XRPBUSD":
                setXrp(result.data);
                break;
            case "BUSDUSDT":
                setBus(result.data);
                break;
            default:
                break;
        }

        /* console.log(quote) */
    }
/*     let ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcbusd@trade/ethbusd@trade/bnbbusd@trade/lunabusd@trade/solbusd@trade/ltcbusd@trade/maticbusd@trade/avaxbusd@trade/xrpbusd@trade/busdusdt@trade')
    ws.onmessage = ({data}) =>{
        const result = JSON.parse(data) 
        console.log(result.data.s)
        if(quote.length){
            const indexMoneda = quote.findIndex(obj => result.data.s === obj.s)
            if(indexMoneda >= 0){
                console.log('hola')
                let algo = quote
                algo[indexMoneda] = result.data
                setQuote(algo)
            } else{
                console.log('chau')
                setQuote([...quote, result.data])
            }
        } else{
            console.log('aca')
            setQuote([result.data])
        }
         console.log(quote) 
    }*/
    

  return (
    <div>
        <h2>Cotizaciones</h2>
        <div>
            <input type="text" placeholder='Filtrar por moneda' />
            <button>buscar</button>
            <p>Monedas disponibles</p>
            <div>
                {
                    bitcoin.length &&
                    <div>
                        <h2>{bitcoin.s}</h2>
                        <p>{bitcoin.p}</p>
                    </div>
                }
                {
                    ethereum.length &&
                    <div>
                        <h2>{ethereum[ethereum.length - 1].s}</h2>
                        <p>{ethereum[ethereum.length - 1].p}</p>
                    </div>
                }
                {
                    bnb.length &&
                    <div>
                        <h2>{bnb[bnb.length - 1].s}</h2>
                        <p>{bnb[bnb.length - 1].p}</p>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Quotes