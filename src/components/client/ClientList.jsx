import { useState } from "react"
import { useAsyncFn } from "../../hooks/useAsync"
import { getClient } from "../../services/expense"


export function  ClientList(){
    const   {Loading,Error,execute:obtainclients}=   useAsyncFn(getClient)
    const   [cli,setCli]= useState([])
    const   [type,setType]= useState('')
    if(Loading) return <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-blue-400 h-12 w-12"></div>
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-blue-400 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-4 bg-blue-400 rounded"></div>
          <div class="h-4 bg-blue-400 rounded w-5/6"></div>
        </div>
      </div>
    </div>
        </div>
    if(Error) return <h1 className='error-msg'>{Error}</h1>
    const handletype = (e)=>{
        const {name,value}= e.target;
        console.log(value)
          setType(value)
          obtainclients({'type':value}).then(res=>{
            if(res.err){
              alert("ERROR")
            }
            setCli(res)
            console.log(res)
          })
      
          return  null
      }
    const  GetClient= ()=>{
        if(type ===  "Supplier"|| type === "Customer" ){
          
        return  <div className="mb-12 pb-2 w-full flex    justify-center "> 
                <div class=" flex justify-center overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Client Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Balance
                        </th>
                        </tr>
                    </thead>  
                    <tbody>
                        {cli.map((client)=>{
                            return  <tr class="border-b  border-gray-200 dark:border-gray-700">
                            <th scope="row" class="px-6 w-48 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {client.name}
                            </th>
                            <td class="px-6 py-4 w-24">
                                {client.Balance}
                            </td></tr>
                        })}
                    </tbody>
                </table>
                </div></div>
        }
        return  null
      }


      return    <div><div className="pb-10 ml-4 flex  justify-center">
                <label for="type" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white ">Type of Client</label>
                <select id="type" name="type" value={type}  onChange={handletype} className="bg-gray-50 border border-gray-300 absolute w-48 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option></option>
                <option>Supplier</option>
                <option>Customer</option>
                </select>
                </div> 
                <GetClient  />
                </div>         
}