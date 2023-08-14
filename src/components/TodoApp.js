import { useState } from 'react';
import ToDo from './ToDo';
import '../styles/App.scss';

export default function TodoApp() {
  const [title, setTitle] = useState('');
  const [toDo, setToDo] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    const newToDo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const temp = [...toDo];
    temp.unshift(newToDo);

    setToDo(temp);

    setTitle('');
  }
  function handleUpdate(id, value) {
    const temp = [...toDo];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setToDo(temp);
  }
  function handleDelete(id) {
    const temp = toDo.filter((item) => item.id !== id);
    setToDo(temp);
  }

  return (
    <div>
      <header className="header">
        <img
          src="https://saposyprincesas.elmundo.es/wp-content/uploads/2021/06/Tecnica-del-post-it-Destacada.jpg"
          alt="imagen postit"
          className="headerImg"
        />
        <h1 className="headerTitle">✏️ Task list ✏️</h1>
        <span className="headerPhrase">
          Write your tasks and delete them once you have finished them!
        </span>
      </header>
      <div className="toDoContainer">
        <form className="ToDoCreateForm" onSubmit={handleSubmit}>
          <div className="inputContainer">
          <input
            onChange={handleChange}
            className="ToDoInput"
            value={title}
            placeholder="Write your task here"
          />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Create to Do"
            className="buttonCreate"
          />
          </div>
        </form>
        <div className="toDosContainer">
          {toDo.map((item) => (
            <ToDo
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      <footer className="footer">
      <div className="footerContent">
        <p>&copy; 2023 Task App. All rights reserved.</p>
      </div>
    </footer>
  </div>
);
}
