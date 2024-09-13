import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, UserPlus, Package, List } from 'lucide-react';

const UserDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md dark:bg-slate-800   ">
        <nav className="p-5 space-y-2">
          <Link to="/dashboard" className="block ">
            <button className="w-full flex items-center dark:hover:text-slate-500 dark:text-white justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-colors">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </button>
          </Link>
          <Link to="/client/add" className="block">
            <button className="w-full flex items-center dark:hover:text-slate-500 dark:text-white justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-colors">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Client
            </button>
          </Link>
          <Link to="/client/item" className="block">
            <button className="w-full flex items-center dark:hover:text-slate-500 dark:text-white justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-colors">
              <Package className="mr-2 h-4 w-4" />
              Add Item
            </button>
          </Link>
          <Link to="/view-items" className="block">
            <button className="w-full flex items-center dark:hover:text-slate-500 dark:text-white justify-start px-4 py-2 text-gray-700 hover:bg-gray-200 rounded transition-colors">
              <List className="mr-2 h-4 w-4" />
              View Items
            </button>
          </Link>
        </nav>
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