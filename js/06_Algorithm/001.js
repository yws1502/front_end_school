// 플랫폼에 익숙해져야 합니다. 프로그래머스, 구름EDU
//   - 사용 가능 라이브러리는 미리 AnalyserNode
// 언어 선택 (속도 : c++, 풀이 : python)
// 코드 스네펫(트리, 검색, 순열, 조합, 최단경로(ex. 다익스트라)), Cheat sheet와 A4용지로 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두세요!

// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법
Array(10);
let x = Array(10);
x[2] = undefined;
x[3] = null;
x
// [비어 있음 x 2, undefined, null, 비어 있음 x 6]

x.length = 20;
x
// [비어 있음 x 2, undefined, null, 비어 있음 x 16]

Array(10).fill(0);
Array(10).fill(10);
Array(100).fill(1).map((value, idx) => value+idx);

'.'.repeat(9).split('.');
// (10) ['', '', '', '', '', '', '', '', '', '']

Array.from('abc');
// (3) ['a', 'b', 'c']

Array.from('a'.repeat(10));
// (10) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']

Array(100).fill(1).map((value, idx) => value + idx)

Array(100).fill(1).map((value, idx) => value + idx) + ''

(Array(100).fill(1).map((value, idx) => value + idx) + '').split('8')

//https://codingdojang.com/scode/393?answer_mode=hide

(Array(100).fill(1).map((value, idx) => value + idx) + '').split('8').length - 1
(Array(100).fill(1).map((value, idx) => value + idx) + '').split(/8/g).length - 1

///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.
let s = [1, 3, 4, 8, 13, 17, 20];
let minValue = Infinity;
let minValue = Number.MAX_SAFE_INTEGER;
let answer;

for (let i = 1; i < s.length; i++) {
  let temp = s[i] - s[i-1];
  if (temp < minValue) {
    answer = [s[i-1], s[i]];
    minValue = temp;
  }
}

console.log(minValue);
console.log(answer);

// other method
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();

for (let i = 1; i < s.length; i++) {
  arr.push(s[i] - s[i-1]);
}

// let result = arr.indexOf(Math.min.apply(null, arr));
let result = arr.indexOf(Math.min(...arr));

console.log(s[result], s[result+1]);
console.log(Math.min(...arr));

// other method
let s = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index) => [value, b[index]])
// zip(s.slice(), s.slice(1)).slice(0, -1);

let pairs = zip(s.slice(0, s.length-1), s.slice(1));

// -1 순서 유지
// 1 순서 바꿈
// 오름차순 정렬 :
//    뒤에 값이 더 크면 순서 유지
//    뒤에 값이 작으면 순서 바꿈

function compare(a, b) {
  if (a[1] - a[0] > b[1] - b[0]) {
    // return -1; // 내림차순
    return 1; // 오름차순
  } 
  if (a[1] - a[0] < b[1] - b[0]) {
    // return 1; // 내림차순
    return -1; // 오름차순
  }
  return 0;
}

pairs.sort(compare);


// 몸풀기 끝 //

// 목차 (기본 자료구조 및 알고리즘)
// 1. 스택과 큐
class Stack {
  constructor() {
    this.array = [];
  }

  push(data) {
    this.array.push(data);
  }

  pop(index = this.array.length-1) {
    // index가 입력이 안되었을 때
    if (index === this.array.length-1) {
      return this.array.pop();
    }
    // index가 입력 되었었을 때
    let result = this.array.splice(index, 1)
    return result;

    // let result = this.array[index];
    // this.array = [...this.array.slice(0, index), ...this.array.slice(index+1)];
    // return result
  }

