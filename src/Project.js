import React from "react";
import "./supermarket.css";

const Project  =() => {
    return(
        <div ClassName = "Project">
<h1>Sai Satyam Department Store</h1>
<h3>12th Cross Road, Thirunagar Colony<br></br>Mob no:6384552305</h3>
<p>A department store has several departments housed under the same roof to facilitate buying, customer service, and merchandising. A department store is a large store, divided into departments which sell such products as furnishings, electronics, clothing, footwear, toys, cosmetics, and sometimes also groceries.</p>
<img src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?cs=srgb&dl=pexels-anna-shvets-3962285.jpg&fm=jpg"height="250px"width="550px"></img>
<br></br>
<h2><u>GROCERY LIST</u></h2>
<ol><li>Diary Products</li>
   <ul>
   <li>Milk</li>
    <li>Paneer</li>
    <li>Cheese</li>
    <li>Curd</li>
    <li>Butter</li>
    <li>Ghee</li>
    <li>Milk powder</li>
     <li>Condensed Milk</li>
   </ul>
   <li>Biscuits</li>
   <ul>
   <li>Good day</li>
    <li>Marie Gold</li>
    <li>Dark Fantasy</li>
    <li>Oreo</li>
    <li>Hide & Seek</li>
    <li>Krack Jack</li>
    <li>Bourbon</li>
    <li>Nutri choice</li>
   </ul>
   <li>Chocolates</li>
   <ul>
   <li>Diary Milk</li>
    <li>Kit Kat</li>
    <li>Milky Bar</li>
    <li>Cadbury</li>
    <li>Ferrero Rocher</li>
    <li>Snickers</li>
    <li>Perk</li>
    <li>Hershey's</li>
    <li>Lotte</li>
    <li>Coffe bite</li>
   </ul>
   <li>Frozen Foods</li>
   <ul>
   <li>Meals</li>
    <li>Pizza</li>
    <li>Icecream</li>
    <li>Waffles</li>
    </ul>
    <li>Snacks</li>
   <ul>
   <li>Chips</li>
    <li>Lays</li>
    <li>Nuts</li>
    <li>Popcorns</li>
    <li>Raisins</li>
    </ul>
   <li>Vegetables</li>
   <ul>
   <li>Carrot</li>
    <li>Broccoli</li>
    <li>Egg Plant</li>
    <li>pumpkin</li>
    <li>Bottle Guard</li>
    <li>Radish</li>
    <li>Brinjal</li>
   </ul>
</ol>
<div class ="form center">
<form name = "form1">
    <tr>
        <td>Name:</td>
        <td><input type = "txt" name = "userName"></input></td></tr>
         <tr>
        <td>Email:</td>
        <td><input type = "txt" name = "mailid"></input></td></tr>
         <tr>
        <td>Date of Birth:</td>
        <td><input type = "txt" name = "dob"></input></td></tr>
         <tr>
        <td>Mobile No:</td>
        <td><input type = "txt" name = "mobno"></input></td></tr>
        <tr>
            <td><input type = "button" value = "submit"></input></td>
        </tr>
</form>
</div>
        </div>
    );

}
export default Project;