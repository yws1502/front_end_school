import React, { useState, useRef } from 'react';

function App1() {
  // querySelect 하는거랑 같음
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef
  const scrollBox = useRef(null);

  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const inputCheck = (event) => {
    event.preventDefault();

    if (emailInput.current.value === "") {
      alert("이메일을 입력해주세요");
      emailInput.current.focus();
      return; // if, else 문에 들어오게 되면 setState 실행없이 바로 return
    } else if (pwInput.current.value === "") {
      alert("비밀번호를 입력해주세요");
      pwInput.current.focus();
      return;
    }
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  }

  const scrollToTop = (event) => {
    event.preventDefault();

    console.log(scrollBox.current.offsetHeight);
    scrollBox.current.scrollTop = 0;
  }

  return (
    <div className='container' ref={scrollBox} style={{ height: "400px", overflow: "scroll" }}>
      <form style={{ display: "flex", flexDirection: "column", height: "3000px" }}>
        <label>
          이메일 : <input type="email" ref={ emailInput }/>
        </label>
        <label>
          비밀번호 : <input type="password" ref={ pwInput }/>
        </label>

        <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
          로그인
        </button>
        <span>입력한 이메일 : { emailValue }</span>
        <span>입력한 비밀번호 : { pwValue }</span>
      </form>
      <button onClick={scrollToTop}>위로</button>
    </div>
  );
}

export default App1;
