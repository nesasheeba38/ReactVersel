import {Table} from "react-bootstrap"
export const ProductsTable=({list})=>{
    return (
     <Table border striped>
        <thead>
        <tr>
          <th>Product ID</th>
          <th>Customer Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Seller Name</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
         <tr>
           <td>1</td>
           <td>Praveen</td>
           <td>Mobile Phone</td>
           <td>150000</td>
           <td>Rubi</td>
           <td>Active</td>
        </tr>
         <tr>
           <td>2</td>
           <td>Madhu</td>
           <td>Labtop</td>
           <td>450000</td>
           <td>Arun</td>
           <td>Active</td>
        </tr>
         <tr>
           <td>3</td>
           <td>David</td>
           <td>AC</td>
           <td>250000</td>
           <td>Kavitha</td>
           <td>Active</td>
        </tr>
        {list.map((product)=>(
          <tr key={product.productID}>
            <td>{product.productID}</td>
            <td>{product.customerName}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.sellerName}</td>
           
          </tr>
        ))}
        </tbody>

     </Table>
    )
};