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

/*     let sas = new WebSocket('wss://stream.binance.com:9443/ws/busdusd@depth')
    sas.onmessage = ({data}) =>{
        const datazo = JSON.parse(data) 
        console.log(datazo.data)
    } */
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
    const bitcoinLine = "rgba(204, 185, 13)", bitcoinArea = "rgba(204, 185, 13, 0.5)",
        ethereumLine = "rgba(13, 204, 45)", ethereumArea = "rgba(13, 204, 45, 0.5)",
        bnbLine = "rgba(204, 13, 13)", bnbArea = "rgba(204, 13, 13, 0.5)",
        lunaLine = "rgba(13, 204, 131)", lunaArea = "rgba(13, 204, 131, 0.5)",
        solLine = "rgba(13, 64, 204)", solArea = "rgba(13, 64, 204, 0.5)",
        litecoinLine = "rgba(86, 13, 204)", litecoinArea = "rgba(86, 13, 204, 0.5)",
        maticLine = "rgba(188, 13, 204)", maticArea = "rgba(188, 13, 204, 0.5)",
        avaxLine = "rgba(204, 13, 118)", avaxArea = "rgba(204, 13, 118, 0.5)",
        xrpLine = "rgba(204, 13, 29)", xrpArea = "rgba(204, 13, 29, 0.5)",
        busdLine = "rgba(147, 204, 13)", busdArea = "rgba(147, 204, 13, 0.5)"
    

  return (
    <div className={s.container} >
        <h1 className={s.title} >ReactJS Challenge</h1>
        <h2 className={s.subtitle} >Cotizaciones</h2>
        <div className={s.containerCoins} >
            <input type="text" placeholder='Filtrar por moneda' className={s.input} />
            <button className={s.button} ><HiOutlineSearch/></button>
            <div className={s.monedas} >
            <p style={{marginBottom: "3rem", marginLeft: "2rem"}} className={s.monedaWords} >Monedas disponibles</p>
            </div>
            <div className={s.containerCoins2} >
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/bitcoin.png')} alt="bitcoin" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >BTC</h2>
                        <p style={{marginTop: 0}} >Bitcoin</p>
                    </div>
                    {
                        bitcoin.length && 
                        <>
                        <Graphic dataState={bitcoin} colorLine={bitcoinLine} colorArea={bitcoinArea} />
                        <Coin data={bitcoin}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/ethereum.png')} alt="ethereum" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >ETH</h2>
                        <p style={{marginTop: 0}} >Ethereum</p>
                    </div>
                    {
                        ethereum.length && 
                        <>
                        <Graphic dataState={ethereum} colorLine={ethereumLine} colorArea={ethereumArea} />
                        <Coin data={ethereum}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/bnb.png')} alt="bnb" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >BNB</h2>
                        <p style={{marginTop: 0}} >Binance Coin</p>
                    </div>
                    {
                        bnb.length && 
                        <>
                        <Graphic dataState={bnb} colorLine={bnbLine} colorArea={bnbArea} />
                        <Coin data={bnb}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/terra(luna).png')} alt="luna" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >LUNA</h2>
                        <p style={{marginTop: 0}} >Terra</p>
                    </div>
                    {
                        luna.length && 
                        <>
                        <Graphic dataState={luna} colorLine={lunaLine} colorArea={lunaArea} />
                        <Coin data={luna}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/sol.png')} alt="sol" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >SOL</h2>
                        <p style={{marginTop: 0}} >Solana</p>
                    </div>
                    {
                        sol.length && 
                        <>
                        <Graphic dataState={sol} colorLine={solLine} colorArea={solArea} />
                        <Coin data={sol}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/litecoin.png')} alt="litecoin" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >LTC</h2>
                        <p style={{marginTop: 0}} >Litecoin</p>
                    </div>
                    {
                        litecoin.length && 
                        <>
                        <Graphic dataState={litecoin} colorLine={litecoinLine} colorArea={litecoinArea} />
                        <Coin data={litecoin}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/matic.png')} alt="matic" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >MATIC</h2>
                        <p style={{marginTop: 0}} >Polygon</p>
                    </div>
                    {
                        matic.length && 
                        <>
                        <Graphic dataState={matic} colorLine={maticLine} colorArea={maticArea} />
                        <Coin data={matic}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/avax.png')} alt="avax" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >AVAX</h2>
                        <p style={{marginTop: 0}} >Avalanche</p>
                    </div>
                    {
                        avax.length && 
                        <>
                        <Graphic dataState={avax} colorLine={avaxLine} colorArea={avaxArea} />
                        <Coin data={avax}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/xrp.png')} alt="xrp" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >XRP</h2>
                        <p style={{marginTop: 0}} >XRP</p>
                    </div>
                    {
                        xrp.length && 
                        <>
                        <Graphic dataState={xrp} colorLine={xrpLine} colorArea={xrpArea} />
                        <Coin data={xrp}/>
                        </>
                    }
                </div>
                <hr width={"90%"} />
                <div className={s.containerOneCoin} >
                    <div>
                        <img src={require('../image/busd.png')} alt="busd" width={"40px"} />
                    </div>
                    <div className={s.titleCoin} >
                        <h2 style={{marginBottom: 0}} >BUSD</h2>
                        <p style={{marginTop: 0}} >Binance USD</p>
                    </div>
                    {
                        busd.length && 
                        <>
                        <Graphic dataState={busd} colorLine={busdLine} colorArea={busdArea} />
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