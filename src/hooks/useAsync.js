import { useState, useEffect, useCallback } from "react"



export function useAsync(func, dependencies =[]){
    const {execute, ...state} = useAsyncInternal(func, dependencies, true)
    useEffect(() => {
      execute()
    }, [execute])
    return state
}

export function useAsyncFn(func, dependencies=[]){
    return useAsyncInternal(func, dependencies, false)
}

function useAsyncInternal(func, dependencies, intialLoading = false){
    const [Loading, setLoading] =  useState(intialLoading)
    const [Error, setError] = useState()
    const [Value, setValue] = useState()


    const execute = useCallback((...params) => {
      setLoading(true)
      return func(...params)
            .then(data => {
                setValue(data)
                
                setError(undefined)
                return data
            })
            .catch(error => {
                setValue(undefined)
                setError(error)
                return Promise.reject(error)
            })
            .finally(() =>{
                setLoading(false)
            })


    }, dependencies    )

    return { Loading, Error, Value, execute}


}




