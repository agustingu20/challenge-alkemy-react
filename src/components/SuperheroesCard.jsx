import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export default function SuperheroesCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <div>
            <ul>
              <li>Inteligencia: {props.intelligence}</li>
              <li>Agilidad: {props.strength}</li>
              <li>Velocidad: {props.speed}</li>
              <li>Durabilidad: {props.durability}</li>
              <li>Poder: {props.power}</li>
              <li>Combate: {props.combat}</li>
            </ul>
          </div>
          <Button variant="primary" onClick={handleShow}>
            Ver detalles
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles</Modal.Title>
        </Modal.Header>
        <div>
          <ul>
            <li>Peso: {props.hero.appearance?.weight.slice(1)} </li>
            <li>Altura: {props.hero.appearance?.height.slice(1)} </li>
            <li>Nombre: {}</li>
            <li>Alias: {props.hero.biography?.aliases.slice(1)}</li>
            <li>Color de ojos: {}</li>
            <li>Color de cabello: {}</li>
            <li>Lugar de trabajo: {props.hero.work?.base}</li>
          </ul>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
