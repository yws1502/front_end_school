// function

/*
1. 재사용성
2. 아키텍처 파악
3. 유지보수
*/

function a() {
    let x = 10;
    console.log(x);
}

function b() {
    let y = 20;
    console.log(y);
}

let k = 10;

function viewk() {
    console.log(k);
}

function changek() {
    // k += 10;
    let k = 20;
    console.log(k);
}

viewk()
changek()
viewk()

// 결국 글로벌 변수가 함수 내에서 변경이 가능하다.

// 함수는 캡슐화 -> 함수 내에서의 값은 독립된다.
// 추상화 -> 운전대는 방향에 대한 추상화 ... 안에 있는 코드를 보지 않고 코드의 아키텍처를 파악할 수 있는 것

// 함수의 기본값 (default of function)
function add(a = 100, b = 200) {
    return a + b;
}

add(10, 20); // 30
add(10); // 210
add(); // 300

function add(a=100, b=200) {
    if (a === 100) {
        return
    }
    return a + b;
}

// 기본값을 사용하기 위해서는
add(undefined, 300);

let hello = () => (console.log("hello"));

hello()


/*
함수 표현식


함수 선언문


*/
console.log(add(10, 20));
// 호이스팅 되어서 위로 올라갑니다.
function add(x, y) {
    return x + y;
}

// 이 친구는 에러가 난다. (not defined error)
console.log(mul(10, 20))
let mul = (a, b) => (a * b);

let arr = [1,2,3,4,5];

let a = arr.map(x => (x*2));

console.log(a);