import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export default function SuperheroesCard({ team }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={team.image?.url} />
        <Card.Body>
          <Card.Title>{team.name}</Card.Title>
          <div>
            <ul>
              <li>Inteligencia: {team.powerstats?.intelligence}</li>
              <li>Agilidad: {team.powerstats?.strength}</li>
              <li>Velocidad: {team.powerstats?.speed}</li>
              <li>Durabilidad: {team.powerstats?.durability}</li>
              <li>Poder: {team.powerstats?.power}</li>
              <li>Combate: {team.powerstats?.combat}</li>
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
            <li>Peso: {team.appearance?.weight.slice(1)} </li>
            <li>Altura: {team.appearance?.height.slice(1)} </li>
            <li>Nombre: {team.biography?.["full-name"]}</li>
            <li>Alias: {team.biography?.aliases.slice(1)}</li>
            <li>Color de ojos: {team.appearance?.["eye-color"]}</li>
            <li>Color de cabello: {team.appearance?.["hair-color"]}</li>
            <li>Lugar de trabajo: {team.work?.base}</li>
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
