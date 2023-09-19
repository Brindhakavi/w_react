import React, {useEffect, useState} from "react";
import axios from "axios";
const ListProducts = () => {
    const[List, setList] = useState([]);
useEffect (() => {  
    axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) =>{
        setList(res.data);  
        console.log(res, "res")
    })
    .catch((err) => {
        console.log(err, "err")
    });
},[]);
console.log( List, "List");
  return( 
    <div>
         <table>  
            <thead>
<tr>
    <th>id</th>
    <th>title</th>
    <th>completed</th>
</tr> 
 </thead> 
  <tbody>
                {List.map((items,key) =>{
                return (
                    <tr>
                        
                        <td>{items.id}</td>
                        <td>{items.title}</td>
                        <td>{items.completed ?"True":"False"}</td>
                    </tr>
                )
                 } )}
            </tbody> </table></div>
)
                }           
export default ListProducts;