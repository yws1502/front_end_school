async function f() {
  return 100;
}

f().then(alert); // 100

// 모던 자바스크립트 예제 (살짝 수정)
async function f() {
  return 100;
}

f().then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});

// 모던 자바스크립트 예제
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f();

// 모던 자바스크립트 예제 (살짝 수정)
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 3000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
    return 100
}

f().then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});

function one(){ two(); }
function two(){ three(); }
function three(){ console.log('end'); }

console.log(1);
setTimeout(function(){
    console.log(2);
}, 1000) // setTimeout(()=> console.log(2), 1000)
console.log(3);

// promise의 경우 백그라운드 -> 테스크 큐 -> 호출 스택 순으로 실행한다.

// 호출 스텍이 끝나게 되면 테스크 큐에 있는 친구들을 불러온다.