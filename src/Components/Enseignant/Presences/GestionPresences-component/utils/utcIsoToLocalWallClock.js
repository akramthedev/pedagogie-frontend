function utcIsoToLocalWallClock(isoString) {
  const d = new Date(isoString);
  return new Date(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate(),
    d.getUTCHours(),
    d.getUTCMinutes(),
    d.getUTCSeconds(),
    d.getUTCMilliseconds()
  );
}



export default utcIsoToLocalWallClock;