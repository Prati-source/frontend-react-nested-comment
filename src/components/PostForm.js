import { useState } from "react"
import { useAsyncFn } from "../hooks/useAsync"
import { createPost } from "../services/posts"
import { usePost } from "../context/PostContext"
import { Navigate } from "react-router-dom"

export  function PostForm() {
    
    const [title, setTitle] = useState()
    const [postbody,setPostbody] = useState()
    const {Loading, Error, execute:createPostFn} = useAsyncFn(createPost)

    
    const  handleSubmit = (e) =>{
        e.preventDefault()
        return createPostFn({title,postbody}).then(<Navigate replace="true" to="/posts" />)
        

    }
    return <form onSubmit={e => handleSubmit(e)}>
        <div className="flex flex-col mx-3   ">
            <textarea className="message-input font-mono text-xl dark:bg-slate-500 dark:text-white m-12 h-64 flex-initial  mx-4 dark:placeholder:text-white " placeholder="Set Your Title" value={title} onChange={(e)=> {setTitle(e.target.value)}}></textarea>
            <textarea className="message-input dark:border-gray-800 dark:bg-gray-500 dark:text-white h-96 m-12 dark:placeholder:text-white"  placeholder="describe your content..."  value={postbody} onChange={(e)=>{setPostbody(e.target.value)}}></textarea>
            <button className="btn w-24 mx-5 text-xl" type="Submit" disabled={Loading}>{Loading? "Loading" : "Post"}</button>
        </div>
        <div className="error-msg">{Error}</div>
    </form>
}