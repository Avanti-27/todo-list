import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDos([...toDos, text]);
  };

  const handleDelete = (index) => {
    setToDos(toDos.filter((item, i) => i !== index));
  };

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold p-4 m-8">To Do List</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border-2 border-black px-4 py-2 m-8 text-xl"
            onChange={handleChange}
          />
          <button className="bg-black text-white rounded-lg px-4 py-2 text-xl">
            Add
          </button>
        </form>
      </div>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index} className="text-3xl  m-4 p-2">
            {toDo}
            <button
              className="bg-black text-white rounded-lg px-4 py-1 text-xl ml-2"
              onClick={() => handleDelete(index)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
