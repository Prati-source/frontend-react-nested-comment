

import { Link } from 'react-router-dom';
import { useAsync } from '../hooks/useAsync';
import { getPost  } from '../services/posts'
import useUser from '../hooks/useUser';

export function PostList() {
  const { Loading, Error, Value: posts} = useAsync(getPost)

  if(Loading) return <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-blue-400 h-12 w-12"></div>
    <div class="flex-1 space-y-4 py-1">
      <div class="h-4 bg-blue-400 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-blue-400 rounded"></div>
        <div class="h-4 bg-blue-400 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>
  if(Error) return <h1 className='error-msg'>{Error}</h1>
    
  return posts.map(post => {
      return (<div className=''><Link key={post.id} to={'/posts/'+post.id}><div className='dark:bg-gray-500 dark:text-white  mx-5 py-1    md:min-h-full md:h-24  my-3 font-light  bg-gray-50 border-2 dark:border-gray-600 dark:hover:bg-gray-600 text-blue-800 px-2 hover:bg-blue-200 hover:text-slate-200 rounded-2xl font-mono text-xl  '>
      {post.title}</div></Link></div>
      )
    })
  
}
                                                                                                              