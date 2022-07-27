import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSalaReunionesService } from '../services/salaReuniones.services';

export const SalaReunionesReserva = () => {
const [sala , setSala] = useState(null);
const location = useLocation()
const id = location?.state?.id;
const getAllSalaReuniones = async ()=> {
    try {
      const response = await getSalaReunionesService();
      console.log(response)
      const data = response.data;
      const sala = data?.find((sala) => sala._id === id)
      setSala(sala);
     
      
    }catch (err){
      console.log(err)
    }
  
  }
  useEffect(() => {
   id && getAllSalaReuniones()
  }, [id]);
  

  return (
    <div>
      <img src={sala?.imagen} alt="sala" width={700}></img> 
      <p>{sala?.name}</p>
      <p>{sala?.direccion}</p>
      <a href='/formulario-reserva'><button className='boton-reserva'>Reservar Fecha/Horaa</button></a>
     
    </div>
  )
}

export default SalaReunionesReserva
