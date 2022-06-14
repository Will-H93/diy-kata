const getEmployerRole = (employeeName, employees) => {
  const find = employees.find(staff => staff.name === employeeName);
  const jobTitle = find.role;
  return jobTitle;
};

module.exports = getEmployerRole;
