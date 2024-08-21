
import { requests} from "./requests";

export function register ({username, password, re_password}){
    console.log("god")
    return requests('/register',{
        method: "POST",
        data: {username, password, re_password}
    }
        )
}

export function login ({username, password}){
    return requests('/login', {
        method:'POST',
        data: {username, password}
    })
}

export function homescreen (){
    return requests('home')
}