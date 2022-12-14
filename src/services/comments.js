import { requests } from "./requests";

export function createComments({postId, message, parentId}){
     postId = postId.id
   
    return requests(`posts/${postId}/comments`, {
        method:"POST",
        data:{message,parentId, postId}
    })
}


export function updateComments({postId, message, id}){
    postId = postId.id

   return requests(`posts/${postId}/comments/${id}`, {
       method:"PUT",
       data: {message}
   })
}

export function deleteComments({postId, id}){
    postId = postId.id

   return requests(`posts/${postId}/comments/${id}`, {
       method:"DELETE",
    
   })
}


export function toggleCommentLike({postId, id}){
    postId= postId.id
    return requests(`posts/${postId}/comments/${id}/togglelike`,{
        method:"POST"
    })
}