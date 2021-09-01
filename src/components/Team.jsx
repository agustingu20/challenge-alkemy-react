import SuperheroesCard from "./SuperheroesCard";

export default function Team({ team }) {
  return (
    <div>
      <p className="text-center">Equipo de héroes</p>
      <div className="d-flex justify-content-center flex-wrap">
        {team.map((team) => (
          <SuperheroesCard team={team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
