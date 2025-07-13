import { useState } from "react";
import {Modal,Form,Button} from "react-bootstrap"
export const AddProduct=({onHide,onSave})=>{
    const[product,setProduct]=useState({
    productID:"",
    customerName:"", 
    category:"",
    price:null,
    sellerName:"",  
    });
    const handClose=()=>{
        onHide();
    };
    const handSave=()=>{
        onSave(product);
        handClose();
    };
    
    const updateProduct=(key,value)=>{
       setProduct({
        ...product,[key]:value,
       });
    };
 
    return(
  <Modal show={true}size="sm" backdrop="false">
   <Modal.Header>
    <Modal.Title>Add Product</Modal.Title>
    </Modal.Header>
    <Modal.Body className="d-flex flex-column gap-3">
     <Form.Group className="W-100">
     <Form.Label>productID</Form.Label>
     <Form.Control type="text" onChange={(e)=>updateProduct("productID",e.target.value)}/>
    </Form.Group>
     <Form.Group className="">
     <Form.Label>Customer Name</Form.Label>+
     <Form.Control type="text" onChange={(e)=>updateProduct("customerName",e.target.value)}/>
    </Form.Group>
     <Form.Group className="">
     <Form.Label>Category</Form.Label>
     <Form.Control type="text"onChange={(e)=>updateProduct("category",e.target.value)}/>
    </Form.Group>
    <div className="d-flex gap-2 W-100">
     <Form.Group className="mb-3 W-100">
     <Form.Label>Price</Form.Label>
     <Form.Control type="number"onChange={(e)=>updateProduct("price",e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3 W-100">
     <Form.Label>Seller Name</Form.Label>
     <Form.Control type="text"onChange={(e)=>updateProduct("sellerName",e.target.value)}/>
    </Form.Group>
    </div>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary"onClick={handClose}>Cancel</Button>
    <Button variant="primary"onClick={handSave}>Save</Button>
    </Modal.Footer> 
    </Modal>
    );
};