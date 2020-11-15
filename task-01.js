console.log('Task-01');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
// console.log(user);

user.mood = 'happy'; // добавляет поле mood со значением 'happy'
// user['full time']= true;
// console.log(user);

user.hobby = 'skydiving'; // заменяет значение hobby на 'skydiving'
// console.log(user);

user.premium = false; // заменяет значение premium на false
// console.log(user);


// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const keys = Object.keys(user);
 for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

// const entries = Object.entries(user); 

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }
