import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, UserPlus, Package, List } from 'lucide-react';
import { Dropdown } from 'flowbite-react';

const UserDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="md:w-64 bg-white shadow-md dark:bg-slate-800   ">
        <div >
      <Dropdown
      arrowIcon={false}
      inline={true}
      label={<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg class="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12,8c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,8,12,8z" />
  <path d="M12,14c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,14,12,14z" />
  <path d="M12,20c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,20,12,20z" /></svg>
              </div>}
    >
      <Dropdown.Header>
      </Dropdown.Header>
      <Link exact="true"  to="/dashboard"><Dropdown.Item>
       Dashboard
      </Dropdown.Item></Link>
      <Link exact="true"  to="/client/add"><Dropdown.Item>
        Add Client
      </Dropdown.Item></Link>
      <Link exact="true" to="/client/item/create"><Dropdown.Item>
        Add Item
      </Dropdown.Item></Link>
      <Link exact="true"  to="/client/collection/create"><Dropdown.Item>
       Add Collection
      </Dropdown.Item></Link>
      <Link exact="true"  to="/client/get"><Dropdown.Item>
        View Client
      </Dropdown.Item></Link>
      <Link exact="true"  to="/client/item/get"><Dropdown.Item>
       View Items
      </Dropdown.Item></Link>
      <Link exact="true"  to="/client/collections/get"><Dropdown.Item>
       View Collections
      </Dropdown.Item></Link>
      <Dropdown.Divider />
    </Dropdown></div>
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