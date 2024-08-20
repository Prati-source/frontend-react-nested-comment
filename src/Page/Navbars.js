import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {  Dropdown, Navbar, Button, ToggleSwitch } from 'flowbite-react';
import {useCookies } from 'react-cookie';
import { useResultContext } from '../context/SearchContextProvider'





 export function Navbars({darkTheme, setDarkTheme}) {
  const {searchTerm, setSearchTerm} = useResultContext();
  const [term,setTerm]= useState();
  let webroute
  if(process.env.REACT_APP_STAGE === "development"){
    webroute = process.env.REACT_APP_DEV_URL
  }else{
    webroute= process.env.REACT_APP_SERVICE_URL
  }
  const [cookies, setCookie] = useCookies(["userId","name"],{
    userId: "guest",
    name: "anonymous",
    maxAge:3600,
    path:'/',
    domain: webroute
  });



 function searchStore(){
    let t = term
    setSearchTerm(t);
   
    console.log(searchTerm)
  
  }




  const checkUser =() =>{ return cookies.userId === "guest" ?     (<span className="mr-4 "> <Button color="purple" placeholder='Search' > Get Started
 
</Button></span>) : (userPresent())    } 


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
        {cookies.name}
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>
        <Link exact="true"  to="/expense">View Expense</Link>
      </Dropdown.Item>
      <Dropdown.Item>
      <Link exact="true" to="/postcreate">Create Post</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link exact="true"  to="/addexpense">Add Expense</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <div onClick={() => {
          setCookie("userId", "guest")
          setCookie("name","anonymous")}} >Sign out</div>
        
      </Dropdown.Item>
    </Dropdown></div>
    )
  }
  
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
     
    { checkUser()}
      
      <Navbar.Toggle />
    </div >
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true}
        
      >
        Home
      </Navbar.Link>
      <Navbar.Link >
      <Link exact="true" to="/posts">  Posts</Link>
      </Navbar.Link>
      <Navbar.Link >
       <Link exact="true" to="/register">Register</Link> 
      </Navbar.Link>
      <Navbar.Link >
      { cookies.userId === "guest"? <Link exact="true" to="/login">Login</Link>:<></> }
      </Navbar.Link>
      <Navbar.Link ><Link exact="true" to="/contact">
      Contact
      </Link>
      </Navbar.Link>
    </Navbar.Collapse>
    
    <div id='toggle'>
    <ToggleSwitch
    checked={darkTheme}
    label={darkTheme? 'Dark 🌙' : 'Light 💡'}
    onChange={()=>{setDarkTheme(!darkTheme)}}
   
  /></div>
  <form className="flex flex-col gap-4" >
  <div>
    
    <input
      
      type="text"
      placeholder="search"
      onClick={searchStore}
      onChange={(e)=>setTerm(e.target.value)}
      value={term}
      className='dark:bg-slate-500 dark:placeholder:text-white dark:text-white' 
     />
     
      
    </div>
    </form>
  </Navbar>
  </div>
  )
}

