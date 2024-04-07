import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      name: name,
      age: +age,
    };
    setData([...data, user]);
    setName("");
    setAge("");
  };
  let users = data?.map((u, inx) => (
    <div key={inx}>
      <h3>{u.name}</h3>
      <p>{u.age}</p>
      <hr />
    </div>
  ));
  return (
    <>
      <div>Form</div>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="age"
          type="number"
          onChange={(event) => setAge(event.target.value)}
        />
        <button>Submit</button>
      </form>
      <div>{users}</div>
    </>
  );
};

export default Form;
