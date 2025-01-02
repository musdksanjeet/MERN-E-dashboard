import React from "react";

const SignUp = ()=>{
    return(
        <div className="signup-page">
            <h3>Register</h3>
            <input type="text" placeholder="Enter Name"/>
            <input type="text" placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password"/>
            <button className="register-btn">Register</button>
        </div>
    );
}

export default SignUp;