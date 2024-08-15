import { Comment } from "./Comment"

export function CommentList({comments }){

    return comments.map(comment => (
        <div key={comment.id} className='comment-stack bg-white rounded-lg'>
            <Comment {...comment} />
        </div>
    ))

}