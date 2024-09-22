import { Match } from '../models/Match';
import '../App.css';
import { Rank } from '../models/Rank';
import { useEffect, useState } from 'react';
import MatchComponent from './MatchComponent';
import RankComponent from './RankComponent';

interface PoolComponentProps{
  matchesPages: number;
  matches: Match[];
  ranks: Rank[];
}

export default function PoolComponent(props: PoolComponentProps) {

  const [currentView, setCurrentView] = useState(1);
  const [currentMatches, setCurrentMatches] = useState<Match[]>([]);

  useEffect(()=> {
    if(currentView <= props.matchesPages){
      let interval = Math.trunc(props.matches.length / props.matchesPages);
      if( props.matches.length % props.matchesPages > 0)
        interval ++;
      let startIndex = (currentView -1)*interval;
      setCurrentMatches(props.matches.slice(startIndex, startIndex+interval));
    }
  },[currentView, props.matches, props.matchesPages])

  useEffect(()=> {
    const changeViewInterval = setInterval(() => {
      // Le pagine totali sono il numero di pagine per i match + un altra per le classifiche
      if (currentView + 1 > props.matchesPages + 1){
        setCurrentView(1);
      } else {
        setCurrentView(currentView+1);
      }  
    }, Number(process.env.REACT_APP_VIEW_CHANGE_INTERVAL))
    return (()=>{
      clearInterval(changeViewInterval);
    })
  },[currentView, setCurrentView, props.matchesPages])

  return (
    <div className="pool">
      {currentView <= props.matchesPages ? (
        <div className="container">
          <div className="view-title">Incontri</div> 
          {currentMatches.map((match: Match) => (
            <MatchComponent match={match} key={match.firstAthleteName+"-"+match.secondAthleteName}/>
          ))}
        </div>
      ) : (
        <div className="container">
          <div className="view-title">Classifica</div> 
          {props.ranks.map((rank: Rank) => (
            <RankComponent rank={rank} key={rank.athlete}/>
          ))}
        </div>
      )}
    </div>
  );
}
