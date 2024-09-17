import { useState } from "react";
import { postCollection,getClient } from "../../services/expense";
import { SuccessMessage } from "../successSubmitted";
import { useAsyncFn } from "../../hooks/useAsync"; 


export  function CollectionForm() {
    const[add,setAdd]= useState(false)
    const[cus,setCus] = useState([])
    const [collection, setCollection] = useState({
        type:"",
        gross:0,
        pure:0,
        customer:'',
        remark:'',
        customerId:''
  
    })
    const {Loading, Error, execute:createCollection} = useAsyncFn(postCollection)
    const {Value:cli,execute:obtainclient} = useAsyncFn(getClient)
    
    const handleChange = (e) =>{
      const {name,value,type}= e.target;
      if(type === 'number'|| type  === "float")
      {
        return  setCollection((prev)=>({
              ...prev,[name]:Number(value)
          }))
      }
      return    setCollection((prev)=>({
              ...prev,
              [name]:value
               }));
    }
  
    const handletype = (e)=>{
      const {name,value}= e.target;
      console.log(value)
      setCollection((prev)=>({
        ...prev,
        [name]:value
         }));
         let  type=value
        obtainclient({type}).then(res=>{
          if(res.err){
            alert("ERROR")
          }
          setCus(res)
        })
    
        return  null
    }
    const  GetClient= ()=>{
      if(collection.type ===  "Supplier"|| collection.type === "Customer" ){
        
      return  <div className="mb-12 pb-2"> 
               <label for="customer" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white ">Client Name</label>
                <select id="customer" name="customer" value={collection.customer}  onChange={(e)=>{ setCollection((prev)=>({...prev,[e.target.name]:e.target.value,"customerId":cus.find((obj)=>obj.name===e.target.value).id}))}} className="bg-gray-50 border border-gray-300 absolute w-48 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {cus.map(cu=>{
                  return <option>{cu.name}</option> 
                })}
                </select>
              </div>
      }
      return  null
    }

   const  handleSubmit =(e)=>{
        e.preventDefault();
         createCollection({collection}).then(res=>{
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
                        <select id="type" name="type" value={collection.type} onChange={handletype} className="bg-gray-50 border border-gray-300 absolute w-48 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option></option>
                        <option>Supplier</option>
                        <option>Customer</option>
                        </select>
            </div>            
          <div>
          <GetClient  />
          </div>
          <div>
            <label for="gross" class="block text-sm font-medium dark:text-gray-300" >Ghatti Weight</label>
            <input type="number" id="gross" name="gross"  placeholder="Item weight"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="pure" class="block text-sm font-medium dark:text-gray-300" >Pure Weight</label>
            <input type="number" id="pure" name="pure"  placeholder="Pure Weight"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="remark" class="block text-sm font-medium dark:text-gray-300" >Remark</label>
            <input type="text" id="remark" name="remark"  placeholder="remark"   onChange={handleChange} class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600">{Loading?"Loading" :"Add"}</button>
          <div className="error-msg">{Error}</div>
        </form>
        
        
  }