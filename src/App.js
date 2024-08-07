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


function App() {

 const [darkTheme, setDarkTheme] = useState(false)
  
  return (
    <div className={darkTheme?'dark': ''}>
   
    <div className='container bg-white -mx-3 rounded dark:bg-gray-800 ' >
      <Navbars darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div  className='' ><Routes >    
        <Route  path='/posts' element={<PostList />} />
        <Route  path='/posts/:id' element={<PostProvider><Post /></PostProvider>} />
        <Route  path='/postcreate' element={<PostForm />} />
        <Route  path='/register' element={<Register />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/search' element={<SearchResult />} />
        <Route  path='/images' element={<SearchResult />} />
        <Route  path='/contact' element={<Contact />} />

      </Routes></div>
      <Footers />
    </div> </div>
  )
    
  
    
 
}

export default App;
