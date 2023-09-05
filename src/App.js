
 import "./align.css"; import { useState } from "react";
export default function App()
 {
     const [num,setnum] = useState(3);

 return (
    <div className = "num">
         num{num}
         <div>
              <button onClick={()=>setnum(num*2)}>*</button>
            <button onClick = {()=>setnum(num/2)}>/</button>
        </div>
    </div>
)
}

