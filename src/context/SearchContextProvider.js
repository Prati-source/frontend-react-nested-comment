import React,{createContext, useContext, useState} from 'react'


const SearchContext = createContext();





export const SearchContextProvider = ({children}) => {
  

  const [isLoading, setIsLoading ] = useState(false)
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState()
  
  

  

  const getResults = async(type,Address,URL) =>{
    setIsLoading(true)

    const response = await fetch(`${URL}${type}`,{
      method:'GET',
      headers:Address
    
   
    })
    const data = await response.json();
    console.log(data)
    setResults(data)
    setIsLoading(false)
  }

  return (
    <SearchContext.Provider value={{getResults, results, searchTerm, setSearchTerm ,isLoading}}>
        {children}
    </SearchContext.Provider>
  )
}

export const useResultContext = () => useContext(SearchContext)
