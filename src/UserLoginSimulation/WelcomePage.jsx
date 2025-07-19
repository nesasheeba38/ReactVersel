 import { UserAtom } from "./UserAtom"
import { useAtom } from 'jotai';
import Container from 'react-bootstrap/Container';
 
 export const WelcomePage=()=>{
      const [userDetails] = useAtom(UserAtom);

    const style= {
        backgroundColor : "#1fd1f9ff",
        height : "100vh",
        color : "#ea6ca5ff",
        
    }
    return(
        <div style={style}>
            <Container className="d-flex justify-content-center py-5">
            <h1>Welcome {userDetails.FirstName} {userDetails.LastName}</h1>
            </Container>  
        </div>
    );
};
 