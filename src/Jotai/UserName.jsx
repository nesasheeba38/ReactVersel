import {sampleData} from "./sampleData";
import {useAtom} from "jotai"
import {Button,Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"


export const UserName=()=>{

const[userData,setUserData]=useAtom(sampleData)

 const handleChange=(e)=>{
    setUserData({...userData,Name:e.target.value})
 }
 const navigate=useNavigate();

const handleNext=()=>{
   navigate('/UserDepartment');
}

return(
<div>
    <div className="container mb-3 w-20px">
    <h4 className="my-3">Name Of The User</h4> 
     <Form className="w-321px;">
     <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" onChange={handleChange}/>
      </Form.Group>
      </Form>
      <Button variant="info" onClick={handleNext}>Next</Button>
    </div>
</div>
)
};