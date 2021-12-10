// 객체지향

// 1. 모듈 패턴
function Person() {
  let age = 35;

  return {
    getAge: function () {return age},
    setAge: function (data) {age = data},
  }
}

const person = Person();

console.log(person.getAge());

// 2. 사용자 정의 타입 패턴
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

// console.log(instancePerson.getAge());
// instancePerson.setAge(26);
// console.log(instancePerson.getAge());

console.log(instancePerson.age);
console.log(instancePerson.age = 26);
console.log(instancePerson.age);