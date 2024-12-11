"use client";
import { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [Disc, setDisc] = useState("");
  const [Maintask, setMaintask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMaintask([...Maintask, { Title, Disc }]);
    console.log(Maintask);
    setTitle("");
    setDisc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...Maintask];
    copytask.splice(i, 1);
    setMaintask(copytask);
  };
  let renderTask = <h2>No Tasks Available</h2>;

  if (Maintask.length > 0) {
    renderTask = Maintask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between items-center">
          <div className="flex justify-between w-2/3">
            <h5 className="text-2xl font-bold">{t.Title}</h5>
            <h6 className="text-xl font-semibold">{t.Disc}</h6>
          </div>
          <button
            className="bg-slate-600"
            onClick={() => {
              deleteHandler(i);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <>
        <h1 className="bg-zinc-900 text-white text-5xl p-5 font-bold text-center ">
          MEOW'S TODO LIST
        </h1>

        <form onSubmit={submitHandler} action="">
          <input
            type="text"
            placeholder="Enter Task here"
            className="border-zinc-700 border-2  px-2 py-2 text-2xl m-5"
            value={Title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter Description Here"
            className="border-zinc-700 border-2 px-2 py-2 text-2xl m-5"
            value={Disc}
            onChange={(e) => {
              setDisc(e.target.value);
            }}
          />
          <button className="bg-zinc-800 text-2xl text-white m-4 px-3 py-1 font-bold">
            Add task
          </button>
        </form>
        <hr />
        <div className="bg-zinc-600 mt-10 p-10 text-white ">
          <ul>{renderTask}</ul>
        </div>
      </>
    </>
  );
};

export default page;
