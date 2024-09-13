import { useAsync,useAsyncFn } from "../hooks/useAsync";
import { ownPost,deletePost } from "../services/posts";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function OwnPost(){
    const   deletePostFn= useAsyncFn(deletePost)
    const {Loading,Error,Value:posts}= useAsync(ownPost)
  const [localPost,setLocalPost]= useState({})
 
    if(Loading) return <div class="border border-blue-300 shadow ml-2 rounded-md p-4 max-w-sm w-full mx-auto">
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
    function handleDelete(id) {
        deletePostFn.execute({id}).then(res=>{
          console.log(res.id)
          for (let i = 0; i < posts.length; i++) {
            if (posts[i].id === res.id) {
              posts.splice(i, 1);
              break;
            }
          }
          console.log(posts)
    })
   
    }
    
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Your Posts</h1>
          {posts.length === 0 ? (
            <p className="text-gray-500">You haven't created any posts yet.</p>
          ) : (
            <div className="space-y-4">
              {posts.map(post => (
                <div key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600">{post.content}</p>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 flex justify-end">
                    <button 
                      onClick={() => handleDelete(post.id)}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ease-in-out duration-150"
                    >
                            <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                            />
                            </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }
