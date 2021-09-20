import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import imagen from "./cryptomonedas.png"
import Form from "./components/Form"
import Resume from "./components/Resume"

import axios from 'axios';

function App() {

  const [exchangeData, setExchangeData]=useState('')
  const [resumeData,setResumeData]=useState({})

  useEffect(()=>{

    if(exchangeData==='') return
    
    const requestExchange=async ()=>{
      const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${exchangeData.crypto}&tsyms=${exchangeData.coin}`
      const requestAxios=await axios.get(url)
      setResumeData(requestAxios.data.DISPLAY[exchangeData.crypto][exchangeData.coin])
    }

    requestExchange()

  }, [exchangeData])

  return (
    <Container>
      <div>
        <Image 
          src={imagen} 
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Cripto Monedas al instante</Heading>
        <Form setExchangeData={setExchangeData}/>
        <Resume resume={resumeData}/>
      </div>
    </Container>
  );
}

const Container=styled.div`
  max-width: 900px ;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr) ;
    column-gap: 2rem;
  }
`
const Image =styled.img`
  max-width: 100%;
  margin-top: 5rem;

`
const Heading= styled.h1`
  font-family:'Bebas Neue', cursive ;
  color: #FFF ;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content:'';
    width: 100px;
    height : 6px ;
    background-color: #66A2FE;
    display: block;
  }


`

export default App;
