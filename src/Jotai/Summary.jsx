import {sampleData} from "./sampleData"
import{useAtom} from "jotai"


export const Summary=()=>{
  const [userData] =useAtom(sampleData) 

return(
<div>
<div className="cntainer m-3">
      <h3>The Summary of the User:{userData.Name}</h3>
      <p>Department:{userData.Department}</p>
      <p>Department:{userData.Age}</p>
      <p>Department:{userData.Email}</p>
      <p>Department:{userData.Location}</p>
</div>
</div>
)
};