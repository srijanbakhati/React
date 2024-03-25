import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfo } from './components/Github/Github.jsx'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User />} />
        <Route
        loader={githubInfo}
        path='github' element={<Github />} />
      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
