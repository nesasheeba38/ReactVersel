import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const AddTransactionForm=({onSave})=>{
const [addTransaction,setAddTransaction]=useState({
    Date:"",
    Description:"",
    Amount:"",
    Type:"",
});
const handleChange=(key,value)=>{
  setAddTransaction({...addTransaction,[key]:value});
};
const handleSave=()=>{
    onSave(addTransaction);
};



return(
   <Form className="container my-5">
    <div className="mx-auto col-md-6">
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control type="text"onChange={(e)=>handleChange("Date",e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" onChange={(e)=>handleChange("Description",e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number"onChange={(e)=>handleChange("Amount",e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>type</Form.Label>
        <Form.Control type="text"onChange={(e)=>handleChange("Type",e.target.value)}/>
      </Form.Group>
      <div className="d-flex justify-content-end">
        <Button variant="info" onClick={handleSave}>Save</Button>
      </div>
       </div>
    </Form>
  )};