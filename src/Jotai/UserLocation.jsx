import {sampleData} from "./sampleData";
import {useAtom} from "jotai"
import {Button,Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
export const UserLocation=()=>{

const[userData,setUserData]=useAtom(sampleData)

 const handleChange=(e)=>{
    setUserData({...userData,Location:e.target.value})
 }
 const navigate = useNavigate();

const handleNext=()=>{
   navigate('/Summary')
}

return(
<div>
    <div className="container mb-3 w-20px">
    <h4 className="my-3">Location Of The User</h4> 
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>location:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your location" onChange={handleChange}/>
      </Form.Group>
      </Form>
       <Button variant="info" onClick={handleNext}>Next</Button>
    </div>
</div>
)
};