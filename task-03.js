console.log('Task-03');
console.log('-------');

const findBestEmployee = function (employees) {

  const name = Object.keys(employees);
      
  const works = Object.values(employees);
     
  const maxWorks = Math.max(...works);
  
  const indexOfMax = works.indexOf(maxWorks);
    
  const nameOfBest = name[indexOfMax];
  
  return nameOfBest;  


//============================================================================
    // for (const value of values) {
    //     const max = Math.max(...values);
    //     console.log(max);
    // }
  
  
  // const entries = Object.entries(employees);
  // console.log(entries);
    
  //   for (const entry of entries) {
  //       const name = entry[0];
  //       const numberOfTasks = entry[1];
             // console.log(name);
             // console.log(numberOfTasks);
             // console.log(`${name}: ${numberOfTasks}`);
        
  //  const maxNumberOfTasks = Math.max(...numberOfTasks);
  //  console.log(maxNumberOfTasks);
  // }
//============================================================================    
};

// Вызовы функции для проверки работоспособности твоей реализации.
 
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux


// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
// и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".