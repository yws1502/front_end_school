// error 잡기
try {

  alert('try 블록 시작');  // (1) <--

  lalala; // 에러, 변수가 정의되지 않음!

  alert('try 블록 끝(절대 도달하지 않음)');  // (2)

} catch(err) {

  alert(`에러가 발생했습니다!`); // (3) <--

}

// throw => 에러 만들기

let json = '{ "age": 30 }'; // 불완전한 데이터
​
try {
​
  let user = JSON.parse(json); // <-- 에러 없음
​
  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }
​
  alert( user.name );
​
} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: 불완전한 데이터: 이름 없음
}

// finally => 무조건 실행되는 친구(서버에서 무조건 필요)
// 만약 confirm이 True면 Catch 실행 후, finally
// false면 finally만 실행

try {
  alert( 'try 블록 시작' );
  if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}

// 자바스크립트 자체 내장 에러 클래스 Error의 '슈도 코드'
// class Error {
//   constructor(message) {
//     this.message = message;
//     this.name = "Error"; // (name은 내장 에러 클래스마다 다릅니다.)
//     this.stack = <call stack>;  // stack은 표준은 아니지만, 대다수 환경이 지원합니다.
//   }
// }

// 사용자 정의 에러 만들기

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// 사용법
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

// try..catch와 readUser를 함께 사용한 예시

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) { // (*)
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // 알려지지 않은 에러는 재던지기 합니다. (**)
  }
}
