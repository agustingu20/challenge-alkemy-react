import SuperheroesCard from "./SuperheroesCard";

export default function Team({ team, deleteTeammate }) {
  return (
    <div>
      <p className="text-center">Equipo de héroes</p>
      <div className="d-flex justify-content-center flex-wrap">
        {team.map((teammate) => (
          <SuperheroesCard
            teammate={teammate}
            key={teammate.id}
            deleteTeammate={deleteTeammate}
          />
        ))}
      </div>
    </div>
  );
}
