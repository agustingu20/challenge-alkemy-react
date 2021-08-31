import SuperheroesCard from "./SuperheroesCard";

export default function Team({ team }) {
  return (
    <div>
      {team.map((team) => (
        <SuperheroesCard team={team} key={team.id} />
      ))}
    </div>
  );
}
