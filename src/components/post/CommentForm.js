import { useState } from "react"

export  function CommentForm({intialValue='', Loading, Error, autoFocus= false, onSubmit}) {
    const [message, setMessage] = useState(intialValue)
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        onSubmit(message).then(()=> setMessage(''))

    }
    return <form onSubmit={e => handleSubmit(e)}>
        <div className="comment-form-row mx-3 ">
            <textarea className="message-input dark:border-gray-800 dark:bg-gray-400 dark:text-white"  autoFocus={autoFocus} value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button className="btn" type="Submit" disabled={Loading}>{Loading? "Loading" : "Comment"}</button>
        </div>
        <div className="error-msg">{Error}</div>
    </form>
}