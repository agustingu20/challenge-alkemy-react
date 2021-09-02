import { useEffect, useState } from "react";
import Team from "./Team";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import SearchHeroCard from "./SearchHeroCard";
import "../assets/search.css";

export default function Home() {
  const [heroId, setHeroId] = useState("");
  const [hero, setHero] = useState(null);
  const [team, setTeam] = useState([]);
  const [powerstats, setPowerstats] = useState([]);
  const [poweracum, setPoweracum] = useState("");
  const [heroesQuota, setHeroesQuota] = useState({
    goodHeroes: 0,
    badHeroes: 0,
  });

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
      console.log(error);
    }
  };

  const teamSubmit = async (event) => {
    event.preventDefault();
    if (team.length < 6) {
      if (heroesQuota.goodHeroes < 3) {
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
      // if (heroesQuota.badHeroes < 3) {
      //   try {
      //     const idHeroTeam = heroId;
      //     const response = await axios.get(`/${idHeroTeam}`);
      //     setTeam([...team, response.data]);
      //     setPowerstats([...powerstats, response.data?.powerstats]);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
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

  return (
    <div>
      <div>
        Inteligencia total:
        {team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.intelligence);
          }, 0)}
      </div>
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
            {hero && <SearchHeroCard hero={hero} />}
          </Form>
        </div>
      </div>
      {team !== "" && <Team team={team} deleteTeammate={deleteTeammate} />}
    </div>
  );
}
