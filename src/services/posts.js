import { requests } from "./requests";

export function getPost(){
    
    return requests("/posts")
}

export function getPostUnique(post){
    
    return requests(`/posts/`+post.id)
}
