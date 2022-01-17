import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import  contract from "./contracts/MarsBaseExchange.json"
import {Abi} from "./interface/Abi.interface"

const contractAdress:string = "0x3C7aC93bB118f230Bd1db6ea3c51BD19abc3Ed46"

function App(): JSX.Element {
  useEffect(() => {
    const web3 = new Web3('https://mainnet.infura.io/v3/8b8bbe64db914ab4a7ee58be16e43836')
    const contractNew = new web3.eth.Contract(contract.abi: Array<Abi>, contractAdress)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
