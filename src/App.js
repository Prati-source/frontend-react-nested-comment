import { Routes, Route,useLocation,Navigate,Outlet } from 'react-router-dom';
import { PostList }  from './components/post/PostLists';
import { Post } from './components/post/Post';
import { PostProvider } from './context/PostContext';
import { Register } from "./components/user/Register";
import Login from './components/user/Login';
import { Navbars } from './Page/Navbars';
import {useState} from 'react'
import { SearchResult } from './components/SearchResult'
import { Footers } from './Page/Footers';
import { Contact } from './components/Contact';
import { PostForm } from './components/post/PostForm';
import { Expense } from './components/expense/Expense';
import { ExpenseForm } from './components/expense/ExpenseForm';
import { Home } from './components/Home';
import Melting from './components/Melting';
import Exgeo from './components/Exgeo';
import { OwnPost } from './components/OwnPost';
import { Client } from './components/client/Client';
import {Item}  from  './components/client/ItemClient';
import UserDashboard from './components/userinterface/Dashboard';
import { GetItem } from './components/client/GetItem';
import { ClientList } from './components/client/ClientList';
import { CollectionForm } from './components/client/CollectionClient';
import { CollectionList } from './components/client/CollectionList';  


function App() {

 const [darkTheme, setDarkTheme] = useState(false)
 const [sign,setSign] = useState(false)
 const AuthWrapper = () => {
  const location = useLocation();
  const token = !!localStorage.getItem('token');

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};



 
  return (
    <div className={darkTheme?'dark': ''}> 
   
    <div className='container bg-white -mx-5 rounded dark:bg-gray-800 ' >
      <Navbars darkTheme={darkTheme} setDarkTheme={setDarkTheme} setSign={setSign} sign={sign} />
      <div  className='' ><Routes >    
        <Route  path='/posts' element={<PostList />} />
        <Route  path='/home' element={<Home />} />
        <Route  path='/posts/:id' element={<PostProvider><Post /></PostProvider>} />
        <Route  path='/register' element={<Register />} />
        <Route  path='/login' element={<Login setSign={setSign} sign={sign} />} />
        <Route  path='/' element={<Exgeo />} />
        <Route  path='/contact' element={<Contact />} />
          <Route element={<AuthWrapper />}>
            <Route  path='/dashboard' element={<UserDashboard />} />
            <Route  path='/postcreate' element={<PostForm />} />
            <Route  path='/search' element={<SearchResult />} />
            <Route  path='/images' element={<SearchResult />} />
            <Route  path='/expense/' element={<Expense />} />
            <Route  path='/addexpense/'  element={<ExpenseForm />} />
            <Route  path="/melting" element={<Melting />} />
            <Route  path='/ownpost'  element={<OwnPost  />} />
            <Route  path='/client/add' element={<Client  />} />
            <Route  path='/client/item' element={<Item  />} />
            <Route  path='/client/item/get' element={<GetItem />} />
            <Route  path='/client/get'   element={<ClientList />} />
            <Route  path='/client/collection/create'  element={<CollectionForm  />} />
            <Route  path='/client/collection/get'  element={<CollectionList />} />
          </Route>
        <Route  path="*" element={<Navigate to="/" replace />} />
      </Routes></div>
      <Footers />
    </div> </div>
  )
    
  
    
 
}

export default App;
