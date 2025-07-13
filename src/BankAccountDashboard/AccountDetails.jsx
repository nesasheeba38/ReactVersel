export const AccountDetails=(props)=>{
    return(
<div className="container m-4">
    <div className="m-4">
        <h1>Bank Account Dashboard</h1>
    </div>
    <div>
    <p>AccountHolderName:{props.account.accountholderName}</p>
    <p>AccountNumber:{props.account.accountNumber}</p>
    <p>Balance:{props.account.balance}</p>
    </div>
    </div>
);
};
