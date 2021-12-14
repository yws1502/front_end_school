// 객체지향

// 1. 모듈 패턴
function person() {
  let age = 35;

  return {
    getAge: function () {return age},
    setAge: function (data) {age = data},
  }
}

const person = person();

console.log(person.getAge());


// 2. 사용자 정의 타입 패턴
// 값을 은닉하지 못한다...
function PersonType() {
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age;
}

PersonType.prototype.setAge = function (data) {
  this.age = data;
}

const instancePerson = new PersonType;

// new라는 생성자는 this를 인스턴스가 가르키는 것을 알려준다!
console.log(instancePerson.getAge());
instancePerson.setAge(26);
console.log(instancePerson.getAge());

console.log(instancePerson.age);
console.log(instancePerson.age = 100);
console.log(instancePerson.age);


// 위의 두가지를 합치자!
// 3. 모듈 + 사용자 정의 타입 -> 클로저!
function PersonType2() {
  let age = 25;

  function innerPersonType() { }

  innerPersonType.prototype.getAge = function() {
    return age;
  }

  return innerPersonType;
}

const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());


// IIFE 패턴으로 만들어보기 -> 즉시실행 함수
// 위와 같이 폐쇄된 공간을 만들었기 때문에 안에 있는 함수를 사용하기 위해서는 return을 통해 밖으로 빼야한다.
// 때문에 personType2의 리턴값을 뺀 후, 뺴낸 리턴값을 생성자 함수를 통해 빼야되는 수고가 든다.
// 그래서 즉시 실행함수(IIFE)를 활용해 위의 2가지 과정을 1가지 과정으로 줄일 수 있다.
const PersonType3 = (function() {
  let age = 25;

  function innerPersonType() { }

  innerPersonType.prototype.getAge = function() {
    return age;
  }

  return innerPersonType;
})();

const personType3 = new PersonType3();
console.log(personType3.getAge());
