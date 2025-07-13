import {Button} from "react-bootstrap";
import {ProductsTable} from "./ProductsTable"
import { AddProduct } from "./Module/AddProduct";
import { useState } from "react";
export const Products=()=>{

    const [showAddProduct,setShowAddProduct]=useState(false);
    const[list,setList]=useState([]); 
    const addProduct=()=>{
    setShowAddProduct(true);
    };
    
 return(
        <div className=" container my-4">
        <div className=" d-flex flex-column gap-5">
        <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={addProduct}>Add Product</Button>
        </div>
        <ProductsTable list={list}/>
        {showAddProduct && (<AddProduct
        onHide={()=>setShowAddProduct(false)}
        onSave={(value)=>setList([...list,value])}
        />)}
        </div>
        </div>
    );
};