import { useState } from "react";
import { postClient } from "../../services/expense";
import { SuccessMessage } from "../successSubmitted";
import { useAsyncFn } from "../../hooks/useAsync"; 

export  function Client() {
    const[add,setAdd]= useState(false)
    const [client, setClient] = useState({
        name:"",
        type:"Supplier",
        part:""
    })
    const {Loading, Error, execute:createClientFn} = useAsyncFn(postClient)
    const handleChange = (e) =>{
        const {name,value}= e.target;
        return    setClient((prev)=>({
                ...prev,
                [name]:value
                 }));
    }
    
    function  handleSubmit (e){
        e.preventDefault();
        console.log(client)
        return createClientFn({client}).then(res=>{
          if(res.error){
            return alert(res.error)
          }
          setAdd(true) 
        })
        

    }
    return <form class="space-y-4 dark:bg-gray-800 dark:text-gray-100 px-10" onSubmit={(e)=>{handleSubmit(e)}}>
             {add?<SuccessMessage />:<div className="invisible"></div>}
          <div>
            <label for="name" class="block text-sm font-medium dark:text-gray-300" >Client Name</label>
            <input type="text" id="name"  placeholder="Set your Client Name"   onChange={handleChange} name="name" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
            <div className="pb-10">
                        <label for="type" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white ">Status</label>
                        <select id="type" name="type" value={client.type} onChange={handleChange} className="bg-gray-50 border border-gray-300 absolute w-48 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Supplier</option>
                        <option>Customer</option>
                        </select>
            </div>            
          <div>
            <label for="part" class="block text-sm font-medium dark:text-gray-300" >Field of Business</label>
            <input type="text" id="part" name="part"  placeholder="Set your field of Business"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>

          <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600">{Loading?"Loading" :"Post"}</button>
          <div className="error-msg">{Error}</div>
        </form>
        
        
}


