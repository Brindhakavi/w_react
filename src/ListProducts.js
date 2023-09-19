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
    <th>userId</th>
    <th>id</th>
    <th>title</th>
</tr> 
 </thead> 
  <tbody>
                {List.map((items,key) =>{
                return (
                    <tr>
                        <td>{items.userId}</td>
                        <td>{items.id}</td>
                        <td>{items.title}</td>
                    </tr>
                )
                 } )}
            </tbody> </table></div>
)
                }           
export default ListProducts;