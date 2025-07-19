import{useAtom} from'jotai';
import{cardAtom} from './cardAtom';
import { Button } from 'react-bootstrap';
 
export const ComponentB=()=>{
const[count,setCount]=useAtom(cardAtom);

 const reset=()=>{
    setCount(0);
 };
 return(
    <div className='d-flex justify-content-center'>
    <h4>{count}</h4>
     <Button variant="warning" onClick={reset}>Reset</Button> 
    </div>
 );
};