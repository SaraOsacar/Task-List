import { useState } from 'react';
import ToDo from './ToDo';

export default function TodoApp() {
  const [title, setTitle] = useState('Hola');
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
    <div className="toDoContainer">
      <form className="ToDoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="ToDoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create to Do"
          className="buttonCreate"
        />
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
  );
}
