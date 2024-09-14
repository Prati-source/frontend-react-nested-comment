import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {  Dropdown, Navbar, Button, ToggleSwitch } from 'flowbite-react';
import {useCookies } from 'react-cookie';
import { useResultContext } from '../context/SearchContextProvider'
import Cookies from "js-cookie"
import { useAsyncFn } from '../hooks/useAsync';
import { logout } from '../services/user';
import { useGeolocated } from "react-geolocated"


 export function Navbars({darkTheme, setDarkTheme,sign, setSign}) {
  const {searchTerm, setSearchTerm} = useResultContext();
  const [term,setTerm]= useState();
  const LogoutFn = useAsyncFn(logout)
 
 function searchStore(){
    let t = term
    setSearchTerm(t);
   
    console.log(searchTerm)
  
  }
  const handleLogout=()=>[
    LogoutFn.execute().then(res=>{if(res.signed){
      setSign(false)
    }})
  ]
 
  if(!!localStorage.getItem('token')){
    setSign(true)
  }
  if(localStorage.getItem('theme') === "true"){
    setDarkTheme(true)
  }

  function userPresent() {
    return (<div >
      <Dropdown
      arrowIcon={false}
      inline={true}
      label={<div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              </div>}
    >
      <Dropdown.Header>
        <span className="block text-sm dark:bg-black dark:text-white">
        {Cookies.get('name')}
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Link exact="true"  to="/dashboard"><Dropdown.Item>
       Dashboard
      </Dropdown.Item></Link>
      <Link exact="true"  to="/expense"><Dropdown.Item>
        View Expense
      </Dropdown.Item></Link>
      <Link exact="true" to="/postcreate"><Dropdown.Item>
      Create Post
      </Dropdown.Item></Link>
      <Link exact="true"  to="/addexpense"><Dropdown.Item>
       Add Expense
      </Dropdown.Item></Link>
      <Link exact="true"  to="/ownpost"><Dropdown.Item>
       Your Posts
      </Dropdown.Item></Link>
      <Link exact="true"  to="/melting"><Dropdown.Item>
       Add Melting
      </Dropdown.Item></Link>
      <Dropdown.Divider />
      <Dropdown.Item>
        <div onClick={() => {
          handleLogout()}} >Sign out</div>
        
      </Dropdown.Item>
    </Dropdown></div>
    )
  }
  function checkedUser(){
  if( sign){  return userPresent() }
    else { return (<span className="mr-4 "> <Button color="purple" placeholder='Search' > Get Started
 
 </Button></span>)    }}
  
  return (
    <div  className={darkTheme?'dark': ''} ><Navbar
    fluid={true}
    rounded={true}
   
  >
    <Navbar.Brand href="/">
      <img
        src="/mario.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-mono">
        Pramod
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
     
    {checkedUser() }
      
      <Navbar.Toggle />
    </div >
    <Navbar.Collapse>
      <Navbar.Link>
        <Link exact='true' to='/'>  Home</Link>
      </Navbar.Link>
      <Navbar.Link >
      <Link exact="true" to="/posts">  Posts</Link>
      </Navbar.Link>
      <Navbar.Link >
       <Link exact="true" to="/register">Register</Link> 
      </Navbar.Link>
      <Navbar.Link >
      { Cookies.get('token') === undefined? <Link exact="true" to="/login">Login</Link>:<></> }
      </Navbar.Link>
      <Navbar.Link ><Link exact="true" to="/contact">
      Contact
      </Link>
      </Navbar.Link>
    
    
    <div id='toggle'>
    <ToggleSwitch
    checked={darkTheme}
    label={darkTheme? 'Dark 🌙' : 'Light 💡'}
    onChange={()=>{setDarkTheme(!darkTheme) ;localStorage.setItem('theme',!darkTheme)}}
   
  /></div></Navbar.Collapse>
  <form className="flex flex-col gap-4 " >
 
    
    <input
      
      type="text"
      placeholder="search"
      onClick={searchStore}
      onChange={(e)=>setTerm(e.target.value)}
      value={term}
      className='dark:bg-slate-500 dark:placeholder:text-white dark:text-white max-w-36 min-w-0' 
     />
     
      
    </form>
  </Navbar>
  </div>
  )
}

