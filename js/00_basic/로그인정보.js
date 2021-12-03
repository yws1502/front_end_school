let profileInfo = [
    {
        id: "jjang0",
        password: "1q2w3e4r!",
        gender: "man",
        phone: "010-1234-1234",
        email: "email1@email.com",
        joinDate: "2000.12.02",
        location: "Seoul",
        passwordFind: "123.254.161.168",
    },
    {
        id: "jjang1",
        password: "1q2w3e4r!",
        gender: "man",
        phone: "010-1234-1234",
        email: "email2@email.com",
        joinDate: "2021.12.02",
        location: "Seoul",
        passwordFind: "123.254.161.168",
    },
    {
        id: "jjang2",
        password: "1q2w3e4r!",
        gender: "man",
        phone: "010-1234-1234",
        email: "email3@email.com",
        joinDate: "2012.10.02",
        location: "Seoul",
        passwordFind: "123.254.161.168",
    },
    {
        id: "jjang3",
        password: "1q2w3e4r!",
        gender: "woman",
        phone: "010-1234-1234",
        email: "email4@email.com",
        joinDate: "2015.01.22",
        location: "Seoul",
        passwordFind: "123.254.161.168",
    },
]

// 남자면서 2021년도에 가입하신 분
profileInfo.filter(x => x.gender === 'man' && x.joinDate.split('.')[0] === '2021');

let blogs = [
    {
        id: 1,
        title: 'title1',
        content: 'content1',
        section: 'section1',
    },
    {
        id: 2,
        title: 'title2',
        content: 'content2',
        section: 'section2',
    },
    {
        id: 3,
        title: 'title3',
        content: 'content3',
        section: 'section3',
    },
]

// 1. 아무값이 안들어왔을 때
// 2. 없는 문자를 검색했을 떄
// 3. 제대로된 문자를 입력했을 때

let section = 'section2';
let data = section? blogs.filter(x => x.section === section) : blogs;
console.log(data)

let profileInfo = [
    {
        id: "jjang",
        password: "1q2w3e4r!",
        gender: "man",
        phone: "010-1234-1234",
        email: "email1@email.com",
        joinDate: "2000.12.02",
        location: "Seoul",
        passwordFind: "123.254.161.168",
    },
    {
        id: "jjang1",
        password: "1q2w3e4r!",
        gender: "man",
        phone: "010-1234-1234",
        email: "email2@email.com",
        joinDate: "2021.12.02",
        location: "Seoul",
        passwordFind: "123.254.161.168",
    },
    {
        id: "jjang2",
        password: "1q2w3e4r!",
        gender: "man",
        phone: "010-1234-1234",
        email: "email3@email.com",
        joinDate: "2012.10.02",
        location: "Seoul",
        passwordFind: "123.254.161.168",
    },
    {
        id: "jjang3",
        password: "1q2w3e4r!",
        gender: "woman",
        phone: "010-1234-1234",
        email: "email4@email.com",
        joinDate: "2015.01.22",
        location: "Seoul",
        passwordFind: "123.254.161.168",
    },
]

// 4번 문제 아이디가 jjang인 사람을 찾아주세요
let query = 'jjang'

// 이렇게 하면 메모리가 너무 많이 쓰인다. 따라서 유니크한 값을 찾을 때는 filter는 별로 find를 사용하자
let profile = query? profileInfo.filter(x => x.id === query): profileInfo;

// 요렇게!
let profile = profileInfo.find(x => x.id === "jjang");
console.log(profile)
