
import Cookies from 'js-cookie';

 function useUser(){
    
    if(Cookies.get('userId'))
    {
    return  { id: document.cookie.match(/userId=(?<id>[^;]+);?$/).groups.id }
    }
    return 
}



export default useUser