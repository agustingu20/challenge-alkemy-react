import { Button, Card } from "react-bootstrap";

export default function SearchHeroCard({ hero }) {
  return (
    <div>
      <Card className="search-card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={hero.image?.url} />
          <Card.Title>{hero.name}</Card.Title>
          {hero.biography?.alignment === "good" && (
            <Card.Title className="btn btn-success mb-3 w-100">
              {hero.biography?.alignment}
            </Card.Title>
          )}
          {hero.biography?.alignment === "bad" && (
            <Card.Title className="btn btn-danger mb-3 w-100">
              {hero.biography?.alignment}
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
