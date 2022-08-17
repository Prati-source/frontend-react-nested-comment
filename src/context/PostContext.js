import React, {useContext, useMemo, useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { useAsync } from "../hooks/useAsync"
import { getPostUnique } from "../services/posts"



const Context= React.createContext()


export function usePost(){
    return  useContext(Context)
}

export function PostProvider({children}){
    const id = useParams()
    
    const {Loading, Error, Value: post}=useAsync(()=> getPostUnique(id),[id])

    const [comment, setComment] = useState([])

    useEffect(() => {
    
        if(post?.comment == null) return
        setComment(post.comment)
      
    }, [post?.comment])

    const groupCommentByParentId =useMemo(() => {
        
        const Group = {}
        
        comment.forEach((comment)=>{
        
            Group[comment.parentId] ||= []
            Group[comment.parentId].push(comment)
            
           
        })
    
        return Group
    }, [comment])

    
   
  
    function getReplies(parentId){
        return groupCommentByParentId[parentId]
    }

    function createLocalComment(comment){
        setComment(prevComment => {
            return [comment, ...prevComment]
        })
    }
    

    function updateLocalComment( {id, message}){
        
        setComment(prevComments => {
            return prevComments.map((comment) => {
               
                if(comment.id === id ){
                    return {  ...comment, message}
                }
                else{
                    
                    return comment 
                }
            })
        })
    }

    function toggleLocalComment( {id, addlike}){
        setComment(prevComments => {
            
            return prevComments.map( (comment) => {
              
                if(id === comment.id){
 
                    if(addlike.addlike) {
                        
                        return {
                        ...comment,
                        likeCount: comment.likeCount + 1,
                        likedByMe: true

                        }
                    } else {
                    
                        return {
                            ...comment,
                            likeCount: comment.likeCount - 1,
                            likedByMe: false
                        }
                        }
                
                }else{
                    return comment
                }
                
            })
        })
    }

    function deleteLocalComment(id){
      setComment(prevComment =>{
        return prevComment.filter(comment => comment.id !== id)
      })

    }
    return <Context.Provider value={{
                        post:{...post, id},
                        getReplies,
                        createLocalComment,
                        updateLocalComment,
                        deleteLocalComment,
                        toggleLocalComment,
                        rootComments : groupCommentByParentId[null]
                    }}>{Loading?
                    <h1>Loading</h1>
                    :Error? 
                    <h1 className="error-msg">Error</h1>
                    : (children)}
            </Context.Provider>
}