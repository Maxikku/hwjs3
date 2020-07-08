// -- створити об'єкт (не меньше 5ти властивостей) який описує - 
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу


let obj = {
    dog: "Jack",
    person: 'Max',
    car: 'Mazda',
    house: true,
    book: 'asd'
}

//-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка


let objcts = {
    house: ['big', 'hight', 'skyskreaper'],
    driver: 'Oleg',
    toy: {
        for: 'children',
        style: 'doll'
    },
    table: 'wood',
    bag : 'leather'
}
console.log(objcts);






//Данo массив:
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//статус Андрія
console.log(users[8].status);
//статус Максима
console.log(users[5].status);
console.log(users[10].status);
//iм'я передостаннього об'єкту
console.log(users[9].name);
//ім'я третього об'єкта
console.log(users[3].name);
//вік Олега
console.log(users[6].age);
//вік Олі
console.log(users[3].age);
//вік + ім'я 5го об'єкта
console.log(users[5].age + ' ' + users[5].name);
//вік + сатус Анни
console.log(users[5].age + ' ' + users[5].status);




// // // //Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // // //отримує текст з параграфа з id "content"

let elemContent = document.getElementById('content');
console.log(elemContent.innerText);


// // // //отримує текст з блоку з id "rules"
let elemRules = document.getElementById('rules');
console.log(elemRules.innerText);
// // // //замініть текст параграфа з id 'content' на будь-який інший
let swapText = document.getElementById('content');
swapText.innerHTML = '123';
console.log(swapText);
// // // //замініть текст параграфа з id 'rules' на будь-який інший
let swapR = document.getElementById('rules');
swapR.innerHTML = '123';
console.log(swapR);
// // // //змініть кожному елементу колір фону на червоний
let swapP = document.getElementsByTagName('p');
for (let i = 0; i < swapP.length; i++) {
    swapP[i].style.backgroundColor = 'red';    
}
let swapDiv = document.getElementsByTagName('div');
for (let i = 0; i < swapDiv.length; i++) {
    swapDiv[i].style.backgroundColor = 'red';    
}
let swapUl = document.getElementsByTagName('ul');
for (let i = 0; i < swapUl.length; i++) {
    swapUl[i].style.backgroundColor = 'red';    
}

// // // //змініть кожному елементу колір тексту на синій

let swapColorP = document.getElementsByTagName('p');
for (let i = 0; i < swapColorP.length; i++) {
    swapColorP[i].style.color = 'blue';    
}
let swapColorD = document.getElementsByTagName('div');
for (let i = 0; i < swapColorD.length; i++) {
    swapColorD[i].style.color = 'blue';    
}
let swapColorUl = document.getElementsByTagName('p');
for (let i = 0; i < swapColorUl.length; i++) {
    swapColorUl[i].style.color = 'blue';    
}
// // // отримати весь список класів елемента з id=rules і вивести їх в console.log

let listRules = document.getElementById('rules');
listRules.classList
console.log(listRules.classList);

// // //отримати всі елементи з класом fc_rules
let elemFc = document.getElementsByClassName('fc_rules');
for (let i = 0; i < elemFc.length; i++) {
    console.log(elemFc[i]);
        
}


// // //поміняти колір тексту у всіх елементів fc_rules на червоний

let colorFc = document.getElementsByClassName('fc_rules');


for (let i = 0; i < colorFc.length; i++) {
    colorFc[i].style.color = 'red';
}
console.log(colorFc);


