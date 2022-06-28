let realtime: Date;

async function getRealtime() {
  if (realtime) {
    return realtime;
  } else {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Europe/London', {method: 'GET'});
    const date = await res.json();
    return new Date(date.datetime);
  }
}

export default getRealtime;
