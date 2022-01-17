import React from "react";

const App3 = () => {
  return (
    <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
  );
};

const HelloLicat = (props) => {
  const id = props.value.id;
  const name = props.value.name;
  return (
    <div>
      <input type="text" />
      <h2>{name}</h2>
      <strong>{`@${id}`}</strong>
      <HelloLicatTwo 
        value={{
          name: name,
          id: id
        }}
      />
    </div>
  );
};

const HelloLicatTwo = (props) => {
  const id = props.value.id;
  const name = props.value.name;
  return (
    <div>
      <h2>{name}</h2>
      <strong>{`@${id}`}</strong>
    </div>
  );
};

export default App3;