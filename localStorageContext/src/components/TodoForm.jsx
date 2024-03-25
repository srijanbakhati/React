import { useState } from "react"
import { useTodo } from "../context";


const TodoForm = () => {
    const[todo,setTodo]=useState("");
    
    const{addTodo}=useTodo();

    const add=(e)=>{
        e.preventDefault()

        if(!todo) return;

        addTodo({todo,completed:false})
        setTodo("");
    }
    
  return (
    <form 
    className="flex"
    onSubmit={add}
   >
        <input 
        className="w-full border border-black/40 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        type="text"
        placeholder="Write a Todo.."
        value={todo}
        onChange={
            (e)=>{
                setTodo(e.target.value)
            }
        }
        
        />
        <button 
        className="rounded-r-lg bg-green-600 px-3 py-1 text-white shrink-0"
        type="submit">Add</button>
    </form>
  )
}

export default TodoForm;