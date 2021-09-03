export default function TeamPowerstats({ team }) {
  return (
    <div className="d-flex justify-content-center flex-wrap mt-5">
      <div className="powerstat-intelligence">
        Team Intelligence:
        {team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.intelligence);
          }, 0)}
      </div>
      <div className="powerstat-strength">
        Team Strength:
        {team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.strength);
          }, 0)}
      </div>
      <div className="powerstat-speed">
        Team Speed:
        {team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.speed);
          }, 0)}
      </div>
      <div className="powerstat-durability">
        Team Durability:
        {team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.durability);
          }, 0)}
      </div>
      <div className="powerstat-power">
        Team Power:
        {team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.power);
          }, 0)}
      </div>
      <div className="powerstat-combat">
        Team Combat:
        {team.length &&
          team.reduce((a, b) => {
            return a + parseInt(b.powerstats.combat);
          }, 0)}
      </div>
      <div className="appearance-weight">
        Peso Promedio:
        {team.length &&
          team.reduce((a, b) => {
            return Math.round(
              a + parseInt(b.appearance?.weight[1].split("kg")) / team.length
            );
          }, 0)}
      </div>
      <div className="appearence-height">
        Altura Promedio:
        {team.length &&
          team.reduce((a, b) => {
            return Math.round(
              a + parseInt(b.appearance?.height[1].split("kg")) / team.length
            );
          }, 0)}
      </div>
    </div>
  );
}
