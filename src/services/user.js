
import { requests} from "./requests";

export function register ({username, password, re_password}){
    console.log("god")
    return requests('/register',{
        method: "POST",
        data: {username, password, re_password}
    }
        )
}

export function login ({username, password,remember}){
    return requests('/login', {
        method:'POST',
        data: {username, password,remember}
    })
}

export function homescreen (){
    return requests('home')
}

export function logout(){
    return  requests('/logout')
}