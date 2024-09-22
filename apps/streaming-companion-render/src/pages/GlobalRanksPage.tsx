import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { Rank } from '../models/Rank';
import '../App.css';
import RankComponent from '../components/RankComponent';
import { stringToNumber } from '../utils/ScoreFormatter';

interface PoolRanks {
  name: string,
  ranks?: Rank[]
}

function GlobalRanksPage() {
  const [poolRankings, setPoolRankings] = useState<PoolRanks[]>([]);
  const [viewportDivisions] = useState<number>(2);
  const [searchParams] = useSearchParams();

  const fetchRankings = async (pool: string) => {
    fetch(process.env.REACT_APP_POOL_PATH+"pool"+pool+"-ranks.json")
      .then((res) => {
          if (!res.ok) {
              throw new Error (`HTTP error! Status: ${res.status}`);
          }
          return res.json();
      })
      .then((data) => { updatedPoolRanks(pool, data.ranks) })
      .catch((error) => console.log(error.message))
  }

  const updatedPoolRanks = (pool: string, ranks: Rank[]) => {
    // Order
    let orderedRanks = ranks.sort((a,b) => stringToNumber(b.score) - stringToNumber(a.score));
    setPoolRankings(prevPoolRankings => {
      // Replace if already exists
      if (prevPoolRankings.find((poolRank: PoolRanks) => poolRank.name === pool)){
        return prevPoolRankings.map((poolRank: PoolRanks) =>{
          if(poolRank.name === pool) return {name: pool, ranks: orderedRanks}
          return poolRank;
        }) 
      } else {
        // Add if doesn't exists
        return prevPoolRankings.concat({name: pool, ranks: orderedRanks})
      }
    })        
  }
  useEffect(() => {
    let poolsString = searchParams.get("pools");
    let pools = poolsString?.split(",");
    if(!!pools && pools.length > 0){
      pools.forEach(pool =>{fetchRankings(pool)})
    }
  }, [])

  return (    
    <div className="rankings-viewport">
      {/* <div className="top-logo-container">
        <div className="logo">
          <img src="/assets/logo.jpg" alt="logo" />
        </div>
      </div> */}
      {poolRankings.map((poolRanks: PoolRanks) => (
        <div className="pool-ranks-container " key={"poolRanks-"+poolRanks.name}>
          <div className="view-title">Girone {poolRanks.name}</div> 
          {poolRanks.ranks?.map((rank: Rank) => (
            <RankComponent rank={rank} key={rank.athlete}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GlobalRanksPage;
