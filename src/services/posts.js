import { requests } from "./requests";
import Cookies from "js-cookie"

export function getPost(){
    
    return requests("/posts")
}

export function getPostUnique(post){
    
    return requests(`/posts/`+post.id)
}

export function createPost({postbody,title,token}){
    return requests(`/postcreate`,{
        method:"POST",
        data:{postbody,title,token}
    })
}

export function ownPost(){
    return requests(`/posts/own`)
}

export function deletePost({id}){
    const token = Cookies.get("token")
    return  requests(`/posts/${id}`,{
        method:"DELETE",
        data:{token}
    })
}