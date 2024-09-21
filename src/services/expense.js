import { requests } from "./requests";

const token = localStorage.getItem('token')

export function getexpense(){
    
    return  requests(`/expense/get`,{method:"POST",data:{token}})
}

export function addExpense({category,description,client,payMeth,status,location,amount,taxAmt}){
    
    return requests(`/expensecreate/add`,{
    method: "POST",
    data:{ category,description,client,payMeth,status,location,amount,taxAmt,token} 
    })
}

export function postMelting ({melt}){
    
    return  requests(`/melting`,{
        method:'POST',
        data: {melt}
    })
}

export function postClient  ({client}){
   
    return  requests(`/client/create`,{
        method:"POST",
        data:   {client,token}
    })
}

export function postItem({item}){
   
    return  requests(`/client/item`,{
        method:'POST',
        data:   {item,token}
    })
}

export function getClient({type}){
   
    return  requests(`client/get`,{
        method:'POST',
        data:{type,token}
    })
}

export  function   getItem(){
    return  requests(`client/item/get`,{
        method:"POST",
        data:{token}
    })
}

export  function    postCollection({collection}){
    return  requests(`client/collection/create`,{
        method:"POST",
        data:{collection,token}
    })
}

export  function    getCollection(){
    return  requests(`client/collection/get`,{
        method:"POST",
        data:{token}
    })
}