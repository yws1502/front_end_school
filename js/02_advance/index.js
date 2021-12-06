

let click = true;
function sortTable(key) {
    if (click) {
        click = false;
        data.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)));
    } else {
        click = true;
        data.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
    }
    renderTable(data)
}

function renderTable(data) {
    let tbodyData = [];
    for (const iterator of data) {
        //console.log(iterator);
        tbodyData.push(`
            <tr>
                <td>${iterator.index}</td>
                <td>${iterator.picture}</td>
                <td>${iterator.age}</td>
                <td>${iterator.eyeColor}</td>
                <td>${iterator.name}</td>
                <td>${iterator.gender}</td>
                <td>${iterator.company}</td>
                <td>${iterator.email}</td>
                <td>${iterator.phone}</td>
                <td>${iterator.address}</td>
            </tr>
        `)
    }
    // console.log(tbodyData);
    document.querySelector('.table > tbody').innerHTML = tbodyData.join('');
}

function getAvgAge(data) {
  let ageEls = [];
  for (let info of data) {
    ageEls.push(info.age);
  }
  let sumAge = 0;
  ageEls.forEach(el => sumAge += el);
  console.log(sumAge/data.length)
}

function getGenderAvgAge(data) {
  let manInfo = data.filter((el) => el.gender === "male");
  console.log(manInfo);
}
