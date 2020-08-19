function timeUTC(zone) {
  const t = new Date();
  const rawDate = t.getUTCHours();
  const calcDate = rawDate + zone / 3600;
  const tUtc = `${calcDate}:${t.getUTCMinutes()}`;
  return tUtc;
}

function dateToday() {
  const day = new Date();
  const today = day.toDateString().split(' ');
  const actuDay = `${today[0]}, ${today[2]} ${today[1]}`;
  return actuDay;
}

export { timeUTC, dateToday };