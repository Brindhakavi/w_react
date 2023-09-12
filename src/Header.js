import React from "react";
import "./Styles.css";

const Header = () => {
    return (
        <div className = "Header">
           <h2> WELCOME TO FRONTEND DEVELOPMENT</h2>
            <p>HTML is used to develop a web pages<br></br>
            HTML element is a collection of start and end tags with the content inserted in between them</p>
            <ol className = "ol">
                <li>HTML
                    <ul><li>Hypertext Markup Language</li></ul>
                </li>
                <li>CSS
                    <ul><li>Cascading Style Sheet</li></ul>
                </li>
                <li>JS</li>
                <ul><li>Java Script</li></ul>
                <li>React js</li>
                <ul><li>React Javascript</li></ul>
            </ol>
        </div>
    );
}
export default Header;