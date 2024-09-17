

import { Link } from 'react-router-dom';
import { useAsync } from '../../hooks/useAsync';
import { getPost  } from '../../services/posts';

export function PostList() {
  const { Loading, Error, Value: posts} = useAsync(getPost)

  if(Loading) return <div class="border border-blue-300 shadow ml-2 rounded-md p-4 max-w-sm w-5/6 mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-blue-400 h-12 w-10"></div>
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
    
  return <div className="flex flex-col justify-center  h-screen bg-muted place-content-start dark:bg-background dark:text-white mt-10 mb-10 ">
                  <div className="w-full max-w-screen-md p-12 dark:bg-card dark:text-card-foreground">
                    {posts.map(post => {
                    return <div className="grid gap-2 hover:scale-110 hover:bg-slate-200 bg-slate-100 dark:hover:text-slate-400 dark:bg-slate-600 rounded-lg mt-2 mb-2 "  >
                        <Link key={post.id} to={'/posts/'+post.id}
                          className="flex items-center justify-between rounded-md bg-background dark:bg-card dark:hover:bg-muted hover:bg-muted px-4 py-3">
                          <div className="text-sm font-medium">{post.title}</div>
                          <svg className="h-4 w-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24"height="24" viewBox="0 0 24 24"  fill="none"   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                            <path d="m9 18 6-6-6-6" />
                            </svg>
                        </Link> 
                      </div>}
                 
      
  )} </div>
  </div>
}


                                                                                                              