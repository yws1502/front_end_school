/*
재귀함수

1. 종료조건 체크

2. 반복문으로 구현할 수 있는 것은 재귀함수로 모두 구현 가능,
재귀함수로 구현 가능한 것은 반복문으로 대부분 구현 가능합니다.

*/

function factorial(n) {
    if (n <= 1) {
        return n
    }
    return n * factorial(n-1)
}

function reverse(text) {
    text += '' // 형변환
    if (text.length <= 1) {
        return text;
    }
    return reverse(text.slice(1)) + text[0];
}

function fib(n) {
    if (n <= 2) {
        return n
    }
    return fib(n-1) +  fib(n-2)
}

// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = []
function fibo(n){
    if (n in fibo_cache) {
        return fibo_cache[n]
    }
    fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
    return fibo_cache[n]
}

// javascript에서의 in 연산자는 앞에 값이 array안에 있는 것이 아니라 array의 index가 있는지 물어보는 것이다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in

/*
// 즉시 실행 함수 -> 익명 즉시 실행 함수
1. 즉시 실행 하고 외부에서 컨트롤 할 필요가 없는 함수
2. function scope, 메모리 효율
*/

(function () {
    var a = 1;
    var b = 2;
    return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
    var a = 3;
    var b = 5;
    return a * b;
}());

foo(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리
