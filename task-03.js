const findBestEmployee = function (employees) {

  let max = 0;
  let nameOfBest;

  for (const key in employees) {
    
    if (employees[key] > max) {
      max = employees[key];
      nameOfBest = key;
    }      
  }
  return nameOfBest;
};
