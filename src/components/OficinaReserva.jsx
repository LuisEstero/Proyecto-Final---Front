import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getOficinaService } from '../services/oficina.services';

export const OficinaReserva = () => {
const [office , setOffice] = useState(null);
const location = useLocation()
const id = location?.state?.id;
const getAllOficina = async ()=> {
    try {
      const response = await getOficinaService();
      console.log(response)
      const data = response.data;
      const office = data?.find((office) => office._id === id)
      setOffice(office);
     
      
    }catch (err){
      console.log(err)
    }
  
  }
  useEffect(() => {
   id && getAllOficina()
  }, [id]);


  return (
    
    <div> 
      <img src={office?.imagen} alt="oficina" width={700}></img>
      <p className='title-bold'>{office?.Name}</p>
      <p>{office?.Direccion}</p>
      <div className='descripcion-texto'>
        <p className='descripcion'>{office?.Descripcion}</p>
      </div>
      
      <a href='/formulario-reserva'><button className='boton-reserva'>Reservar Fecha/Horaa</button></a>
      
    </div>
    
  )
}


export default OficinaReserva
