import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";

export const CountdownPage = () => {
  const deadline = useRef<Date>(new Date(2022, 7, 21, 20, 48, 0));
  const navigate = useNavigate();

  const [isTramposa, setTramposa] = useState<boolean>(false);
  const [now, setNow] = useState<Date>();

  useEffect(() => {
    const res = fetch('https://worldtimeapi.org/api/timezone/Europe/London', {method: 'GET'}).then( r => r.json());
    res.then(realDate => {
      if (new Date(realDate.datetime).getTime() >= deadline.current.getTime()) {
        navigate('/start');
      }
      setNow(new Date(realDate.datetime));
    });
  }, [navigate]);

  useEffect(() => {
    document.title = 'Soon, Emm...'
  }, [])

  const onComplete = () => {
    const res = fetch('https://worldtimeapi.org/api/timezone/Europe/London', {method: 'GET'}).then( r => r.json());
    res.then(realDate => {
      if (realDate && (new Date(realDate.datetime).getTime() >= deadline.current.getTime())) {
        navigate('/start');
      } else {
        setTramposa(true);
      }
    });    
  }

  return (
    <div
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', height: '100vh', fontSize: 64}}
    >
      {now ? <Countdown date={deadline.current} onComplete={onComplete}/> : <span>...</span>}
      {isTramposa && <h1>Cheater</h1>}
    </div>
  )
}

export default CountdownPage;