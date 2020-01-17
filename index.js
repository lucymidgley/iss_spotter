const { nextISSTimesForMyLocation } = require('./iss');

const timeConverter = function(unixTimestamp) {
  const fmDate = new Date(unixTimestamp * 1000);
  const year = fmDate.getFullYear();
  const month = fmDate.getMonth();
  const day = fmDate.getDate();
  const hour = fmDate.getHours();
  const min = fmDate.getMinutes();
  const sec = fmDate.getSeconds();
  const time = new Date(Date.UTC(year, month, day, hour, min, sec))
  return time.toUTCString();
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  //success, print out the deets!
  for (const timesObj of passTimes) {
    console.log(`Next pass at ${timeConverter(timesObj.risetime)} for ${timesObj.duration} seconds!`);
  }
});

