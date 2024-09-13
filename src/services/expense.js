import { requests } from "./requests";
import Cookies from "js-cookie"

export function getexpense(){
    const token = Cookies.get("token")
    return  requests(`/expense`,{method:"GET",data:{token}})
}

export function addExpense({category,description,client,payMeth,status,location,amount,taxAmt}){
    const token = Cookies.get("token")
    return requests(`/expensecreate/add`,{
    method: "POST",
    data:{ category,description,client,payMeth,status,location,amount,taxAmt,token} 
    })
}

export function postMelting ({melt}){
    const token = Cookies.get("token")
    return  requests(`/melting`,{
        method:'POST',
        data: {melt}
    })
}

export function postClient  ({client}){
    const  token = Cookies.get("token")
    return  requests(`/client/create`,{
        method:"POST",
        data:   {client,token}
    })
}

export function postItem({item}){
    const   token= Cookies.get("token")
    return  requests(`/client/item`,{
        method:'POST',
        data:   {item,token}
    })
}

export function getClient({type}){
    const   token=  Cookies.get("token")
    return  requests(`client/get`,{
        method:'POST',
        data:{type,token}
    })
}