
import Cookies from 'js-cookie';

 export function useuser(){
    
    if(Cookies.get('userId'))
    {
    
    return  { id: document.cookie.match(/userId=([^;]*)/)[1], name: document.cookie.match(/name=([^;]*)/)[1]}
    }
    return 
}



