import { Routes, Route,useLocation,Navigate,Outlet,Link } from 'react-router-dom';
import { PostList }  from './components/post/PostLists';
import { Post } from './components/post/Post';
import { PostProvider } from './context/PostContext';
import { Register } from "./components/user/Register";
import Login from './components/user/Login';
import { Navbars } from './Page/Navbars';
import {useState} from 'react'
import { SearchResult } from './components/SearchResult'
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
 const token = !!localStorage.getItem('token');
 const [v,setV]= useState(false)
 const AuthWrapper = () => {
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};


const Sidebar = ()=>{
setV(!v) 
}

    {/* Sidebar */}




 
  return (
    <div className={darkTheme?'dark': ''}> 
   
    <div className='container bg-white -mx-5 rounded dark:bg-gray-800 ' >
      <Navbars darkTheme={darkTheme} setDarkTheme={setDarkTheme} setSign={setSign} sign={sign} />
    <div className='flex'>
      <aside  class="relative top-0 left-0 z-40  h-screen p-0  bg-slate-700 transition ease-in-out0 "  onClick={Sidebar} className={v&&token?"w-64":"w-8"} >
    <div className='absolute top-1/2 bottom-1/2  w-8 h-8 overflow-hidden bg-slate-200 rounded-3xl'>
      <svg className=' mx-2 mt-1.5' xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L5 0 L15 10 L5 20 L0 20 L10 10 Z" className='w-4 h-4'/>
      </svg>
    </div>
 <div class="h-full px-0 mx-4 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
   
    <ul class="space-y-2 font-medium ">
       <li>
         <Link exact="true" to="/client/add" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <span class="flex-1 whitespace-nowrap">Add Client</span>
         </Link>
       </li>
       <li>
         <Link exact="true" to="/client/item/create" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <span class="flex-1 whitespace-nowrap">Add Item</span>
         </Link>
       </li>
       <li>
         <Link exact="true" to="/client/item/create" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <span class="flex-1 whitespace-nowrap">Add Collection</span>
         </Link>
       </li>
       <li>
         <Link exact="true" to="/client/get" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <span class="flex-1 whitespace-nowrap">View Client</span>
         </Link>
       </li>
       <li>
         <Link exact="true" to="/client/item/get" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <span class="flex-1 whitespace-nowrap">View Items</span>
         </Link>
       </li>
       <li>
         <Link exact="true" to="/client/collection/get" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             <span class="flex-1 whitespace-nowrap">View Collection</span>
         </Link>
       </li>
    </ul>
 </div>
</aside>
<div  className='z-0 w-full' >
        <Routes >    
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
            <Route  path='/client/item/create' element={<Item  />} />
            <Route  path='/client/item/get' element={<GetItem />} />
            <Route  path='/client/get'   element={<ClientList />} />
            <Route  path='/client/collection/create'  element={<CollectionForm  />} />
            <Route  path='/client/collection/get'  element={<CollectionList />} />
          </Route>
        <Route  path="*" element={<Navigate to="/" replace />} />
      </Routes></div></div>
    </div> </div>
  )
    
  
    
 
}

export default App;
