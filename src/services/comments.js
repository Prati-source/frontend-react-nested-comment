import { requests } from "./requests";
const token = localStorage.getItem('token')
export function createComments({postId, message, parentId}){
     postId = postId.id

    return requests(`posts/${postId}/comments`, {
        method:"POST",
        data:{message,parentId, postId,token}
    })
}


export function updateComments({postId, message, id}){
    postId = postId.id

   return requests(`posts/${postId}/comments/${id}`, {
       method:"PUT",
       data: {message,token}
   })
}

export function deleteComments({postId, id}){
    postId = postId.id

   return requests(`posts/${postId}/comments/${id}`, {
       method:"DELETE",
       data:{token}
   })
}


export function toggleCommentLike({postId, id}){
    postId= postId.id
    return requests(`posts/${postId}/comments/${id}/togglelike`,{
        method:"POST"
    })
}