import { useState } from "react";
import { useAsyncFn } from "../hooks/useAsync";
import { postMelting } from "../services/expense";
import {SuccessMessage} from "./successSubmitted";

export default  function Melting(){
    const [melt,setMelt] = useState({
        purpose: '',
        ghatti: null,
        pure:null,
        chura:null,
        melted:null,
        remark:''
    })
    const   [Add,setAdd]=useState(false)
    const   {Loading,Error,execute:meltFn} = useAsyncFn(postMelting)

    const handleChange = (e) =>{
        const {name,value,type}= e.target;
        if(type === 'number')
        {
          return  setMelt((prev)=>({
                ...prev,[name]:Number(value)
            }))
        }
        return    setMelt((prev)=>({
                ...prev,
                [name]:value
                 }));
    }

    const   handleSubmit =(e)=>{
        e.preventDefault()
        meltFn({melt}).then(res=>{
            if(res.Purpose)setAdd(true)
        })
    }

    return   <form className="w-full h-full mx-auto p-10 border-sky-300 border-spacing-3 " onSubmit={e=>handleSubmit(e)} >
                {Add?<SuccessMessage />:<div className="invisible "></div>}
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text"  id="purpose" name="purpose" value={melt.purpose} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="purpose" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Purpose</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number"  id="ghatti" name="ghatti" value={melt.ghatti} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="ghatti" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ghatti Weight</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number"  id="pure" name="pure" value={melt.pure} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="pure" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pure Weight</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number"  id="melted" name="melted" value={melt.melted} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="melted" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Melted Weight</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number"  id="chura" name="chura" value={melt.chura} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="chura" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Chura Weight</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text"  id="Remark" name="remark" value={melt.remark} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="Remark" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Remark</label>
                </div>
                <button className="btn w-24 mx-5 text-xl" type="submit" disabled={Loading}>Add</button>
                <div className="error-msg">{Error}</div>
                    </form>

}