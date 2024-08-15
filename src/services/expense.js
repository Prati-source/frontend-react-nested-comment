import { requests } from "./requests";

export function getexpense(){
    return  requests(`/expense`,)
}

export function addExpense({category,description,client,payMeth,status,location,amount,taxAmt}){
    return requests(`/expensecreate/add`,{
    method: "POST",
    data:{ category,description,client,payMeth,status,location,amount,taxAmt} 
    })
}