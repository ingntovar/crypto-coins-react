import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCrypto from "../hooks/useCrypto";
import { COINS} from "../helpers";
import axios from "axios";
import Error from './Error';

const Form = ({setExchangeData}) => {

  const [cryptos, setCryptos ]=useState([])
  const [coin, SelectCoin]=useCoin('Select your coin', COINS)
  const [crypto, SelectCrypto]=useCrypto('Select your coin', cryptos)
  const [error, setError]=useState(false)

  useEffect(()=>{
    const getCryptoApi=async ()=>{
      const url=`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`
      const cryptoRequest=await axios.get(url)
      
      setCryptos(cryptoRequest.data.Data) 
    }
    getCryptoApi()
  }, [])

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(coin==='' || crypto===''){
      setError(true)
      return
    }

    setError(false)
    setExchangeData({
      coin,
      crypto
    })
    
            
  }

  return ( 
    <form onSubmit={handleSubmit}>
      {error ?<Error message={'All the fields must be filled'}/>:null}
      <SelectCoin/> 
      <SelectCrypto/>
      <Bottom
        type="submit"
        value="Calculate"
      />
    </form>


   );
}

const Bottom=styled.input`
  margin-top: 20px ;
  font-weight:bold ;
  font-size: 20px;
  padding: 10px;
  background-color: #66A2FE ;
  border: none ;
  width: 100% ;
  border-radius: 10px ;
  color: #FFF ;
  transition:background-color .3s ease ;

  &:hover{
    background-color: #326AC0;
    cursor: pointer;
  }

`


export default Form;