import "./App.css";
import { addTask, doneTask , deleteTask,editTask} from "./js/actions/action";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react"

function App() {
  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const todos = useSelector(state => state.todos)
 
  return (
    <div className="App">
      <header className="App-header">
      <input type="text" onChange={(e)=>setText({text:e.target.value,id:Math.random(),isDone:false})}/>
      <button onClick={(e)=>dispatch(addTask(text))}>Submit</button>
      {todos.map(el=><div>
        <h1 className={el.isDone?"done":"notDone"}>{el.text}</h1>
        <button className={el.isDone?"ButtonDone":"ButtonNotDone"} onClick={()=>dispatch(doneTask(el.id))}>{el.isDone?"Done":"NotDone"}</button>
        <button  onClick={()=>dispatch(deleteTask(el.id))}>delete</button>
        <button  onClick={()=>dispatch(editTask(el.id))}>edit</button>
        </div>)}
     </header>
    </div>
  );
}

export default App;
