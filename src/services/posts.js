import { requests } from "./requests";

export function getPost(){
    
    return requests("/posts")
}

export function getPostUnique(post){
    
    return requests(`/posts/`+post.id)
}

export function createPost({postbody,title,tn}){
    return requests(`/postcreate`,{
        method:"POST",
        data:{postbody,title,tn}
    })
}
