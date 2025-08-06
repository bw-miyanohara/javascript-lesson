// alert('Hello World!!');

// console.log('Hello World!!');

// console.log('フォルゴレ', 'キャンチョメ');

// let text = 'javascriptの練習';
// text = '鉄のフォルゴレ';
// console.log(text);


// let age = 23;
// console.log(age);

// let testText;
// console.log(testText);

// let string = 'JavaScriptの練習';
// console.log(string);

// let single = '文字列型です';
// let double = '英語だとstringです';
// console.log(single, double);

// let name = 'jony';
// let greet = '私の名は' + name + 'です。';
// console.log(greet);
// // console.log('私の名は' + name + 'です。');

// let template = 'テンプレートリテラル';
// let templateText = `これが${template}です。
// ${template}は改行することも可能です。`;
// console.log(templateText);

// let number = 5;
// number /= 3;
// let increment = 1;
// let decrement = 2;
// increment++;
// decrement--;
// console.log(number, increment, decrement);

// let bg = 25;
// let sm = 5;
// let calc = bg % sm;
// console.log(calc);

// let strBg = '25';
// let strSm = '5';
// console.log(strBg + strSm);

// let names = [
// 'jony', 'james', 'xin', 'yamada'
// ];
// console.log(names, names.length);

// for(let i = 0; i < names.length; i++){
//     let namesTemplate = names[i];
//     console.log(`names[${i}]=>${namesTemplate}`);
// };

// let emptyNames = [];

// emptyNames[0] = '志喜屋';
// emptyNames[1] = '宮之原';
// emptyNames[2] = '一ノ瀬';
// emptyNames[3] = '城之内';
// console.log(emptyNames, emptyNames.length);

// let Shikiya = {
//     name: '志喜屋',
//     age: 20,
//     bloodType: 'A',
//     favorite: 'ramen',
// };
// console.log(Shikiya.age, Shikiya.bloodType);

// let Miyanohara = {};

// Miyanohara.name = '宮之原';
// Miyanohara.age = 22;
// Miyanohara.bloodType = 'A';
// Miyanohara.favorite = 'Slayer';
// console.log(Miyanohara);

// // let radius = 2;
// // let circle = radius * radius * 3.14;
// // console.log(`円の面積は${circle}です。`);

// function getarea(){
//     let radius = 2;
//     let circle = radius * radius * 3.14;
//     // console.log(`円の面積は${circle}です。`);
// }

// function getarea2(radius){
//     let circle = radius * radius * 3.14;
//     // console.log(`円の面積は${circle}となっています。`);
//     return circle;
// }

// console.log('円の面積は' + getarea2(4) + 'です。');
// console.log('円の面積はなんと' + getarea2(8) + 'でございます。');

// // getarea();
// // getarea2(10);

// function divide(x,y){
//     let result = x / y;
//     if (y === 0){
//         return;
//     }
//     return result;
// }
// console.log(`x / y = ${divide(10, 5)}`);

// function doFunc(callback){
//     console.log('doFuncが呼び出されました')
//     callback();
// }

// function output(){
//     console.log('コールバック関数が呼び出されました。');
// }

// doFunc(output);

// // doFunc(function (){
// //     console.log('コールバック関数が呼び出されました');
// // });


// let John = {
//     name: 'John',
//     age: 26,
//     bloodType: 'A',
//     favorite: 'card',
//     greet: function (){
//         console.log('Hello!!');
//     }
// };
// John.greet();



let myAge = 60;
if (myAge >= 35) {
    console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
    console.log('お酒が飲めます');
} else if (myAge >= 18) {
    console.log('選挙権があります');
}

let loto = 6;

if (loto === 7 || loto === 8) {
    console.log('当たり');
} else {
    console.log('ハズレ');
}

let numVal = 7;
let strVal = 'text'
console.log(numVal === 7 && strVal === 'text'); 

let errMsg = '';
// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');

let number = 4;
let text = number % 2 === 0 ? '偶数です' : '奇数です';
console.log(text);

if (1) {
    console.log('hoge');
}

if (0) {
    console.log('piyo');
}

let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    console.log(sum);
}
console.log(sum);