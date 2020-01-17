const nextISSTimesForMyLocation  = require('./iss_promised');



const timeConverter = function(unixTimestamp) {
  const fmDate = new Date(unixTimestamp * 1000);
  const year = fmDate.getFullYear();
  const month = fmDate.getMonth();
  const day = fmDate.getDate();
  const hour = fmDate.getHours();
  const min = fmDate.getMinutes();
  const sec = fmDate.getSeconds();
  const time = new Date(Date.UTC(year, month, day, hour, min, sec));
  return time.toUTCString();
};
const printPassTimes = function(passTimes) {
  for (const timesObj of passTimes) {
    console.log(`Next pass at ${timeConverter(timesObj.risetime)} for ${timesObj.duration} seconds!`);
  }
};

nextISSTimesForMyLocation().then((passTimes) => {
  printPassTimes(passTimes);
}).catch((error) => {
  console.log("It didn't work: ", error.message);
});