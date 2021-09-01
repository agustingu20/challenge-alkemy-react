import { useState } from "react";
import Team from "./Team";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import SearchHeroCard from "./SearchHeroCard";
import "../assets/search.css";

export default function Home() {
  const [heroId, setHeroId] = useState("");
  const [heroes, setHeroes] = useState([]);
  const [team, setTeam] = useState([]);
  const [powerstats, setPowerstats] = useState([]);
  console.log("Home ~ powerstats", powerstats);
  const [poweracum, setPoweracum] = useState("");
  console.log("Home ~ poweracum", poweracum);

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
    if (team.length < "6") {
      try {
        const idHeroTeam = heroId;
        const response = await axios.get(`/${idHeroTeam}`);
        setTeam([...team, response.data]);
        setPowerstats([...powerstats, response.data?.powerstats]);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("no se pueden añadir más heroes");
    }
  };

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center mb-5 mt-5">
        <Form onSubmit={handleSubmit} className="search-form mx-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hero Id</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="number"
              placeholder="Enter Hero Id"
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
