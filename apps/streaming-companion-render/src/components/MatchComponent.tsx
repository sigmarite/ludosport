import { Match } from '../models/Match';
import '../App.css';

interface MatchCompomentProp{
  match: Match;
}

export default function MatchComponent(props: MatchCompomentProp) {
  return (
    <div className="match">
      <div className="athlete first">{props.match.firstAthleteName}</div>
      <div className="score">{props.match.firstAthleteScore+" - "+props.match.secondAthleteScore}</div>
      <div className="athlete second">{props.match.secondAthleteName}</div>
    </div>
  );
}
