import SuperheroesCard from "./SuperheroesCard";

export default function Team({ team, deleteTeammate }) {
  return (
    <div>
      <h2 className="text-center fw-bold titles-card mt-3 mb-3 text-light">
        Heroes Team
      </h2>
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
