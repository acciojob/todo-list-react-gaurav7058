import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [id, setId] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [userStoreData, setUserStoreData] = useState([]);

  function handleInput() {
    if (inputValue === "") {
      return;
    }
    const newTask = {
      name: inputValue,
      id: id,
    };
    setUserStoreData([...userStoreData, newTask]);
    setId(id + 1);
    setInputValue("");
  }

  function handleUpdate(id) {
    const taskToEdit = userStoreData.find(item => item.id === id);
    setEditId(id);
    setEditValue(taskToEdit.name);
  }

  function handleSave(id) {
    const updatedData = userStoreData.map(item =>
      item.id === id ? { ...item, name: editValue } : item
    );
    setUserStoreData(updatedData);
    setEditId(null);
    setEditValue("");
  }

  function handleDelete(id) {
    const filteredData = userStoreData.filter(item => item.id !== id);
    setUserStoreData(filteredData);
  }

  return (
    <div className="container">
      <div className="add_tasks_section">
        <h3>To Do List</h3>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></textarea>
        <button className="task" onClick={handleInput}>
          Task 1
        </button>
      </div>
      <div className="tasks_section">
        {userStoreData.length > 0 &&
          userStoreData.map((item) => (
            <div key={item.id} className="task">
              {item.id === editId ? (
                <>
                  <textarea
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  ></textarea>
                  <button
                    className="save"
                    onClick={() => handleSave(item.id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{item.name}</span>
                  <button
                    className="edit"
                    onClick={() => handleUpdate(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
