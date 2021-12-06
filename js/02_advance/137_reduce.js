let arr = [1, 2, 3, 4, 5];

// sum == 누적되는 값 -> 뒤에서 계산된 값은 누적되는 값에 들어감
// --> 보통 accumulator라고 많이 부름
// current == 배열의 첫 번째 부터 쭉쭉
let result = arr.reduce((sum,  current) => sum + current);

console.log(result); // 15

// reduce는 옛 문법이다 대체할 수 있는 용법이 많이 나왔기는 하지만 전에 짜여진 코드를 지면할 수 도 있기에 무시하지 말자

// 대체용법
let accumulator = 0;
[1, 2, 3, 4, 5].forEach((i) => accumulator += i);

console.log(accumulator);

let N = 5;
let array = [3, 1, 4, 3, 2];

array.sort((a, b) => a - b);

let temp = 0;
let result = array.map((value) => temp += value);

console.log(result);

//////

let N = 5;
let array = [3, 1, 4, 3, 2];

array.sort((a, b) => a - b);

let result = array.reduce((accumulator, value) => accumulator + value);

console.log(result);

//////////////

let N = 5;
let array = [3, 1, 4, 3, 2];

array.sort((a, b) => a - b);

let temp = 0;
let result = array.map((value) => temp += value);

let answer = 0;
result.forEach((value) => answer += value);

console.log(answer);