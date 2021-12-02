// 배열 (array)

let fruits1 = new Array('사과', '수박', '복숭아', '딸기', '바나나');
let fruits2 = new Array(5);
let fruits3 = ['사과', '수박', '복숭아', '딸기', '바나나'];

console.log(fruits1);
fruits1[0] = '한라봉';

console.log(fruits1)

// 여기서 확인해야할 것! string과 array의 차이!
// string에서는 index로 수정이 불가하다
// array에서는 index로 수정이 가능하다.

let totalScore = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]]
];

let matrix  = [[1,2,3], [4,5,6], [7,8,9]];

matrix[0] + matrix[0]; // string으로 형변환

matrix[0] * 2; // NaN

matrix[0] - matrix[0]; // NaN

matrix[0] / matrix[0]; // NaN

matrix[0].toString(); //'1,2,3'

let sample = [1, 2, 3];

for (let i in sample) {
    sample[i] *= 2;
}
console.log(sample);


// 문제
let totalScore = [
    // 1반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
];

let sum = 0;
for (let scores of totalScore[0]) {
    let temp = 0;
    for (let score of scores) {
        temp += score;
    }
    sum += temp;
}

console.log(sum/totalScore[0].length);

let a = [1,2,3,[4,5]];

console.log(a.flat());

console.log(a.forEach(x => (x+2)));

/*
map과 fillter
*/

let array = [1, 4, 9, 16];
let 값1 = array.map(x => x * 2);

array.map(Math.sqrt).map(x=>x**3)

let data = [
    {
        class: 1,
        number: 1,
        name: "woosang",
        score: 55
    },
    {
        class: 1,
        number: 2,
        name: "other",
        score: 50
    },
    {
        class: 1,
        number: 3,
        name: "namhee",
        score: 55
    },
    {
        class: 1,
        number: 4,
        name: "girdong",
        score: 50
    },
]

let sum = 0;

// forEach는 반환되는 값이 없다.
data.map(x => (x.score)).forEach(y => (sum += y))


let data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let newData = data.map(x => x.map(n => n*2));

// javascript에서는 call by value 밖에 없다
// 또한 array, object는 function안 에서 값을 인수로 받은 값을 바꿀 수 있다.
// 하지만 단순 변수일 경우는 값이 바뀌지 않는다 따라서 파라미터로 들어온 값이 array와 object인 경우 주의하자!

let x = [10, 20, 30, 40];

function test(a) {
    a[0] = 1000;
}

test(x);
console.log(x) // [1000, 20, 30, 40]


let x = 10;

function test(a) {
    a = 1000;
}

test(x);
console.log(x) // 10


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);