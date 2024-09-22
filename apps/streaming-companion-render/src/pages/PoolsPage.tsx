import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { Match } from '../models/Match';
import { Rank } from '../models/Rank';
import PoolComponent from '../components/PoolComponent';
import '../App.css';

function PoolsPage() {
  const [firstPoolMatches, setFirstPoolMatches] = useState<Match[]>([]);
  const [secondPoolMatches, setSecondPoolMatches] = useState<Match[]>([]);
  const [firstPoolRanks, setFirstPoolRanks] = useState<Rank[]>([]);
  const [secondPoolRanks, setSecondPoolRanks] = useState<Rank[]>([]);
  let [searchParams] = useSearchParams();

  const fetchData = () => {
    fetchPoolMatches("pool"+searchParams.get("firstPool")+".json", setFirstPoolMatches);
    fetchPoolMatches("pool"+searchParams.get("secondPool")+".json", setSecondPoolMatches);
    fetchPoolRankings("pool"+searchParams.get("firstPool")+"-ranks.json", setFirstPoolRanks);
    fetchPoolRankings("pool"+searchParams.get("secondPool")+"-ranks.json", setSecondPoolRanks);
  }

  const fetchPoolMatches = (fileName: string, callback: (matches: Match[]) => void) => {
    fetch(process.env.REACT_APP_POOL_PATH+fileName)
      .then((res) => {
          if (!res.ok) {
              throw new Error (`HTTP error! Status: ${res.status}`);
          }
          return res.json();
      })
      .then((data) => { callback(data.matches) })
      .catch((error) => console.log(error.message))
  }

  const fetchPoolRankings = (fileName: string, callback: (ranks: Rank[]) => void) => {
    fetch(process.env.REACT_APP_POOL_PATH+fileName)
      .then((res) => {
          if (!res.ok) {
              throw new Error (`HTTP error! Status: ${res.status}`);
          }
          return res.json();
      })
      .then((data) => { callback(data.ranks) })
      .catch((error) => console.log(error.message))
  }

  useEffect(() => {
    fetchData();
    const matchesInterval = setInterval(() => fetchData(), Number(process.env.REACT_APP_DATA_REFRESH_INTERVAL))
    return (()=>{
      clearInterval(matchesInterval);
    })
  }, [])

  return (
    <div className="pools-viewport">
      <div className="pool-bottom">
        <PoolComponent matches={firstPoolMatches} ranks={firstPoolRanks} matchesPages={2}/>
      </div>
      <div className='separator'>
        <div className="logo">
          <img src="/assets/logo.jpg" alt="logo" />
        </div>
      </div>
      <div className="pool-top">
        <PoolComponent matches={secondPoolMatches} ranks={secondPoolRanks} matchesPages={2}/>
      </div>
    </div>
  );
}

export default PoolsPage;
