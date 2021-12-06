let today = new Date('2021/12/5/12:00');// undefined
console.log(today); // Sun Dec 05 2021 12:00:00 GMT+0900 (한국 표준시)
today.toString(); //'Sun Dec 05 2021 12:00:00 GMT+0900 (한국 표준시)'

today.toLocaleString(); // '2021. 12. 5. 오후 12:00:00'
today.toLocaleString('ko-KR'); // '2021. 12. 5. 오후 12:00:00'
today.toLocaleString('ja-JP'); // '2021/12/5 12:00:00'
today.toLocaleString('en-US'); // '12/5/2021, 12:00:00 PM'

today.toISOString(); // '2021-12-05T03:00:00.000Z'
today.toISOString().split('-'); // ['2021', '12', '05T03:00:00.000Z']
today.toISOString().slice(0, 10); //'2021-12-05'
today.toISOString().slice(0, 10).split('-'); //['2021', '12', '05']
today.toISOString().split('-').map(v => parseInt(v)); // [2021, 12, 5]

// 올림
Math.ceil(9.5); // 10
Math.ceil(9.2); // 10
Math.ceil(-9.2); // 9

// 내림
Math.floor(0.3); // 0
Math.floor(0.9); // 0
Math.floor(-9.2); // -10

// 반올림
Math.round(3.5); // 4
Math.round(3.6); // 4
Math.round(3.4); // 3

// 최대, 최소값
Math.max(); // -Infinity
Math.mix(); // Infinity

Math.max(1, 2, 3, 1); // 3
Math.max([1, 2, 3, 1]); // NaN
Math.max(...[1, 2, 3, 1]); // 3

Math.max(1, 2, 3, 1); // 1
Math.max([1, 2, 3, 1]); // NaN
Math.max(...[1, 2, 3, 1]); // 1
