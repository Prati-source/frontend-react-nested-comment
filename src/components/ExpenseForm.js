import { addExpense } from "../services/expense"
import { useAsyncFn } from "../hooks/useAsync"
import { useState } from "react"

export  function ExpenseForm(){
    const {Loading,Error,execute:expensePostFn} = useAsyncFn(addExpense)
    const [client, setClient] = useState()
    const [description,setDescription]= useState()
    const [amount,setAmount] = useState(0)
    const [taxAmt, setTaxAmt] =useState(0)
    const [status,setStatus] = useState('Pending')
    const  [category,setCategory] = useState()
    const [location,setLocation] = useState('bengaluru')
    const [payMeth,setPayMet] = useState('Cash')




     const   handleSubmit =(e) => {
        e.preventDefault();
        console.log({client,description,amount,taxAmt,status,category,location,payMeth})
        return expensePostFn({client,description,amount,taxAmt,status,category,location,payMeth}).then(res=> {
            alert("success")
        })
        

    }



   

            return   <form className="w-full h-full mx-auto p-10 border-sky-300 border-spacing-3 " onSubmit={e=>handleSubmit(e)} >
            <div className="relative z-0 w-full mb-5 group">
                <input type="text"  id="client" onChange={(e)=>{setClient(e.target.value)}} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="client" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Client</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text"  id="category" onChange={(e)=>{setCategory(e.target.value)}} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text"  id="description" onChange={(e)=>{setDescription(e.target.value)}} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number"  id="amount" value={amount} onChange={(e)=>{setAmount(e.target.valueAsNumber)}} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="amount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number"  id="taxAmount" value={taxAmt}  onChange={(e)=>{setTaxAmt(e.target.valueAsNumber)}} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="taxAmount" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tax Amount</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text"  id="location" onChange={(e)=>{setLocation(e.target.value)}} defaultValue="Bengaluru" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                </div>
                <div>
                <label className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white ">Status</label>
                    <select value={status} onChange={(e)=>{setStatus(e.target.value)}} className="bg-gray-50 border border-gray-300 absolute w-48 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                    <option>Pending</option>
                    <option>Paid</option>
                    <option>Cancelled</option>
                    </select>
                    </div>
                    <div className="mb-10 ">
                    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment Method</label>
                    <select value={payMeth} onChange={(e)=>{setPayMet(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        <option>Cash</option>
                        <option>UPI</option>
                        <option>Credit Card</option>
                    
                    </select>
                    </div>
            </div>
            <button className="btn w-24 mx-5 text-xl" type="submit" disabled={Loading}>{Loading? "Loading" : "Add"}</button>
            <div className="error-msg">{Error}</div>
                </form>
    
}