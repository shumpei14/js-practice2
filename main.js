'use strict';

const score = 85;

if (score >= 80) {
  console.log('Great!');
} else {
  console.log('OK...!');
}

score >= 80 ? console.log('Great!') : console.log('OK...!');

const score = 60;
const name ='taguch'

if (score >= 50) {
	if (name === 'taguch') {
		console.log('Good job');
	}


&&なおかつ(AND)
||もしくは(or)
!〜ではない(not)

if (score >= 50 && name ==='taguch') {
	console.log('good job');
}


const signal = 'pink';

if (signal === 'red') {
	console.log('stop');
} else if (signal === 'yellow') {
	console.log('coution');
} else if (signal === 'blue') {
	console.log('go');
}


switch (signal) {
case 'red':
	console.log('stop');
	break;
case 'yellow':
	console.log('coution');
	break;
case 'blue':
	console.log('go');
	break;
default:
console.log('wrong signal');
break;
}

for (let i = 1; i <= 10; i++) {
	console.log(`hello ${i}`)
}



let hp = 100;

while (hp > 0) {
	console.log(`${hp} HP left`);
	hp -= 15;
}




for (let i = 1; i <= 10; i++) {
	// 
	// if (i % 3 === 0){
	// 	continue;
	// }
	if (i === 4){
		break;
	}
	console.log(i);
}


function showAd(message = 'ad') {
  console.log('----------');
  console.log(`--- ${message} ---`);
  console.log('----------');
}

showAd('Header Ad');
console.log('Tom is great!');
console.log('Bob is great!');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');




function sum(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
  console.log(a + b + c);
}

// sum(1, 2, 3);
// sum(3, 4, 5);

const total = sum(1, 2, 3) + sum(3, 4, 5); // 18
// console.log(total);


















