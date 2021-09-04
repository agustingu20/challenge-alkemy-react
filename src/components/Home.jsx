import { useEffect, useState } from "react";
import Team from "./Team";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import SearchHeroCard from "./SearchHeroCard";
import "../assets/home.css";
import TeamPowerstats from "./TeamPowerstats";
import { useHistory } from "react-router";

export default function Home({ token }) {
  const [heroId, setHeroId] = useState("");
  const [hero, setHero] = useState(null);
  const [team, setTeam] = useState([]);
  const [powerstats, setPowerstats] = useState([]);
  const [heroesQuota, setHeroesQuota] = useState({
    goodHeroes: 0,
    badHeroes: 0,
  });

  const history = useHistory();

  const handleChange = (event) => {
    const { value } = event.target;
    setHeroId(value);
  };

  const defineHeroesQuota = (team) => {
    let goodTeammates = 0;
    let badTeammates = 0;

    for (const teammate of team) {
      if (teammate.biography.alignment === "good") {
        goodTeammates = ++goodTeammates;
      } else {
        badTeammates = ++badTeammates;
      }
    }
    setHeroesQuota({ goodHeroes: goodTeammates, badHeroes: badTeammates });
  };

  useEffect(() => {
    defineHeroesQuota(team);
  }, [team]);

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    try {
      const idHero = heroId;
      const response = await axios.get(`/${idHero}`);
      setHero(response.data);
      if (idHero === "") {
        setHero("");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const teamSubmit = async (event) => {
    event.preventDefault();
    if (team.length < 6) {
      if (heroesQuota.goodHeroes < 3 || heroesQuota.badHeroes < 3) {
        try {
          const idHeroTeam = heroId;
          const response = await axios.get(`/${idHeroTeam}`);
          const repeatedHeroes = team.find(
            (teammate) => teammate.id === idHeroTeam
          );
          if (!repeatedHeroes) {
            setTeam([...team, response.data]);
          }
          setPowerstats([...powerstats, response.data?.powerstats]);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      console.log("no se pueden añadir más heroes");
    }
  };

  const deleteTeammate = (event) => {
    event.preventDefault();
    const teamFiltered = team.filter(
      (teammate) => teammate.id !== event.target.value
    );
    console.log("deleteTeammate ~ event.target.id", event.target.value);
    setTeam(teamFiltered);
  };

  if (!token) {
    history.push("/login");
  }

  return (
    <div className="background-image">
      <div className="d-flex flex-wrap justify-content-center mb-5 pt-5">
        <Form onSubmit={handleSubmit} className="search-form mx-4 h-100">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-light fw-bold">Hero Id</Form.Label>
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
            {hero && <SearchHeroCard hero={hero} />}
          </Form>
        </div>
      </div>
      {team.length !== 0 && <TeamPowerstats team={team} />}
      {team.length !== 0 && (
        <Team team={team} deleteTeammate={deleteTeammate} />
      )}
    </div>
  );
}
