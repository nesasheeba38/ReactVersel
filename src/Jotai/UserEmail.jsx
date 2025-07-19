import {sampleData} from "./sampleData";
import {useAtom} from "jotai"
import {Button,Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
export const UserEmail=()=>{

const[userData,setUserData]=useAtom(sampleData)

 const handleChange=(e)=>{
    setUserData({...userData,Email:e.target.value})
 }
 const navigate=useNavigate();

const handleNext=()=>{
   navigate('/UserLocation');
}

return(
<div>
    <div className="container mb-3 w-20px">
    <h4 className="my-3">Email Of The User</h4> 
     <Form>
      <Form.Group className="mb-3" controlId="FormGroupEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Email" onChange={handleChange}/>
      </Form.Group>
      </Form>
       <Button variant="info" onClick={handleNext}>Next</Button>
    </div>
</div>
)
}