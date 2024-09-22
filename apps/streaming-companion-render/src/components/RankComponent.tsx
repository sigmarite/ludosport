import { Rank } from '../models/Rank';
import '../App.css';

interface RankComponentProps{
  rank: Rank;
}

export default function RankComponent(props: RankComponentProps) {
  return (
    <div className="rank">
      <div className="full-athlete">{props.rank.athlete}</div>
      <div className="rank-score">{props.rank.score}</div>
    </div>
  );
}
