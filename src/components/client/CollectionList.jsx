import { useAsync } from "../../hooks/useAsync"
import {getCollection} from "../../services/expense"

export function CollectionList(){
    const {Loading, Error, Value:collections} = useAsync(getCollection)

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

  return <div class=" flex flex-nowrap overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Client
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Item Weight
              </th>
              <th scope="col" class="px-6 py-3">
                  Pure Weight
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Date
              </th>
              <th scope="col" class="px-6 py-3 ">
                    Remark
              </th>
            </tr>
          </thead>  
          <tbody>
      
    {collections.customer.map(exp =>{
             return (exp.collection.map(ex=>{
                return( <tr class="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            {ex.type}
                        </th>
                        <td class="px-6 py-4">
                            {exp.name}
                        </td>
                        <td class="px-6 py-4  bg-gray-50 dark:bg-gray-800">
                            {ex.Ghatti_wgt}
                        </td>
                        <td class="px-6 py-4">
                            {ex.Pure_wgt}
                        </td>
                        <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            {ex.createdAt.match(/(\d{4}-\d{2}-\d{2})/g)[0]}
                        </td>
                        <td class="px-6 py-4 ">
                            {ex.Remark}
                        </td></tr>
                   
               )
              }))
              
              
  })} </tbody></table></div>
}