// 콜백 지옥을 해결하기 위해 promise가 나왔다.

// promise는 비동기를 위한 친구고 서버에서 값을 받아오면 순차적으로 실행한다.

// catch는 에러는 잡는 친구
// finally는 무조건 실행



// 모던자바스크립트 예제
// resolve -> 성공했을 때
// reject -> 실패했을 때
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("끝남!"), 1000);
});
console.log('hello world');
console.log(promise);

//

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("끝남!"), 3000);
});

console.log('hello world');
promise.then(v => console.log(v));
console.log('hello world2');
/*
hello world
hello world2
끝남!
*/

// 형태 기억하기 
// new Promise((resolve, reject) => {...code...})
//   .then(...code...)
//   .then(...code...)
//   .finally(...code...)
//   .catch(...code...); // <-- .catch에서 에러 객체를 다룰 수 있음

// 모던자바스크립트 예제 <- 모범 예제
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});

// 모던자바스크립트 예제 (살짝 수정)
// reject가 실행되면 catch로 간다
new Promise(function(resolve, reject) {

  setTimeout(() => reject('error'), 1000);

}).then(function(result) {

  alert(result + ' : 잘 수행!');
  return result + 'one';

}).catch(function(result) {

  alert(result + ' : 애러 발생!'); // 1
  return result + 'two';

}).then(function(result) {

  alert(result + ' : 잘 수행!'); // 2
  return result + 'three';

});

// 아래있는 친구들은 안좋은 예제

let p = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 10000); // (*)
});
console.log('hello world');

let p2 = p.then(function(result) { // (**)
  alert(result); // 1
  return result * 2;
});
console.log('hello world2');

let p3 = p2.then(function(result) { // (***)
  alert(result); // 2
  return result * 2;
});
console.log('hello world3');

let p4 = p3.then(function(result) {
  alert(result); // 4
  return result * 2;
});

// 이런 예제도 있음
// 모던자바스크립트 예제
// 다음 예제는 프라미스 체이닝이 아님!
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

// 정리 전


loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
          }
        });

      }
    })
  }
});

// 정리 후
// 이 부분에서도 에러 핸들러를 만들어줘야한다.
loadScript("/article/promise-chaining/one.js")
.then(script => loadScript("/article/promise-chaining/two.js"))
.then(script => loadScript("/article/promise-chaining/three.js"))
.then(script => {
  // 스크립트를 정상적으로 불러왔기 때문에 스크립트 내의 함수를 호출할 수 있습니다.
  one();
  two();
  three();
});