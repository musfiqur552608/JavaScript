/*console.log('Hello World')
console.error('This is an error')
console.warn('This is a warning')*/

/*let age = 30;

console.log(age)*/

//String, Number, Boolean, Null, Undefined

/*const name = 'Musfiq'
const age = 22
const rating = 4.5
const isCool = true
const x = null;
const y = undefined;
let z;

console.log(typeof name)
console.log(typeof age)
console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)*/

//Concatanation
/*const name = 'Musfiq'
const age = 30
console.log('My name is '+name + ' and I am '+age)
//Template String
const hello = `My name is ${name} and I am ${age}`
console.log(hello)*/

/*const s = 'Hello World'

console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0,5))
console.log(s.substring(0,5).toUpperCase)
console.log(s.split(''))
console.log(s.split(', '))*/


//array
/*const number = new Array(1,2,3,4,5);
console.log(number);

const fruits = ['apples', 'oranges', 'pears', 10, true];
fruits.push('mangos');
fruits.pop();

console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));

console.log(fruits);*/

/*const person = {
    firstName: 'Musfiqur',
    lastName: 'Rahman',
    age: 22,
    hobbies: ['music', 'movies', 'sports'],
    address:{
        street: 'D. Mokbul Hossen College Road',
        city: 'Dhaka',
        state: 'Dhaka'
    }
}

console.log(person.firstName, person.lastName, person.address.city);


const {firstName, lastName, address:{city}} = person;
console.log(city);

person.email = 'musfiq552608@gmail.com';
console.log(person);*/


const todos = [

    {
        id: 1,
        text: 'Web Development',
        isCompleted: true
    },

    {
        id:2,
        text: 'App Development',
        isCompleted: false
    },

    {
        id: 3,
        text: 'Sleep',
        isCompleted: false
    }


];

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//for

/*for(let i=0; i<10; i++){
    console.log(i);
}

//while

let i=0
while(i<10){
    console.log(i);
    i++;
}*/

for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){

    console.log(todo.text);
}

//foreach, map, filter

todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);


const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);
