import { sampleData } from "./sampleData";
import {useAtom} from "jotai"
import {Button,Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
export const UserAge=()=>{

const[userData,setUserData]=useAtom(sampleData)

 const handleChange=(e)=>{
    setUserData({...userData,Age:e.target.value})
 }
 const navigate = useNavigate();

const handleNext=()=>{
   navigate('/UserEmail');
}

return(
<div>
    <div className="container mb-3 w-20px">
    <h4 className="my-3">Age Of The User</h4> 
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Age" onChange={handleChange}/>
      </Form.Group>
      </Form>
       <Button variant="info" onClick={handleNext}>Next</Button>
    </div>
</div>
)
}