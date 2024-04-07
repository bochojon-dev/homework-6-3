import React, { useState, useEffect } from "react";
import "../todolist/Todolist.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import Confetti from "react-confetti";
const Todolist = () => {
  // function deleteUser(index) {
  //     .splice(index, 1);
  //   }
  const [list, setList] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  console.log(list);
  const handleClick = (e) => {
    // console.log(e.target);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!list.trim()) return handleToast("Iltimos maydonni to'ldiring!");
    let task = {
      list,
    };
    setData([...data, task]);
    setList("");
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  console.log(data);
  let tasks = data?.map((el, i) => (
    <div key={i} className="card">
      <p>{el.list}</p>
      <button onClick={handleClick}>
        <RiDeleteBin6Line />
      </button>
    </div>
  ));
  const handleToast = () => {
    toast.warning("Iltimos maydonni to'ldiring!");
  };
  const [confetti, setConfetti] = useState(false);
  return (
    <div className="todolist">
      <div className="container">
        <div className="list">
          <div>
            <form onSubmit={handleSubmit} className="form" action="">
              <input
                required
                value={list}
                onChange={(e) => setList(e.target.value)}
                type="text"
                placeholder="Write some tasks..."
              />
              <button>Add</button>
            </form>
          </div>
          <div className="cards">
            <div className="card">
              <p>I will wake 8 in the morning</p>
              <button onClick={handleClick}>
                <RiDeleteBin6Line />
              </button>
            </div>
            <div className="card">
              <p>I will practice html for 1 hour</p>
              <button onClick={handleClick}>
                <RiDeleteBin6Line />
              </button>
            </div>
            <div className="card">
              <p>I will give time for 2 hours css</p>
              <button onClick={handleClick}>
                <RiDeleteBin6Line />
              </button>
            </div>
            <div className="card">
              <p>Then I will have breakfast</p>
              <button onClick={handleClick}>
                <RiDeleteBin6Line />
              </button>
            </div>
            {tasks}
            <button className="btn" onClick={() => setConfetti(!confetti)}>
              Surprise...
            </button>
            {confetti ? <Confetti /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
