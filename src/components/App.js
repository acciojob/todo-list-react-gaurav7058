
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
    setId(id + 1); 
    setInputValue("");
  }
  function handleDelete(id){
    const FilterData=userStoreData.filter(item=>item.id!==id)
    setUserStoreData(FilterData);
  }
  return (
    <div>
        <div className="add_tasks_section">
        <h3>To Do List</h3>
          <textarea name="" id="" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></textarea> 
          <button className="task" onClick={handleInput}>Task 1</button>
        </div>
        <div className="tasks_section">
          {
           userStoreData.length>0 && userStoreData.map((item)=>{
              return(
                <div className="" key={item.id}>
                  <span>{item.name}</span>
                  <button className="edit">edit</button>
                  <button onClick={()=>handleDelete(item.id)} className="delete">Delete</button>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}

export default App
