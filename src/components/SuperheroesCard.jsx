import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export default function SuperheroesCard({ teammate, deleteTeammate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={teammate.image?.url} />
        <Card.Body>
          <Card.Title>{teammate.name}</Card.Title>
          <div>
            <ul>
              <li>Inteligencia: {teammate.powerstats?.intelligence}</li>
              <li>Agilidad: {teammate.powerstats?.strength}</li>
              <li>Velocidad: {teammate.powerstats?.speed}</li>
              <li>Durabilidad: {teammate.powerstats?.durability}</li>
              <li>Poder: {teammate.powerstats?.power}</li>
              <li>Combate: {teammate.powerstats?.combat}</li>
            </ul>
          </div>
          <Button variant="primary" onClick={handleShow}>
            Ver detalles
          </Button>
          <Button
            variant="primary"
            className="btn btn-warning mx-2"
            onClick={(teammate) => deleteTeammate(teammate)}
            value={teammate.id}
          >
            Eliminar Heroe
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles</Modal.Title>
        </Modal.Header>
        <div>
          <ul>
            <li>Peso: {teammate.appearance?.weight.slice(1)} </li>
            <li>Altura: {teammate.appearance?.height.slice(1)} </li>
            <li>Nombre: {teammate.biography?.["full-name"]}</li>
            <li>Alias: {teammate.biography?.aliases.slice(1)}</li>
            <li>Color de ojos: {teammate.appearance?.["eye-color"]}</li>
            <li>Color de cabello: {teammate.appearance?.["hair-color"]}</li>
            <li>Lugar de trabajo: {teammate.work?.base}</li>
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
