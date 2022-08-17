

import { Link } from 'react-router-dom';
import { useAsync } from '../hooks/useAsync';
import { getPost  } from '../services/posts'

export function PostList() {
  const { Loading, Error, Value: posts} = useAsync(getPost)
   
  if(Loading) return <h1>Loading</h1>
  if(Error) return <h1 className='error-msg'>{Error}</h1>
    
  return posts.map(post => {
      return (<h1><Link key={post.id} to={'/posts/'+post.id}>
      {post.title}</Link></h1>
      )
    })
  
}
