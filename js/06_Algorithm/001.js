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


// 6. 트리의 순회



// 목차(실전 코딩테스트 풀이)
// 1. 18년도


// 2. 19년도


// 3. 20년도


// 4. 21년도


