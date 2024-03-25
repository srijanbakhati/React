import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import './App.css'

const App = () => {
  return (
    <div>
      <h1 className='text-white font-bold text-3xl'>Learning redux Toolkit</h1>
      <AddTodo/>
      <TodoItem/>
    </div>
  )
}

export default App
