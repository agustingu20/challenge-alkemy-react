import { Button, Card } from "react-bootstrap";

export default function SearchHeroCard(props) {
  return (
    <div>
      <Card className="search-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            <p>hola</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
