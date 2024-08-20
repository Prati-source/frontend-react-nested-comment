
import Cookies from 'js-cookie';

 export function useUser(){
    
    if(Cookies.get('userId'))
    {
    
    return  { id: document.cookie.match(/userId=([^;]*)/)[1], name: document.cookie.match(/name=([^;]*)/)[1]}
    }
    return 
}



