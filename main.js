'use strict';

// const score = 85;

// if (score >= 80) {
//   console.log('Great!');
// } else {
//   console.log('OK...!');
// }

// score >= 80 ? console.log('Great!') : console.log('OK...!');

// const score = 60;
// const name ='taguch'

// if (score >= 50) {
// 	if (name === 'taguch') {
// 		console.log('Good job');
// 	}


// &&なおかつ(AND)
// ||もしくは(or)
// !〜ではない(not)

// if (score >= 50 && name ==='taguch') {
// 	console.log('good job');
// }


const signal = 'pink';

// if (signal === 'red') {
// 	console.log('stop');
// } else if (signal === 'yellow') {
// 	console.log('coution');
// } else if (signal === 'blue') {
// 	console.log('go');
// }


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