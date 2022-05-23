import React, { useState } from 'react'
import Coin from './Coin'
import Graphic from './Graphic'
import s from './quotes.module.css'
import {HiOutlineSearch} from 'react-icons/hi'

function Quotes() {
/*     const [quote, setQuote] = useState([]) */
    const [bitcoin, setBitcoin] = useState([])
    const [ethereum, setEthereum] = useState([])
    const [bnb, setBnb] = useState([])
    const [luna, setLuna] = useState([])
    const [sol, setSol] = useState([])
    const [litecoin, setLitecoin] = useState([])
    const [matic, setMatic] = useState([])
    const [avax, setAvax] = useState([])
    const [xrp, setXrp] = useState([])
    const [busd, setBusd] = useState([])

    let sas = new WebSocket('wss://stream.binance.com:9443/busdusd@ticker')
    sas.onmessage = ({data}) =>{
        const datazo = JSON.parse(data) 
        console.log(datazo)
    }
    let ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcbusd@trade/ethbusd@trade/bnbbusd@trade/lunabusd@trade/solbusd@trade/ltcbusd@trade/maticbusd@trade/avaxbusd@trade/xrpbusd@trade/busdusdt@trade')
    ws.onmessage = ({data}) =>{
        const result = JSON.parse(data) 
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
                setLuna((prevState) => [...prevState, result.data]);
                break;
            case "SOLBUSD":
                setSol((prevState) => [...prevState, result.data]);
                break;
            case "LTCBUSD":
                setLitecoin((prevState) => [...prevState, result.data]);
                break;
            case "MATICBUSD":
                setMatic((prevState) => [...prevState, result.data]);
                break;
            case "AVAXBUSD":
                setAvax((prevState) => [...prevState, result.data]);
                break;
            case "XRPBUSD":
                setXrp((prevState) => [...prevState, result.data]);
                break;
            case "BUSDUSDT":
                setBusd((prevState) => [...prevState, result.data]);
                break;
            default:
                break;
        }

        /* console.log(quote) */
    }
/*     let ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcbusd@trade/ethbusd@trade/bnbbusd@trade/lunabusd@trade/solbusd@trade/ltcbusd@trade/maticcbusd@trade/avaxbusd@trade/xrpbusd@trade/busdusdt@trade')
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
    <div className={s.container} >
        <h1 className={s.title} >ReactJS Challenge</h1>
        <h2 className={s.subtitle} >Cotizaciones</h2>
        <div className={s.containerCoins} >
            <input type="text" placeholder='Filtrar por moneda' />
            <button><HiOutlineSearch/></button>
            <p>Monedas disponibles</p>
            <div className={s.containerCoins2} >
                <div className={s.containerOneCoin} >
                    <div className={s.titleCoin} >
                        <h2>BTC</h2>
                        <p>Bitcoin</p>
                    </div>
                    {
                        bitcoin.length && 
                        <>
                        <Graphic dataState={bitcoin} />
                        <Coin data={bitcoin}/>
                        </>
                    }
                </div>
                <hr />
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>ETH</h2>
                        <p>Ethereum</p>
                    </div>
                    {
                        ethereum.length && 
                        <>
                        <Graphic dataState={ethereum} />
                        <Coin data={ethereum}/>
                        </>
                    }
                </div>
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>BNB</h2>
                        <p>Binance Coin</p>
                    </div>
                    {
                        bnb.length && 
                        <>
                        <Graphic dataState={bnb} />
                        <Coin data={bnb}/>
                        </>
                    }
                </div>
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>LUNA</h2>
                        <p>Terra</p>
                    </div>
                    {
                        luna.length && 
                        <>
                        <Graphic dataState={luna} />
                        <Coin data={luna}/>
                        </>
                    }
                </div>
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>SOL</h2>
                        <p>Solana</p>
                    </div>
                    {
                        sol.length && 
                        <>
                        <Graphic dataState={sol} />
                        <Coin data={sol}/>
                        </>
                    }
                </div>
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>LTC</h2>
                        <p>Litecoin</p>
                    </div>
                    {
                        litecoin.length && 
                        <>
                        <Graphic dataState={litecoin} />
                        <Coin data={litecoin}/>
                        </>
                    }
                </div>
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>MATIC</h2>
                        <p>Polygon</p>
                    </div>
                    {
                        matic.length && 
                        <>
                        <Graphic dataState={matic} />
                        <Coin data={matic}/>
                        </>
                    }
                </div>
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>AVAX</h2>
                        <p>Avalanche</p>
                    </div>
                    {
                        avax.length && 
                        <>
                        <Graphic dataState={avax} />
                        <Coin data={avax}/>
                        </>
                    }
                </div>
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>XRP</h2>
                        <p>XRP</p>
                    </div>
                    {
                        xrp.length && 
                        <>
                        <Graphic dataState={xrp} />
                        <Coin data={xrp}/>
                        </>
                    }
                </div>
                <div className={s.containerOneCoin} >
                    <div>
                        <h2>BUSD</h2>
                        <p>Binance USD</p>
                    </div>
                    {
                        busd.length && 
                        <>
                        <Graphic dataState={busd} />
                        <Coin data={busd}/>
                        </>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quotes