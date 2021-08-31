import { useEffect, useState } from "react";
import Team from "./Team";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import SearchHeroCard from "./SearchHeroCard";
import "../assets/search.css";

export default function Home() {
  const [heroId, setHeroId] = useState("");
  const [heroes, setHeroes] = useState([]);
  const [team, setTeam] = useState([]);
  console.log("Home ~ team", team);

  const handleChange = (event) => {
    const { value } = event.target;
    setHeroId(value);
  };

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    try {
      const idHero = heroId;
      const response = await axios.get(`/${idHero}`);
      console.log("handleSubmit ~ response", response);
      setHeroes(response.data);
      if (idHero === "") {
        setHeroes("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const teamSubmit = async (event) => {
    event.preventDefault();
    try {
      const idHeroTeam = heroId;
      const response = await axios.get(`/${idHeroTeam}`);
      setTeam([...team, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit} className="search-form">
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
          <Form onSubmit={teamSubmit}>
            {heroId !== "" && <SearchHeroCard heroes={heroes} />}
          </Form>
        </div>
      </div>
      {team !== "" && <Team team={team} />}
    </div>
  );
}
