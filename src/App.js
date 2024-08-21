import { Routes, Route } from 'react-router-dom';
import { PostList }  from './components/PostLists';
import { Post } from './components/Post';
import { PostProvider } from './context/PostContext';
import { Register } from "./components/Register"
import Login from './components/Login';
import { Navbars } from './Page/Navbars';
import {useState} from 'react'
import { SearchResult } from './components/SearchResult'
import { Footers } from './Page/Footers';
import { Contact } from './components/Contact';
import { PostForm } from './components/PostForm';
import { Expense } from './components/Expense';
import { ExpenseForm } from './components/ExpenseForm';
import { Home } from './components/Home';
function App() {

 const [darkTheme, setDarkTheme] = useState(false)
 const [sign,setSign] = useState(false)
 
  return (
    <div className={darkTheme?'dark': ''}>
   
    <div className='container bg-white -mx-3 rounded dark:bg-gray-800 ' >
      <Navbars darkTheme={darkTheme} setDarkTheme={setDarkTheme} setSign={setSign} sign={sign} />
      <div  className='' ><Routes >    
        <Route  path='/posts' element={<PostList />} />
        <Route  path='/posts/:id' element={<PostProvider><Post /></PostProvider>} />
        <Route  path='/postcreate' element={<PostForm />} />
        <Route  path='/register' element={<Register />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/search' element={<SearchResult />} />
        <Route  path='/images' element={<SearchResult />} />
        <Route  path='/contact' element={<Contact />} />
        <Route  path='/expense/' element={<Expense />} />
        <Route  path='/addexpense/'  element={<ExpenseForm />} />
        <Route  path='/home' element={<Home />} />
      </Routes></div>
      <Footers />
    </div> </div>
  )
    
  
    
 
}

export default App;
