import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [id, setId] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [userStoreData, setUserStoreData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Add a new task
  function handleInput() {
    if (inputValue.trim()) {
      const newTask = {
        name: inputValue,
        id: id,
      };
      setUserStoreData([...userStoreData, newTask]);
      setId(id + 1);
      setInputValue("");
    }
  }

  // Delete a task
  function handleDelete(id) {
    const updatedData = userStoreData.filter((item) => item.id !== id);
    setUserStoreData(updatedData);
  }

  // Enable editing mode for a task
  function handleUpdate(id) {
    const taskToEdit = userStoreData.find((item) => item.id === id);
    setEditId(id);
    setEditValue(taskToEdit.name);
  }

  // Save the edited task
  function handleSave(id) {
    const updatedData = userStoreData.map((item) =>
      item.id === id ? { ...item, name: editValue } : item
    );
    setUserStoreData(updatedData);
    setEditId(null);
    setEditValue("");
  }

  return (
    <div>
      <div className="add_tasks_section">
        <h3>To Do List</h3>
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task"
        ></textarea>
        <button className="task" onClick={handleInput}>
          Add Task
        </button>
      </div>

      <div className="tasks_section">
        {userStoreData.length > 0 &&
          userStoreData.map((item) => (
            <div key={item.id} className="task">
              {editId === item.id ? (
                // Edit mode: show input field and save button
                <div>
                  <textarea
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    placeholder="Enter a new task"
                  ></textarea>
                  <button className="save" onClick={() => handleSave(item.id)}>
                    Save
                  </button>
                </div>
              ) : (
                // Display mode: show task name with edit and delete buttons
                <div>
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
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
