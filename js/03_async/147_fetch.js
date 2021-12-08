// fetch는 promise를 구현하는 방법 중 하나이다.

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
console.log(1, '<<<');
console.log(2, '<<<');

// fetch로 받은 데이터를 밖에서 사용할 때는 fetch 밖에서 키워드 변수 선언 후 fetch안에서 값 할당하기
let jsonData;
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
      jsonData = json;
      for (let data of json) {
        console.log(data["1차 접종 퍼센트"]);
      }
      console.log(json);
      return json
    })

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
.then(function(response) {
    console.log(1);
    return response.json();
})
.then(function(json) {
    console.log(2);
    console.log(json);
    return json
})
.then(function(json) {
    console.log(3);
    console.log(json.filter(s => s['시·도별(1)'] === '전국').map(el => el["1차 접종 퍼센트"]));
    return
})
