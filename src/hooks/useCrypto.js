import React, {useState} from 'react';
import styled from '@emotion/styled';


const useCrypto = (label, CRYPTOS) => {

  const [state, setState]=useState('')
  const handleState=(e)=>{
    setState(e.target.value)
  }

  const SelectTag=()=>(
    <>
      <Label>{label}</Label>
      <Select onChange={handleState} value={state}>
        <option value="">--Select your crypto</option>
        {CRYPTOS.map(CRYPTO=><option key={CRYPTO.CoinInfo.Id} value={CRYPTO.CoinInfo.Name}>{CRYPTO.CoinInfo.FullName}</option>)}
      </Select> 
    </>
  )

  return [state, SelectTag, setState];


}

const Label = styled.label`
font-family: 'Bebas Neue', cursive;
color: #FFF;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
display: block;
`;

const Select = styled.select`
width: 100%;
display:block;
padding: 1rem;
-webkit-appearance: none;
border-radius: 10px;
border: none;
font-size: 1.2rem;
`
export default useCrypto;