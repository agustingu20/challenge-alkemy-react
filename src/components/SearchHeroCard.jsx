import { Button, Card } from "react-bootstrap";

export default function SearchHeroCard(props) {
  return (
    <div>
      <Card className="search-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={props.image} />
          <Card.Title>{props.name}</Card.Title>
          <Button variant="primary">Add team</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
