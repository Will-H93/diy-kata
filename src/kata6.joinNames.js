const joinNames = namesObj => {
  const string = namesObj.map(obj => obj.name).join(", ").replace(/,(?!.*,)/, " &");
  return string;
};

module.exports = joinNames;