  empty() {
    if (this.array.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    try {
      return this.array[this.array.length - 1];
    } catch(error) {
      return undefined;
    }

  }

  bottom() {
    try {
      return this.array[0];
    } catch(error) {
      return undefined;
    }
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.pop(1);
console.log(s); // [10, 20]

// 2. 연결리스트(linked list)
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/linked_list
// 알고리즘 시각화 : https:/visualgo.net

const linkedList = {
  head: {
    value: 10,
    next: {
      value: 50,
      next: {
        value: 60,
        next: {
          value: 70,
          next: {
            value: 80,
            next: null
          }
        }
      }
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.count = 0;
  }

  length() {
    return this.count;
  }

  append(data) {
    let newNode = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = newNode;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = newNode;
    this.count += 1;
  }
}

// console
list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(10);
list.append(20);
list.append(30);
list.length();


////////
// advance
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.count = 0;
  }

  get fullData() {
    // return "hello world";
    let curr = this.head;
    curr = curr.next;

    let ret = '';
    for (let i=0; i < this.count; i++) {
      ret += `${curr.data},`;
      curr = curr.next;
    }
    return JSON.parse(`[${ret.slice(0, -2)}]`)
  }

  length() {
    return this.count;
  }

  append(data) {
    let newNode = new Node(data);
    // 마지막 값(null)은 새로운 노드가 됨
    this.tail.next = newNode;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = newNode;
    this.count += 1;
  }

  toString() {
    // return "hello world";
    let curr = this.head;
    curr = curr.next;

    let ret = '';
    for (let i=0; i < this.count; i++) {
      ret += `${curr.data},`;
      curr = curr.next;
    }
    return ret.slice(0, -1);
  }
  
  insert(index, data) {
    // return "hello world";
    let curr = this.head;
    curr = curr.next;

    let ret = '';
    for (let i=0; i < index-1; i++) {
      curr = curr.next;
    }
    let newNode = new Node(data);
    newNode.next = curr.next;
    curr.next = newNode;

    this.count += 1;
  }
}

// console
list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(10);
list.append(20);
list.append(30);
list.length();
console.log(list.toString());
console.log(list.fullData);
list.insert(2, 100);
console.log(list.fullData);

// 3. 정렬

// 3.1 선택 정렬
// 배열에서 최솟값을 찾아 새로운 배열에 넣어주는 과정을 반복한다.
let inputValue = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let sortedList = [];

// let lenValue = inputValue.length;

// for (let i = 0; i < lenValue; i++) {
//   let minValue = Math.min(...inputValue);
//   sortedList.push(minValue);
//   inputValue.splice(inputValue.indexOf(minValue), 1);
// }

while (!!inputValue.length) {
  let minValue = Math.min(...inputValue);
  sortedList.push(minValue);
  inputValue.splice(inputValue.indexOf(minValue), 1);
}

console.log(sortedList);

/////
// 3.2 삽입 정렬
// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감!, O(n**2))
// let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
// let 후 = [];

// let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
// let 후 = [199];

// let 전 = [33, 12, 32, 64, 72, 222, 233];
// let 후 = [22, 199];

// let 전 = [12, 32, 64, 72, 222, 233];
// let 후 = [22, 33, 199];

// let 전 = [32, 64, 72, 222, 233];
// let 후 = [12, 22, 33, 199];

let inputValue = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let sortedList = [];
let lenList = inputValue.length;

function insertIndex(sortedList, value) {
  // for (let i = 0; i < sortedList.length; i++) {
  for (let i in sortedList) {
    if (value < sortedList[i]) {
      return i;
    }
  }
  return sortedList.length;
}

for (let i = 0; i < lenList; i++) {
  getValue = inputValue.shift(); // 배열의 앞에 값 빼오기
  index = insertIndex(sortedList, getValue);
  sortedList.splice(index, 0, getValue);
}

console.log(sortedList);

// 좀 더 어렵게
function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let value = arr.shift();
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));

////
// 3.3 병합 정렬
// (Worst와 Best  모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음)
// // 분할(이해를 돕기 위해 8개로 조정)
// [5, 10, 66, 77], [54, 32, 11, 15]
// [5, 10], [66, 77], [54, 32], [11, 15]
// [5], [10], [66], [77], [54], [32], [11], [15]

// //정복(0번째끼리 비교!)
// [5, 10], [66, 77], [32, 54], [11, 15]
// [5, 10, 66, 77], [11, 15, 32, 54]
// [5, 10, 11, 15, 32, 54, 66, 77]

let inputValue = [5, 10, 66, 77, 54, 32, 11, 15];

