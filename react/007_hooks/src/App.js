import React, { useState, useEffect } from "react";

const Time = (props) => {
  const [today, setToday] = useState(new Date());
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  console.log("렌더링");

  useEffect(() => {
    let time = setInterval(() => {
      const date = new Date();
      setToday(date);
    }, 1000);
    return () => {
      clearInterval(time);
    }
  }, [today])

  return (
    <div>
      <h1>시간</h1>
      <h2>{hour}시 {min}분 {sec}초</h2>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Time />
    </div>
  )
}


export default App;