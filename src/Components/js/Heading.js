import React from "react";
import "../css/Heading.css"
const Heading = () => {
    return (  
        <>
        <div className="contheading">
            <div className="title">
                <h1>SRM Hub</h1>
            </div>
            <div className="contverify">
                <button  className="b2">Sign Up</button>
                 <button className="b1">Login</button> 
            </div>
        </div>
        </>
    );
}
 
export default Heading;
