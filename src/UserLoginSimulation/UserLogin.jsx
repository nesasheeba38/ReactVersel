import { UserAtom } from "./UserAtom";
import {useNavigate} from 'react-router-dom';
import { useAtom} from 'jotai';
import{Modal,Form,Button} from'react-bootstrap';


export const UserLogin=()=>{


    const[userDetails,setUserDetails]=useAtom(UserAtom);

    const handleChange=(key,value)=>{
         setUserDetails({...userDetails,[key]:value})
};
const navigate=useNavigate();
const handleNext=()=>{
navigate('./WelcomePage');
}
return(
    <div>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=>handleChange("firstname", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" onChange={(e)=>handleChange("lastname", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter Email" onChange={(e)=>handleChange("Email", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="Enter Pasword" onChange={(e)=>handleChange("password", e.target.value)}/>
      </Form.Group>
      </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleNext}>Login</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
  );

};