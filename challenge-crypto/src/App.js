import logo from './logo.svg';
import './App.css';

let ws = new WebSocket('wss://stream.binance.com:9443/stream?streams=btcbusd@trade/ethbusd@trade/bnbbusd@trade/lunabusd@trade/solbusd@trade/ltcbusd@trade/maticbusd@trade/avaxbusd@trade/xrpbusd@trade/busdusdt@trade')
ws.onmessage = (event) =>{
  console.log(event.data)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
