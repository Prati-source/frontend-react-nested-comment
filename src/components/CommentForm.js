import { useState } from "react"

export  function CommentForm({intialValue='', Loading, Error, autoFocus= false, onSubmit}) {
    const [message, setMessage] = useState(intialValue)
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        onSubmit(message).then(()=> setMessage(''))

    }
    return <form onSubmit={e => handleSubmit(e)}>
        <div className="comment-form-row">
            <textarea className="message-input"  autoFocus={autoFocus} value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <button className="btn" type="Submit" disabled={Loading}>{Loading? "Loading" : "Post"}</button>
        </div>
        <div className="error-msg">{Error}</div>
    </form>
}