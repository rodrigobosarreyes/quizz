import { useEffect, useMemo, useRef, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { useNavigate } from "react-router-dom";
import App from "../../App";
import getRealtime from "../../core/hooks/useRealtime";

export const CountdownPage = () => {
  const deadline = useRef<Date>(new Date(2022, 5, 18, 20, 48, 0));
  const navigate = useNavigate();

  const [isTramposa, setTramposa] = useState<boolean>(false);
  const [now, setNow] = useState<Date>();

  useEffect(() => {
    const res = fetch('http://worldtimeapi.org/api/timezone/Europe/London', {method: 'GET'}).then( r => r.json());
    res.then(realDate => {
      if (new Date(realDate.datetime).getTime() >= deadline.current.getTime()) {
        navigate('/start');
      }
      setNow(new Date(realDate.datetime));
    });
  }, [navigate]);

  const onComplete = () => {
    const res = fetch('http://worldtimeapi.org/api/timezone/Europe/London', {method: 'GET'}).then( r => r.json());
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
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', height: '100vh'}}
    >
      {now ? <Countdown date={deadline.current} onComplete={onComplete}/> : <span>...</span>}
      {isTramposa && <h1>Cheater</h1>}
    </div>
  )
}

export default CountdownPage;