import { useEffect, useState } from "react";
import SuperheroesCard from "./SuperheroesCard";
import axios from "axios";
import { Form } from "react-bootstrap";
import SearchHero from "./SearchHero";

export default function Home() {
  const [heroes, setHeroes] = useState({});
  const [heroName, setHeroName] = useState("70");

  useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    const response = await axios.get(
      `https://superheroapi.com/api/10224034783111933/70`
    );
    setHeroes(response.data);
  };

  return (
    <div>
      <SearchHero />
      <SuperheroesCard
        name={heroes.name}
        imageUrl={heroes.image?.url}
        intelligence={heroes.powerstats?.intelligence}
        strength={heroes.powerstats?.strength}
        speed={heroes.powerstats?.speed}
        durability={heroes.powerstats?.durability}
        power={heroes.powerstats?.power}
        combat={heroes.powerstats?.combat}
        hero={heroes}
      />
    </div>
  );
}
