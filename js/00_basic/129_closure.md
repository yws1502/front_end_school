# 스코프

- 일단 스코프에 대한 개념을 알고 가면 좋다
    - 전역 스코프
    - 함수 스코프
    - ~~블록 스코프(let, const가 나와서 새로 나온 개념) ← 일단 지금은 무시하자~~

```jsx
// 어디서든 접근할 수 있다. -> 전역
var myVal = 'hohohho';

// 만약 myVal2를 밖에서 찍으면?
console.log(myVal2) // not defined error 발생

function myFunc() {
	// 이 친구는 지역
	var myVal2 = 'hehehe';
}
```

### 스코프의 특징

```jsx
let valGlobal = "hello";

function myFunction() {
	var val1  = "hello";
	var val2 = valGlobal;

	let content = {
		getVal: function(){return val1};
	}
	return ret
}
```

- **전역 변수**는 **지역 변수**에서 사용이 가능하지만 **지역 변수**는 **전역 변수**에서 사용이 불가 하다.

## 이제 클로져(closure)에 대해 알아보자

- 클로져는 폐쇄라는 뜻 → 접근할 수 없는 공간
- 함수를 통해 폐쇄된 공간을 만들 수 있다.

```jsx
function myFunction() {
	// 함수 안의 영역은 폐쇄되어있다. -> 따라서 클로져 공간
	var val1 = "hello";
}

function myFunction() {
	var val1 = "hello";

	// 이렇게도 할 수 있다.
	return val1
}

// 하지만 return을 해주지 않는 한 val1을 사용할 수 없다.

// 여기서 정의를 내릴 수 있는 것은 함수 안의 공간이 클로져 공간이다.(클로져는 함수 안에 존재한다.)

function myFunction() {
	var val1 = "hello";

	return { 
		getVal1: function() {return val1}
	}
}

let result = myFunction(); // undefined
result; // {getVal1: f}

result.getVal1(); // hello

// my style
function myFunction() {
	var val1 = "hello";
	
	content = {
		getVal1: function() {return val1},
	}
	return content
}

let result = myFunction(); // undefined
result.getVal1(); // hello
```

- 정리하자면 클로져는 테크닉 → 폐쇄된 공간의 데이터에 접근하기 위한 기술이다.
    - css에서 부모를 타고 들어가서 클래스에 접근하는 개념이랑 비슷하다고 생각하면 좋다!
    - 중복 해서 적용하는 것을 막기 위해!