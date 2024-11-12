
import React, { useState } from "react";
import './../styles/App.css';
const App = () => {
  const [id, setId] = useState(1);
  const[inputValue,setInputValue]=useState("");
  const[userStoreData,setUserStoreData]=useState([]);
  function handleInput(){
    const newTask = {
      name: inputValue,
      id: id
    };
    setUserStoreData([...userStoreData, newTask]);
    setId(id + 1); // Increment id after each new task
    setInputValue(""); // Clear input after adding
  }
  function handleDelete(id){
    const FilterData=userStoreData.filter(item=>item.id!==id)
    setUserStoreData(FilterData);
  }
  return (
    <div>
        <h1>To Do List</h1>
        <div className="add_tasks_section">
          <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <button className="task" onClick={handleInput}>Add</button>
        </div>
        <div className="tasks_section">
          {
           userStoreData.length>0 && userStoreData.map((item)=>{
              return(
                <div className="" key={item.id}>
                  <ul>
                    <li>{item.name} <button className="edit">edit</button><button onClick={()=>handleDelete(item.id)} className="delete">Delete</button></li>
                  </ul>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}

export default App