function mergeSort(inputList) {
  let listLen = inputList.length;
  let result = [];

  // 재귀를 멈춰주기 위한 return
  if (listLen <= 1) {
    return inputList;
  }

  let mid = parseInt(listLen / 2);
  let group1 = mergeSort(inputList.slice(0, mid));
  let group2 = mergeSort(inputList.slice(mid));

  while (group1.length && group2.length) {
    if (group1[0] < group2[0]) {
      result.push(group1.shift());
    } else {
      result.push(group2.shift());
    }
  }

  while (group1.length) {
    result.push(group1.shift());
  }
  while (group2.length) {
    result.push(group2.shift());
  }

  return result;
}

console.log(mergeSort(inputValue));

/////
/*
3.4 퀵 정렬
(best - O(nlog2n), worst - O(n**2))
피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음
*/
[66, 77, 54, 32, 10, 5, 11, 15];

//피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

//피봇값 : 54(66과 77은 값이 한 개이기 때문에 더이상 재귀로 호출되지 않음.)
[32, 10, 5, 11, 15], [54] + [66] + [77]

//피봇값 : 32
[10, 5, 11, 15], [32] + [54] + [66] + [77]

//피봇값 : 10 
[5] + [10], [11, 15] + [32] + [54] + [66] + [77]

//피봇값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

let inputValue = [66, 77, 54, 32, 10, 5, 11, 15];

function quickSort(inputList) {
  let listLen = inputList.length;
  
  // 재귀를 멈춰주기 위한 return
  if (listLen <= 1) {
    return inputList;
  }
  
  const pivot = [inputList.shift()]; // 기준점
  const group1 = []; // pivot보다 작은 친구들
  const group2 = []; // pivot보다 큰 친구들

  for (let i in inputList) {
    if (inputList[i] < pivot) {
      group1.push(inputList[i]);
    } else {
      group2.push(inputList[i]);
    }
  }

  console.log("그룹1 :", ...group1, "\n", "그룹2 :", ...group2, "\n", "피봇 :", ...pivot);

  return quickSort(group1).concat(pivot, quickSort(group2));
}

console.log(quickSort(inputValue));


// 4. 페이지 교체 알고리즘
// 페이징 기법으로 메모리를 관리하는 운영체제에서, 페이지 부재가 발생하여 새로운 페이지를 할당하기 위해 현재 할당된 페이지 중 어느 것과 교체할지를 결정하는 방법이다. 이 알고리즘이 사용되는 시기는 페이지 부재가 발생해 새로운 페이지를 적재 해야하나 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용

// LRU(least-recently-used)
// 캐쉬가 다찼을 때 새로운 데이터가 들어오면 배열에 앞에 있는 친구를 빼고 새로운 데이터를 뒤에 넣는다.
// 캐쉬가 다찼는데 새로운 데이터가 들어왔고 새로운 데이터가 캐쉬에 있으면 캐쉬에 있는 동일한 데이터를 빼고 맨 뒤에 넣어준다.
["바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리"]
[바나나]
[바나나, 체리]
[바나나, 체리, 한라봉]
[체리, 한라봉, 자몽]
[한라봉, 자몽, 수박]
[한라봉, 자몽, 수박]
[자몽, 수박, 체리]



// FIFO 방식
// 캐쉬가 다찼을 때 새로운 데이터면 앞에 있는게 빠지고 뒤에 넣기
// 같은 데이터가 들어오면 그냥 넘긴다.
["바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리"]
[바나나]
[바나나, 체리]
[바나나, 체리, 한라봉]
[체리, 한라봉, 자몽]
[한라봉, 자몽, 수박] 
[한라봉, 자몽, 수박]
[자몽, 수박, 체리] 

// 5. 트리와 그래프
// 5.1 트리
// 트리의 기본 형태
// value
// child - (left, right)
const tree = {
  root: {
      value: 5,
      left: {
          value: 3,
          left: {
              value: 1,
              left : null,
              right: null
          },
          right : {
              value: 4,
              left : null,
              right: null
          }
      },
      right: {
          value: 8,
          left: {
              value: 6,
              left : null,
              right: null
          },
          right : {
              value: 9,
              left : null,
              right: null
          }
      }
  }
}

