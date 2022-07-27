import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

function BasicExample({name, direccion, imagen, _id}) {
  const navigation = useNavigate()
 
  return (
    <Card className='button-sala' style={{ width: '30rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text> {direccion}</Card.Text>    
        <p class="boton_oficina" onClick={() => navigation('/salaReserva',{ state:{id: _id}})}>Reserva</p>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;