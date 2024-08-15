import React,{useEffect} from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import {TailSpin} from 'react-loader-spinner'

import { useResultContext } from '../context/SearchContextProvider'

export const SearchResult = () => {
    const {results,isLoading, searchTerm, setSearchTerm, getResults} = useResultContext()
    const location = useLocation();
         useEffect(() => {
        if(searchTerm !== undefined){
        if(location.pathname === '/search'){
        getResults(`/search?q=${searchTerm}&num=30`,SearchAddress,SearchUrl)}
        if(location.pathname === '/images'){
        getResults('/images/search?q=Javascript',ImageAddress,ImageUrl)}
        }
        
    },[searchTerm]) 
    if(isLoading) return <Loading />
    const ImageUrl = 'https://bing-image-search1.p.rapidapi.com'
    const SearchUrl = 'https://bing-web-search1.p.rapidapi.com'
    let SearchAddress = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '9df8eb8c75msh3044ca11d447691p19e43cjsna756819884b4',
    'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
   }

   let ImageAddress ={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '9df8eb8c75msh3044ca11d447691p19e43cjsna756819884b4',
    'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
   }

  
    
    let data = results?.webPages?.value;
    console.log(data)
    console.log(searchTerm)
    
    switch (location.pathname){
        case '/search':
            return (<div className='justify-center flex flex-wrap flex-column  items-center ml-12  mr-12 ' >
                 {results?.webPages?.value.map(({id,name,url,snippet})=>(
                    <a key={id} className='w-full pb-5   ' target='_blank' href={url} rel="noreferrer">
                        <div className='text-sm hover:underline dark:text-white'>{url.length>30? url.substring(0,30):url}</div>
                        <div className=' text-lg text-blue-500  hover:underline '>{name}</div>
                        <div className='text-sm dark:text-white'>{snippet}</div>
                        
                    </a>
    ))}
            </div>)
        
        case '/news':
            return 'SEARCH';
        case '/images':
            return (<div className='flex flex-wrap overflow-hidden ml-4 dark:bg-slate-800 '>
                {results?.value?.map(({name,thumbnailUrl,webSearchUrl},index) => (
                    <a className=' flex flex-col justify-items-center border-2 dark:bg-slate-700 border-black m-2 rounded p-1  hover:shadow-xl shadow-black dark:text-white ' href={webSearchUrl} key={index} target='_blank' rel='noreferrer'>
                        <img src={thumbnailUrl} alt={name} loading='lazy' className='w-36 h-24' />
                        <div className=''>
                        <p className='w-36 break-words hover:underline    pl-5 text-sm mt-2'>
                            {name}
                        </p>
                        </div>
                    </a>
                ))}
            </div>)       
        default :
            return 'ERROR';
          
    }
}


 const Loading =()=> {
    return (
        <div className='flex justify-center items-center'>
            <TailSpin   />

        </div>
    )
}


