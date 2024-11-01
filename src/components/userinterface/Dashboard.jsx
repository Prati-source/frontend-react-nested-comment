import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [v,setV]= useState(false)

  const Sidebar = ()=>{
  setV(!v) 
 }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}


<aside  class="relative top-0 left-0 z-40  h-screen p-0  bg-slate-700 "  >
      <div className='absolute top-1/2 bottom-1/2 -right-2 w-8 h-8 overflow-visible bg-slate-200 rounded-3xl' onClick={Sidebar}>
        <svg className=' mx-2 mt-1.5' xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L5 0 L15 10 L5 20 L0 20 L10 10 Z" className='w-4 h-4'/>
        </svg>
      </div>
   <div class="h-full px-0 mx-2 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
     
      <ul class="space-y-2 font-medium " className={v?"w-64":"w-2"}>
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

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-auto dark:bg-slate-700 dark:text-white">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow dark:bg-slate-600">
            <h2 className="text-xl font-semibold mb-2">Total Clients</h2>
            <p className="text-3xl font-bold">25</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow dark:bg-slate-600">
            <h2 className="text-xl font-semibold mb-2">Total Items</h2>
            <p className="text-3xl font-bold">150</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow dark:bg-slate-600">
            <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
            <p>5 new items added</p>
            <p>2 new clients added</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;