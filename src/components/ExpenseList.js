import { useAsync } from "../hooks/useAsync"
import {getexpense} from "../services/expense"

export function ExpenseList(){
    const {Loading, Error, Value:exps} = useAsync(getexpense)

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
                  Client
              </th>
              <th scope="col" class="px-6 py-3">
                  Category
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Status
              </th>
              <th scope="col" class="px-6 py-3">
                  description
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Employee ID
              </th>
              <th scope="col" class="px-6 py-3">
                  Time
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Amount
              </th>
              <th scope="col" class="px-6 py-3 ">
                  Tax Amount
              </th>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                  Location
              </th>
            </tr>
          </thead>  
    {exps.map(exp =>{
    return (
              <tbody>
                      <tr class="border-b border-gray-200 dark:border-gray-700">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                              {exp.client}
                          </th>
                          <td class="px-6 py-4">
                              {exp.category}
                          </td>
                          <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              {exp.Status}
                          </td>
                          <td class="px-6 py-4">
                              {exp.description}
                          </td>
                          <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              {exp.id}
                          </td>
                          <td class="px-6 py-4 ">
                              {exp.createdAt.match(/(\d{4}-\d{2}-\d{2})/g)[0]}
                          </td>
                          <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              {exp.amount}
                          </td>
                          <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              {exp.taxAmount}
                          </td>
                          <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              {exp.location}
                          </td>
                      </tr>
                  </tbody>
              
         )
  })}</table></div>
}
