import {useAtom} from 'jotai';
import{ cardAtom } from './cardAtom';
import { Button } from 'react-bootstrap';


export const ComponentA=()=>{
    const[count,setCount]=useAtom(cardAtom);

    const increment =()=>{
        setCount(count+1);
    };
    return(
        <div className='d-flex justify-content-center'>
        <Button variant="info" onClick={increment}>increment</Button>
        </div>
    );
};
