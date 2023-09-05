import { useState } from "react";
export default function multiple()
{
    const [multiple,setmultiple] = useState(3);
}
return (
    <div classname = "multiple">
         multiple{multiple}
        <div>
            <button onClick={()=>setmultiple(multiple*2)}
            >*</button>
        </div>
    </div>
);