// 6. 트리의 순회
/*
// Object로 Linked list로 tree를 만들 수 있는데 
// 굳이 class로 만드는 이유는?
1. 확장성
2. OOP에 철학에 맞추기 때문에
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    // 이렇게 하면 다중 트리도 만들 수 잇음
    // this.child = [];
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.count = 0;
  }

  length() {
    return this.count;
  }

  insert(data) {
    let newNode = new Node(data);
    let currNode = this.root;
    this.count += 1;

    while (currNode) {
      if (data === currNode.data) {
        // 중복된 값은 탈락
        return;
      }
      if (data < currNode.data) {
        // 들어온 데이터가 작으면 왼쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 다시 내려간다.
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        }
        currNode = currNode.left;
      }
      if (data > currNode.data) {
        // 들어온 데이터가 크면 오른쪽에
        // 비어있으면 데이터를 넣고, 비어있지 않으면 타고 다시 내려간다.
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        }
        currNode = currNode.right;
      }
    }
  }
  
  DFS() {
    // 깊이 우선 탐색, Depth First Search, stack 자료구조 이용
    let result = [];
    let stack = [this.root];

    while (stack.length) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
    }
    return result;
  }

  BFS() {
    // 너비 우선 탐색, Breadth First Search, Queue 자료구조 이용
    let result = [];
    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      result.push(current.data);
    }
    return result;
  }
}

let t = new Tree(5); // root노드는 처음에!!
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);
console.log(t);

t.DFS();

t.BFS();

// 목차(실전 코딩테스트 풀이)
// 유틸 
const zip = function(a, b) {a.map((value, index) => [value, b[index]])};
const fillZero = function(n, arr) { return "0".repeat(n - arr.length) + arr }

// 1. 18년도
// 주제 : 2진법, 진법 연산, replace, or 연산
let x = 9;
x.toString();
x.toString(2);
x.toString(8);
x.toString(16);

// 비트연산
(9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' '); // "#####"
(9 & 30).toString(2).replace(/1/g, '#').replace(/0/g, ' '); // "#    "

//정답 1
let n =	5;
let arr1 =	[9, 20, 28, 18, 11];
let arr2 =	[30, 1, 21, 17, 28];


function solution(n, arr1, arr2) {
  let result = [];
  const fillSpace = function(n, arr) { return " ".repeat(n - arr.length) + arr }

  for (let i = 0; i < n; i++) {
    let temp = fillSpace(n, (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' '));
    result.push(temp);
  }
  return result;
}

console.log(solution(n, arr1, arr2));

// 정답 2
let n =	5;
let arr1 =	[9, 20, 28, 18, 11];
let arr2 =	[30, 1, 21, 17, 28];


function solution(n, arr1, arr2) {
  let result = [];
  const zip = function(a, b) {a.map((value, index) => [value, b[index]])};
  const fillSpace = function(n, arr) { return " ".repeat(n - arr.length) + arr }

  for (let i = 0; i < n; i++) {
    let temp = fillSpace(n, (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' '));
    result.push(temp);
  }
  return result;
}

console.log(solution(n, arr1, arr2));

// 다트게임
// https://programmers.co.kr/learn/courses/30/lessons/17682

testcase = [
  "1S2D*3T",
  "1D2S#10S",
  "1D2S0T",
]
for (let ts of testcase) {
  console.log(solution(ts))
}

const dartResult = "1D2S#10S";

let answer = [];
let result = 0;
let temp = 0; // 임시점수

for (let i = 0; i < dartResult.length; i++) {
  if (dartResult[i] >= 0 && dartResult[i] <= 9) {
    if (dartResult[i] == 1 && dartResult[i+1] == 0) {
      temp = 10;
      i++;
    } else {
      temp = parseInt(dartResult[i]);
    }
  } else if (dartResult[i] === "S") {
    answer.push(temp);
  } else if (dartResult[i] === "D") {
    answer.push(temp**2);
  } else if (dartResult[i] === "T") {
    answer.push(temp**3);
  } else if (dartResult[i] === "*") {
    answer[answer.length-1] *= 2;
    if (answer.length - 2 >= 0) {
      answer[answer.length-2] *= 2;
    }
  } else if (dartResult[i] === "#") {
    answer[answer.length-1] *= -1;
  }
  for (const el of answer) {
    result += el;
  }
  return result;
}


console.log(answer);

function solution(dartResult) {
  let answer = [];
  let result = 0;
  let temp = 0; // 임시점수

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i+1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = parseInt(dartResult[i]);
      }
    } else if (dartResult[i] === "S") {
      answer.push(temp);
    } else if (dartResult[i] === "D") {
      answer.push(temp**2);
    } else if (dartResult[i] === "T") {
      answer.push(temp**3);
    } else if (dartResult[i] === "*") {
      answer[answer.length-1] *= 2;
      if (answer.length - 2 >= 0) {
        answer[answer.length-2] *= 2;
      }
    } else if (dartResult[i] === "#") {
      answer[answer.length-1] *= -1;
    }
  }
  for (const el of answer) {
    result += el;
  }
  return result;
}

/// 캐시 문제 keyword : LRU 알고리즘, 페이지 교체 알고리즘
// https://programmers.co.kr/learn/courses/30/lessons/17680

testcase = [
  [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]],
  [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]],
  [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]]
]

function solution(cacheSize, cities) {
  let time = 0;
  let cache = [];
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    let index = cache.indexOf(city);

    if ( index !== -1 ){
      // hit
      time += 1;
      cache.splice(index, 1);
      cache.push(city);
    } else {
      // miss
      time += 5;
      cache.push(city);
      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  }

  return time;
}

a = 3;
b = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"];
console.log(solution(a, b));

// 2. 19년도 
// 링크 : https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
// 1번 오픈채팅방 문제
// 구조 분해 할당
let test = [
  "A 10 !",
  "B 20 !",
  "A 22 @",
  "B 20 @",
  "A 21 !@",
];

result = [];

test.forEach((el) => {
  const [one, two, three] = el.split(" ");
  if (one === "A") {
    if (two >= 20) {
      result.push([two, three]);
    }
  }
});

console.log(result);

// 본격 문제 풀기
function solution(record) {
  let result = [];
  let answer = [];
  let userInfo = {};

  for (const el of record) {
    const [state, id, nickName] = el.split(" ");
    if (state === "Enter") {
      userInfo[id] = nickName;
      result.push([id, "님이 들어왔습니다."])
    } else if (state === "Leave") {
      result.push([id, "님이 나갔습니다."])
    } else {
      userInfo[id] = nickName;
    }
  }

  for (const el of result) {
    answer.push(userInfo[el[0]] + el[1])
  }

  return answer;
}

let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan"
]

solution(record);

//////////////////////////////////////
// https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

// 2번 실패율
// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/

// 실패율 === 아직 클리어 못한 플레이어의 수 / 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지의 번호가 담긴 배열 stages가 매개변수

// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다. (오름차순)

// N    stages                      result
// 5    [2, 1, 2, 6, 2, 4, 3, 3]    [3, 4, 2, 1, 5]
// 4    [4, 4, 4, 4, 4]                [4, 1, 2, 3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0


// 실패율
// 1stage === 1/8
// 2stage === 3/7 === 3/(8-1)
// 3stage === 2/4 === 2/(7-3)
// 4stage === 1/2 === 1/(4-2)
// 5stage === 0/1 === 0/(2-1)


// [2, 1, 2, 6, 2, 4, 3, 3].filter((user) => user === 3);
// (2) [3, 3]

// step 1
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i <= 스테이지수; i++) {
      let 도달한사람수 = stages.filter((user) => user === i).length;
      실패율.push(도달한사람수);
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);


// step 2
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i <= 스테이지수; i++) {
      let 도달한사람수 = stages.filter((user) => user === i).length;
      let 확률 = 도달한사람수/유저수;
      유저수 -= 도달한사람수;
      실패율.push({stage : i, 확률 : 확률});
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// [
//     {stage: 1, 확률: 0.125},
//     {stage: 2, 확률: 0.42857142857142855},
//     {stage: 3, 확률: 0.5},
//     {stage: 4, 확률: 0.5},
//     {stage: 5, 확률: 0}
// ]

// result
// [3, 4, 2, 1, 5]



// step 3
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i <= 스테이지수; i++) {
      let 도달한사람수 = stages.filter((user) => user === i).length;
      let 확률 = 도달한사람수/유저수;
      유저수 -= 도달한사람수;
      실패율.push({stage : i, 확률 : 확률});
  }

  // sort의 내림차순
  // b - a
  // sort의 오름차순
  // a - b
  실패율.sort((a, b) => {
      if (a.확률 === b.확률){
          return a.stage - b.stage;
      } else {
          return b.확률 - a.확률;
      }
  });

  return 실패율.map(object => object.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// step 2
function solution(stateCount, stages) {
  let failRate = [];
  let userCount = stages.length;

  for (let i = 1; i <= stateCount; i++) {
    let sucessCount = stages.filter((user) => user === i).length;
    let percentage = sucessCount/userCount;
    userCount -= sucessCount;
    failRate.push({state: i, percentage: percentage});
  }
  return failRate;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// step 3
function solution(stateCount, stages) {
  let failRate = [];
  let userCount = stages.length;

  for (let i = 1; i <= stateCount; i++) {
    let sucessCount = stages.filter((user) => user === i).length;
    let percentage = sucessCount/userCount;
    userCount -= sucessCount;
    failRate.push({state: i, percentage: percentage});
  }

  failRate.sort((a, b) => {
    if (a.percentage === b.percentage) {
      return a.state - b.state // 오름차순
    } else {
      return b.percentage - a.percentage // 내림차순
    }
  });
  return failRate;
}

let array = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

console.log(array);
[
  {state: 3, percentage: 0.5},
  {state: 4, percentage: 0.5},
  {state: 2, percentage: 0.42857142857142855},
  {state: 1, percentage: 0.125},
  {state: 5, percentage: 0}
]

let answer = array.map((element) => element.state);

// 위랑 아래랑 같이 동작

function map(array) {
  let 반환값 = [];
  for (let element of array) {
    // element ==> {state: N, percentage: M}
    반환값.push(element.state);
  }
  return 반환값
}

let answer = map(array);


// 3. 20년도

// aabbaccc -> a, a, b, b, a, c, c, c -> 2a2ba3c
// aabbaccc -> aa, bb, ac, cc -> aabbacc
// aabbaccc -> aab, bac, cc -> aabbacc
// aabbaccc -> aabb, accc -> aabbacc

// "aabbaccc".match(/[a-z]{1}/g);
// "aabbaccc".match(/[a-z]{2}/g);

function solution(s) {
  let answer = s.length;
  let len = s.length;

  if (len === 1) return 1;

  for (let i = 1; i < (len/2)+1; i++) {
    const re = new RegExp(`[a-x]{${i}}`, "g");
    let sliceString = s.match(re);
    
    // let compressString = "2a3c4d"
    let compressString = '';
    let count = 1;
    for (let j = 0; j < sliceString.length; j++) {
      if (sliceString[j] === sliceString[j+1]) {
        count += 1;
      } else if (count === 1) {
        compressString += sliceString[j];
      } else if (count > 1) {
        compressString += (count + sliceString[j]);
        count = 1;
      }
    }
    if (len % i !== 0) {
      compressString += s.slice(-len % i)
    }
    answer = Math.min(answer, compressString.length);
  }
  return answer;
}

solution("aabbaccc");


// 번외
// 입력 예시 : aaabbcccccca
// 출력 예시 : a3b2c6a1

let s = "aaabbcccccca";
let count = 1;
let answer = "";

for (let i = 0; i < s.length; i++) {
  if (s[i] === s[i+1]) {
    count += 1
  } else if (count >= 1) {
    answer += (count + s[i]);
    count = 1;
  }
}

console.log(answer);

// 4. 21년도
