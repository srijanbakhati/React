import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState={
    // todos:[{
    //     id:1,
    //     text:"hello world"
    // }]
    todos:[]
    
}

export const  todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },

        updateTodo:(state,action)=>{
            const{id,todo}=action.payload;
            const toUpdateTodo=state.todos.find((todo)=>todo.id===id);
            if(toUpdateTodo){
                toUpdateTodo.text=todo;
            }
        },

        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id!=action.payload));
        }
    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;
export default  todoSlice.reducer;