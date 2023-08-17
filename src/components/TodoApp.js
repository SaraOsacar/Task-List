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
          src="https://media.istockphoto.com/id/1357339450/es/foto/oficina-escritorio-bol%C3%ADgrafos-l%C3%A1pices-tijeras-planta-de-flores-regla-del-tri%C3%A1ngulo-clips.jpg?s=612x612&w=0&k=20&c=OztAkY5cm2PnJSjsyRq3Tu6GsnkcvnIdzV-5TiSL8Zc="
          alt="imagen postit"
          className="headerImg"
        />
        <h1 className="headerTitle">✏️ Task list ✏️</h1>
        <p className="headerPhrase">
          Write your tasks and delete them once you have finished them.
          <br /> You can also update them if you want to change something!
        </p>
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
          <p>&copy; 2023 Task List App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
