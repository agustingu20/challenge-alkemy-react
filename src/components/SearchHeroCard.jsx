import { Button, Card } from "react-bootstrap";

export default function SearchHeroCard({ heroes }) {
  return (
    <div>
      <Card className="search-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={heroes.image?.url} />
          <Card.Title>{heroes.name}</Card.Title>
          {heroes.biography?.alignment === "good" && (
            <Card.Title className="btn btn-success mb-3 w-100">
              {heroes.biography?.alignment}
            </Card.Title>
          )}
          {heroes.biography?.alignment === "bad" && (
            <Card.Title className="btn btn-danger mb-3 w-100">
              {heroes.biography?.alignment}
            </Card.Title>
          )}
          <Button variant="primary" className="" type="submit">
            Add team
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
