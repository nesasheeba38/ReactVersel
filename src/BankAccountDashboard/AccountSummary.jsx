import { useEffect, useState } from "react";
import{AccountDetails}from "./AccountDetails"
import { TransactionList } from "./TransactionList";
import { AddTransactionForm } from "./AddTransactionForm";
export const AccountSummary=()=>{    
const [account,setAccount]=useState({
    accountholderName:"Madhu",
    accountNumber:123290467,
    balance:20000,
});
const[transaction,setTransaction]=useState([]);
const getTransaction=()=>{
  const Data=[
{
   Date:"20-2-25",
   Description:"salary",
   Amount:20000,
   type:"credit",
},
{
   Date:"12-3-25",
   Description:"Grocery",
   Amount:30000,
   type:"Debit",
},
{
   Date:"2-4-25",
   Description:"salary",
   Amount:50000,
   type:"credit",

},
];
setTransaction(Data);
}
useEffect(()=>{
    getTransaction();
},[]);
const [updateCustomerData,setUpdateCustomerData]=useState([]);
return(
    
<div>
    <AccountDetails account={account}/>
    <TransactionList transaction={[...transaction,...updateCustomerData]}/>
    <AddTransactionForm onSave={(value)=>setUpdateCustomerData([...updateCustomerData,value])}/>
</div>
);
};
