const reachDestination = (distance, speed) => {
  const time = Math.round((distance / speed) * 2) / 2;
  const string = `I should be there in ${time} hours.`;
  return string;
};

module.exports = reachDestination;
