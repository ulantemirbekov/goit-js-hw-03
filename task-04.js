const countTotalSalary = function (employees) {

  let totalSalary = 0;

  for (const key in employees) {
    totalSalary += employees[key];
  }
  return totalSalary;
};
