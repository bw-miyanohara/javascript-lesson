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
    console.log(`${x}を${y}で割ったあまりは${result}です。`);
}
remainder(5,3);

///////////////////////////////////////Q10
// xのスコープがローカル変数となっており変数xが使用できる範囲が関数foo内に限定しているためコンソール出力をしようとしても変数を参照することができないから


//以下応用問題
///////////////////////////////////////Q1
let random = Math.floor(Math.random() * (9 + 1));
console.log('random ==>', random);



///////////////////////////////////////Q2-1
function exampleFunc(callbakc){
    
    setTimeout(
        function(){
            console.log('Hello World!');
        },3000
    );
    callbakc();

}
function callExample(){
    console.log('callExampleが実行されました');
}
exampleFunc(callExample);

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

numbers.addNumArray = function (){
        for(let i = 0; i < 100; i++){
            numbers.push(i);
        }
    };
numbers.addNumArray();
console.log(numbers);

///////////////////////////////////////Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i < mixed.length; i++){

    let type = typeof mixed[i];
    let newNum = mixed[i];

    if(type === 'number' && newNum % 2 === 0){
        console.log(newNum,'==> even');
        }else if(type === 'number' && newNum % 2 === 1){
            console.log(newNum,'==> odd');
    }else{
        console.log(newNum, '==> not number');
    }
}