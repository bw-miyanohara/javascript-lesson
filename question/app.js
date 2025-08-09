//以下基礎問題
/////////////////////////////////////// Q1
let nickname = 'ごっしー';
let age = 28;
console.log('私のニックネームは' + nickname + 'です。' + '年齢は' + age + 'です。');

///////////////////////////////////////Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[2]}を勉強してみたいです。`);

///////////////////////////////////////Q3
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
};
console.log(user.age);

///////////////////////////////////////Q4
let playerList = [
    {
        name: 'John',
        age: 26,
        favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
        name: 'Bob',
        age: 33,
        favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
        name: 'Michael',
        age: 22,
        favorites: ['Football', 'Smash Bros.'],
    },
];
console.log(playerList[1].favorites[1]);

///////////////////////////////////////Q5
let playerAge = playerList[0].age + playerList[1].age + playerList[2].age;
let ageAverage = playerAge / 3;
console.log(ageAverage);

///////////////////////////////////////Q6
function sayHello(){
    console.log('Hello');
};
sayHello();

const sayWorld  = function(greet){
    return greet;
}
console.log(sayWorld('World'));

///////////////////////////////////////Q7
user.birthday = '2000-09-27';

user.sayHello = function(){
    console.log('Hello');
}
user.sayHello();

///////////////////////////////////////Q8
let calc = {};
let x = 0;
let y = 0;
let result  = 0;

calc.add = function(x,y){
    result = x + y;
    console.log(result);
};
calc.add(3,4);

calc.subtract = function(x,y){
    result = x - y;
    console.log(result);
};
calc.subtract(11,1);

calc.multiply = function(x,y){
    result = x * y;
    console.log(result);
}
calc.multiply(7,7);

calc.divide = function(x,y){
    result = x / y;
    console.log(result);
}
calc.divide(10,2);

///////////////////////////////////////Q9
function remainder(x,y){
    result = x % y;
    return result;
}

console.log('5を3で割ったあまりは' + remainder(5,3) + 'です。');

///////////////////////////////////////Q10
// xのスコープがローカル変数となっており変数xが使用できる範囲が関数foo内に限定しているためコンソール出力をしようとしても変数を参照することができないから


//以下応用問題
///////////////////////////////////////Q1
let random = Math.random();
console.log(`random ==> ${random}`);

///////////////////////////////////////Q2-1
function doFunc(callback){
    console.log('3秒後にHelloと出力');
    callback();
}
doFunc( function(){
    let timeToGreet = function(){
        console.log('Hello World!');
    }
    setTimeout(timeToGreet, 3000);
});

///////////////////////////////////////Q2-2
function printName(firstName, formatter) {
    console.log(formatter(firstName));
}
const addIntro = (name) => '私の名前は' + name + 'です。';
printName('安藤', addIntro);

///////////////////////////////////////Q3
let num = 0;

function getSign(num){
    if(num > 0){
        console.log('num is greater than 0');
    }else if(num < 0){
        console.log('num is less than 0');
    }else{
        console.log('num is 0');
    }
}
getSign(-0.1);

/////////////////////////////////////// Q4
let numbers = [];
let sum = 0;
for(let i = 0; i < 100; i++){
    numbers += i;
}
console.log(numbers);

///////////////////////////////////////Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i < mixed.length; i++){

    let type = typeof mixed[i];
    let newNum = mixed[i];

    if(type === 'number'){
        if(newNum % 2 === 0){
            console.log('even');
        }else if(newNum % 2 === 1){
            console.log('odd');
        }
    }else{
        console.log('not number');
    }
}