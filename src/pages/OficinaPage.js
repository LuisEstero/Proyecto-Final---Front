import React from 'react'

import { useState, useEffect } from 'react';
//import styled from '@emotion/styled'
//import InputCustom from '../components/InputCustom'
//import moment from 'moment'
import { getOficinaService } from '../services/oficina.services';
//import { getSalaReunionesService } from '../services/salaReuniones.services';
import ButtonOficina from "../components/Button-Oficina";
import styled from '@emotion/styled';
//const Container = styled.div`
//display:flex;
//flex-direction:column;
//justify-content:center;
//`

//const Text = styled.p`
//display:flex;
//flex-direction:column;
//color: ${props => props.colorText && props.colorText};
//`

export const RowContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
`
function OficinaPage (){
  const [oficinas , setOficina] = useState([]);
  const getAllOficina = async ()=> {
    try {
      const response = await getOficinaService();
      console.log(response)
      setOficina(response.data);
      console.log(response.data)
      
    }catch (err){
      console.log(err)
    }
  
  }
  console.log(oficinas)
  useEffect(() => {
    getAllOficina()
  }, []);
  return (
    <RowContainer>
      {oficinas.map((oficina)=> {
        console.log(oficina)
       return (
       <ButtonOficina {...oficina} />
       )
        
      })} 
    </RowContainer>   
  )
}



export default OficinaPage