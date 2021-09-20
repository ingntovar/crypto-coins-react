  
import React from 'react';
import styled from '@emotion/styled';


const Resume = ({resume}) => {
  if(Object.keys(resume).length === 0) return null;

  console.log(resume)

  return ( 
      <ResumeDiv>
          <Precio>The price is: <span>{resume.PRICE}</span> </Precio>
          <Info>The highest price of the day: <span>{resume.HIGHDAY}</span> </Info>
          <Info>The lowest price of the day: <span>{resume.LOWDAY}</span> </Info>
      </ResumeDiv>
   );
}


const ResumeDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

export default Resume;