 
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
    <h1 className="ml-4 font-medium leading-tight text-5xl mt-0 mb-2 dark:text-white">
        {post.title}
    </h1>
    <article className=" ml-4 font-sans font-light dark:text-white text-xl mb-6">{post.body}</article>
    <h3 className="ml-4 font-medium leading-tight text-xl mt-0 mb-2 text-white underline">Comments</h3>
    <CommentForm Loading={Loading} Error={Error} onSubmit={onCommentCreate}  />
    <section>{rootComments!= null && rootComments.length >0 && (
        <div className="mt-4 mx-4">
            <CommentList comments={rootComments} />
        </div>
    )}</section>{}
    </>

}
