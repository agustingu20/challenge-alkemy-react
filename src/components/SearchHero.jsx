import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../assets/search.css";
import SearchHeroCard from "./SearchHeroCard";

export default function SearchHero() {
  const [heroes, setHeroes] = useState([]);
  const [heroName, setHeroName] = useState("");

  useEffect(() => {
    getHero();
  }, [heroName]);

  const handleChange = (event) => {
    const { value } = event.target;
    setHeroName(value);
  };

  const getHero = async () => {
    const response = await axios.get(
      `https://superheroapi.com/api/10224034783111933/search/${heroName}`
    );
    setHeroes(response.data.results);
    console.log("getHero ~ response.data.results", response.data.results);
  };

  return (
    <div>
      <Form className="search-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Hero Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            placeholder="Enter hero name"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div>
        {heroes && heroes.map((hero) => <SearchHeroCard name={hero.name} />)}
      </div>
    </div>
  );
}
