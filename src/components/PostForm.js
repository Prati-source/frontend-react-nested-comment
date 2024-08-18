import { useState } from "react"
import { useAsyncFn } from "../hooks/useAsync"
import { createPost } from "../services/posts"
import { Navigate } from "react-router-dom"

export  function PostForm() {
    
    const [title, setTitle] = useState()
    const [postbody,setPostbody] = useState()
    const {Loading, Error, execute:createPostFn} = useAsyncFn(createPost)

    
    function  handleSubmit (e){
        e.preventDefault();
        return createPostFn({title,postbody}).then(<Navigate replace="true" to="/posts" />)
        

    }
    return <form class="space-y-4 dark:bg-gray-800 dark:text-gray-100 px-10" onSubmit={(e)=>{handleSubmit(e)}}>
          <div>
            <label for="title" class="block text-sm font-medium dark:text-gray-300" >Title</label>
            <input type="text" id="title"  placeholder="Set your Title"   onChange={(e)=>{setTitle(e.target.value)}} name="title" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700" />
          </div>
          <div>
            <label for="body" class="block text-sm font-medium dark:text-gray-300">Body</label>
            <textarea id="body" name="body" placeholder="Describe your Content" value={postbody}    onChange={(e)=>{setPostbody(e.target.value)}} rows="4" class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700"></textarea>
          </div>
          <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600">{Loading?"Loading" :"Post"}</button>
          <div className="error-msg">{Error}</div>
        </form>
        
        
}