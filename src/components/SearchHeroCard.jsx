import { Button, Card } from "react-bootstrap";

export default function SearchHeroCard({ heroes }) {
  return (
    <div>
      <Card className="search-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={heroes.image?.url} />
          <Card.Title>{heroes.name}</Card.Title>
          <Button variant="primary" type="submit">
            Add team
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
