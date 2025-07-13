import Table from "react-bootstrap/Table"

export const TransactionList=({transaction})=>{
    return(
<div className="container my-5">
<div className="d-flex justify-content-center">
<h2>Transaction History</h2>
</div>

<div>
<Table bordered>
<thead>
 <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Amount</th>
        <th>Type</th>
    </tr>
    </thead>
    <tbody>
        {transaction?.map((data)=>(
        <tr key={data.Date}>
        <td>{data.Date}</td>
        <td>{data.Description}</td>
        <td>{data.Amount}</td>
        <td>{data.type}</td>
        </tr>
        ))}
    </tbody>
</Table>
</div>
</div>
)};