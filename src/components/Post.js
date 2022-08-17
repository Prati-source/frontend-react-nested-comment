 
import { usePost } from "../context/PostContext"
import { useAsyncFn } from "../hooks/useAsync"
import { createComments } from "../services/comments"
import {CommentForm} from "./CommentForm"
import { CommentList } from "./CommentList"

export function Post(){
    const {post, rootComments, createLocalComment}= usePost()
    const { Loading, Error, execute: createCommentFn} = useAsyncFn(createComments)
    


    

    function onCommentCreate(message){
        return createCommentFn({postId:post.id, message })
                .then(createLocalComment)

    }

    return <>
    <h1>
        {post.title}
    </h1>
    <article>{post.body}</article>
    <h3 className="comments-title">Comments</h3>
    <CommentForm Loading={Loading} Error={Error} onSubmit={onCommentCreate}  />
    <section>{rootComments!= null && rootComments.length >0 && (
        <div className="mt-4">
            <CommentList comments={rootComments} />
        </div>
    )}</section>{}
    </>

}
