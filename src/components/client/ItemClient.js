import { useState } from "react";
import { postItem,getClient } from "../../services/expense";
import { SuccessMessage } from "../successSubmitted";
import { useAsyncFn } from "../../hooks/useAsync"; 


export  function Item() {
    const[add,setAdd]= useState(false)
    const[cus,setCus] = useState([])
    const [item, setItem] = useState({
        type:"",
        gross:0,
        pure:0,
        touch:0,
        test:0,
        return:0,
        customer:'',
        remark:'',
        name:''
  
    })
    const {Loading, Error, execute:createItemFn} = useAsyncFn(postItem)
    const {Value:cli,execute:obtainclient} = useAsyncFn(getClient)
    
    const handleChange = (e) =>{
      const {name,value,type}= e.target;
      if(type === 'number'|| type  === "float")
      {
        return  setItem((prev)=>({
              ...prev,[name]:Number(value)
          }))
      }
      return    setItem((prev)=>({
              ...prev,
              [name]:value
               }));
    }
  
    const handletype = (e)=>{
      const {name,value}= e.target;
      console.log(value)
      setItem((prev)=>({
        ...prev,
        [name]:value
         }));
         let  type=value
         console.log(value)
        obtainclient({type}).then(res=>{
          if(res.err){
            alert("ERROR")
          }
          setCus(res)
        })
    
        return  null
    }
    const  GetClient= ()=>{
      if(item.type ===  "Supplier"|| item.type === "Customer" ){
      
      return  <div className="mb-12 pb-2"> 
               <label for="customer" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white ">Client Name</label>
                <select id="customer" name="customer" value={item.customer} onChange={(e)=>{setItem(prev=>({...prev,[e.target.name]:e.target.value}))}} className="bg-gray-50 border border-gray-300 absolute w-48 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {cus.map(cu=>{
                  return <option>{cu.name}</option> 
                })}
                </select>
              </div>
      }
      return  null
    }
  
    function  handleSubmit (e){
        e.preventDefault();
        console.log(item)
        return createItemFn({item}).then(res=>{
          if(res.error){
            return alert(res.error)
          }
          setAdd(true) 
        })
        
  
    }
    return <form class="space-y-4 dark:bg-gray-800 dark:text-gray-100 px-10" onSubmit={(e)=>{handleSubmit(e)}}>
             {add?<SuccessMessage />:<div className="invisible"></div>}
            <div className="pb-10">
                        <label for="type" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white ">Type of Client</label>
                        <select id="type" name="type" value={item.type} onChange={handletype} className="bg-gray-50 border border-gray-300 absolute w-48 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option></option>
                        <option>Supplier</option>
                        <option>Customer</option>
                        </select>
            </div>            
          <div>
          <GetClient  />
          </div>
          <div>
            <label for="name" class="block text-sm font-medium dark:text-gray-300" >Item Name</label>
            <input type="text" id="name" name="name"  placeholder="Tell Item Name"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="gross" class="block text-sm font-medium dark:text-gray-300" >Item Weight</label>
            <input type="number" id="gross" name="gross"  placeholder="Item weight"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="pure" class="block text-sm font-medium dark:text-gray-300" >Pure Weight</label>
            <input type="number" id="pure" name="pure"  placeholder="Pure Weight"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="touch" class="block text-sm font-medium dark:text-gray-300" >Touch</label>
            <input type="number" id="touch" step={0.01} name="touch"  placeholder="Touch"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="test" class="block text-sm font-medium dark:text-gray-300" >Testing Weight</label>
            <input type="number" id="test" name="test"  placeholder="Testing "   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="return" class="block text-sm font-medium dark:text-gray-300" >Return Weight</label>
            <input type="number" id="return" name="return"  placeholder="Return Weight"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="remark" class="block text-sm font-medium dark:text-gray-300" >Remark</label>
            <input type="text" id="remark" name="remark"  placeholder="remark"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600">{Loading?"Loading" :"Add"}</button>
          <div className="error-msg">{Error}</div>
        </form>
        
        
  }