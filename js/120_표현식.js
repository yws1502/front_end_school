// String
let s = 'abcdefABCDEF';

console.log(s);

// 문자열의 길이를 반환해준다.
s.length;

// 입력값으로 넣어준 것을 문자열에서 찾아 첫번째 index 반환
s.indexOf("cde"); // 2
s.search("cde"); // 2

// 없는 값을 조회하면 -1을 반한다.
s.indexOf("zz"); // -1
s.search("czz"); // -1

// javascript search VS indexOf의 차이점
/*
indexOf는 시작 인덱스를 설정해줄 수 있다.
s.indexOf('C', 3)
search는 정규표현식을 사용할 수 있다.
s.search() <- 이 친구는 차후에
*/

// slicing start index와 last index를 넣어주기!
s.slice(0, 3);
s.slice(1, 3);
s.slice(0, 3);

let aIdx = s.indexOf("A");
s.slice(aIdx, aIdx+1); // 'A'
s.slice(aIdx+1, aIdx+2); // 'B'
s.slice(aIdx+2, aIdx+3); // "C"

// substr 위치 설정 후 이후에 원하는 만큼 가져올래!
s.substr(6, 3); // 'ABC'

// sybstring
// slice이랑 같은
s.substring(6, 11); // 'ABCDE'

// 두번째 인자를 생략하면 끝까지
s.substring(6); //'ABCDEF'

// substring과 slice의 차이점
// let s = 'abcdefABCDEF';
s.substring(2, -2); // 'ab' 이 친구는 -를 붙이면 뒤쪽에서 찾음
s.slice(2, -2); // 'cdefABCD' 이 친구는 -를 붙이면 0으로 판단한다.

// replace에서도 정규표현식이 가능하지만! 정규표현식은 뒤에서 배웁니다!
s.replace('ABC', 'woosang') // ABC를 woosang으로 바꾼다.!
