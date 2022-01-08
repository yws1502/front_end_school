import React from "react";

const Resume = (props) => {
  const { greeting, name, hobby, food, color } = props;

  const borderStyle = {border: "1px solid #000"};
  const colorStyle = {color};

  return (
    <div style={borderStyle}>
      <h1>{name} 자기소개서</h1>
      <h1>{greeting}</h1>
      <h2>취미 : {hobby}</h2>
      <h2>좋아하는 음식 : {food}</h2>
      <h2>좋아하는 색 : <em style={colorStyle}>{color}</em></h2>
    </div>
  );
}

export default Resume;
