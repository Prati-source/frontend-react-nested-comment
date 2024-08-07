import { IconBtn } from "./IconBtn"
import { FaEdit, FaHeart, FaRegHeart, FaReply, FaTrash } from "react-icons/fa"
import { usePost } from "../context/PostContext"
import { CommentList } from "./CommentList"
import { useState } from "react"
import { CommentForm } from "./CommentForm"
import { useAsyncFn } from "../hooks/useAsync"
import { createComments, deleteComments, toggleCommentLike, updateComments } from "../services/comments"
import  useUser  from "../hooks/useUser"

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    dateStyle:"medium",
    timeStyle:"medium"}) 

export function Comment({id,message, createdAt, user, likeCount, likedByMe}){
    const {post, getReplies, createLocalComment, updateLocalComment, deleteLocalComment, toggleLocalComment} = usePost()
    const ChildComment  = getReplies(id)
    const [areChildrenHidden, setAreChildrenHidden] = useState(false)
    const [isReplying, setIsReplying] = useState(false)
    const [isEditing, setIsEditing]  = useState(false)
    const createCommentFn = useAsyncFn(createComments)
    const currentuser = useUser();
    function ReplyComment(message){
        return createCommentFn.execute({ postId: post.id, message, parentId: id}).then(comment => {
            setIsReplying(false)
            createLocalComment(comment)})
    }
    const editCommentFn = useAsyncFn(updateComments)

    function EditComment(message){
        return editCommentFn.execute({ postId: post.id, message, id})
            .then(comment => {
            setIsEditing(false)

            updateLocalComment( {id, message:comment.message})})
    }
    const deleteCommentFn = useAsyncFn(deleteComments)
    function DeleteComment(){
        return deleteCommentFn.execute({ postId: post.id, id})
                .then((comment) => {deleteLocalComment(comment.id)})
    }
    const toggleCommentLikeFn = useAsyncFn(toggleCommentLike)
    function OnToggleCommentLike(){
        return toggleCommentLikeFn.execute({ postId:post.id, id})
        .then((addlike) => {
          
            toggleLocalComment({id, addlike})
        })
    }

    

    return <>
    <div className="dark:bg-gray-800">
    <div className="comment dark:bg-gray-400 mt-4 border-gray-800 mb-4  ">
        <div className="header">
            <span className="font-medium leading-tight text-base mt-0 mb-2 text-blue-600 dark:text-gray-50">
                {user.name}
            </span>
            <span className="date dark:text-white">
                {dateFormatter.format(Date.parse(createdAt))}
            </span>
        </div>
        {isEditing ? <CommentForm autofocus intialValue={message} onSubmit={EditComment} Loading={editCommentFn.Loading} Error={editCommentFn.Error} /> :
        <div className="message dark:text-gray-50">{message}</div>

        }
        <div className="footer dark:bg-text-100">
            <IconBtn onClick={OnToggleCommentLike} disabled={ toggleCommentLikeFn.Loading}  Icon={likedByMe? FaHeart: FaRegHeart} aria-label={likedByMe? 'Unlike': 'Like'} >
               {likeCount}
            </IconBtn>
            <IconBtn isActive={isReplying}  Icon={FaReply} aria-label={isReplying? 'Cancel Reply':  "Reply"} onClick={() => setIsReplying(prev => !prev)}  />
                { (currentuser.id === user.id) && (<>
                <IconBtn Icon={FaEdit} isActive={isEditing} aria-label={isEditing? 'Cancel Edit': 'Edit'} onClick={() => setIsEditing(prev =>!prev)} />
                <IconBtn Icon={FaTrash} color='danger' aria-label='Delete' onClick={ DeleteComment} disabled ={deleteLocalComment.Loading}/>
                </>)}
        </div>
    </div>
        {isReplying && (
            <div className=" dark:bg-gray-800 ">
                <CommentForm autoFocus onSubmit={ReplyComment} Loading={createCommentFn.Loading} Error={createCommentFn.Error} />
            </div>
        )}
       
        {ChildComment?.length > 0 && (
            <>
                <div className={`nested-comments-stack ${areChildrenHidden? "hide": ""}`} >
                        <button className="collapse-line " aria-label="Hide Replies" onClick={() => setAreChildrenHidden(true)} />
                    <div className="nested-comments ">
                       
                        <CommentList comments={ChildComment} />
                    </div>
                    
                </div>
                <button
                    className={`btn mt-1 ${!areChildrenHidden?"hide": ""}`}
                    onClick={() => setAreChildrenHidden(false)}>
                        GetReplies
                    </button>
                
            </>
        )
    }</div>
    </>
}