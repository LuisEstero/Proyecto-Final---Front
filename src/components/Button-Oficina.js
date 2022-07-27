import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { getOficinaService } from '../services/oficina.services';

function ButtonOficina({Name, Direccion, imagen, _id }) {
  const navigation = useNavigate()
  

  return (
    <Card className='button-oficina' style={{ width: '30rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
        <Card.Text> {Direccion}</Card.Text>
        <p class="boton_oficina" onClick={() => navigation('/office-books',{ state:{id: _id}})}>Reserva</p>
    
 
        
      </Card.Body>
    </Card>
  );
}

export default ButtonOficina;