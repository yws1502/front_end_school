import { useState, useRef, useMemo } from "react";

const App2 = () => {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

	const getNum = (li) => {
    console.log("렌더링");
    return li.length;
	};

  // 보고있는 값이 변경이 되면 실행하는 함수
  const n = useMemo(() => getNum(userInfo), [userInfo]);
  // useEffect랑 useMemo의 차이점
  /*
  useEffect -> state의 값에 따라서 액션을 취하거나 
  용도가 크다

  useMemo -> 변수를 감시하다 변수가 변경되었을 때 작업을 한다.
  의존도가 떨어진다.?
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    // userInfo.push({});
    const newInfo = [...userInfo, { name: name, id: id }];
    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus();
    setUserInfo(newInfo); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-3");
  };

  const handleInputName = (e) => {
    setName(e.target.value); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-1");
  };

  const handleInputId = (e) => {
    setId(e.target.value); // onChange 이벤드가 발생될 때마다 상태값 변경됨
    console.log("렌더링-2");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          ref={inputId}
        />
        <button type="submit" onClick={handleSubmit}>
          버튼
        </button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{n}</span>
    </>
  );
};

export default App2;