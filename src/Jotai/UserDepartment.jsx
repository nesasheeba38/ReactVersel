import { sampleData } from "./sampleData";
import {useAtom} from "jotai"
import {Button,Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
export const UserDepartment=()=>{

const[userData,setUserData]=useAtom(sampleData)

 const handleChange=(e)=>{
    setUserData({...userData,Department:e.target.value})
 }
 const navigate = useNavigate();

const handleNext=()=>{
   navigate('/UserAge');
}

return(
<div>
    <div className="container mb-3 w-20px">
    <h4 className="my-3">Department Of The User</h4> 
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Department:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Department" onChange={handleChange}/>
      </Form.Group>
      </Form>
       <Button variant="info" onClick={handleNext}>Next</Button>
    </div>
</div>
)
}