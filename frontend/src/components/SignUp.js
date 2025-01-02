import React,{useState} from "react";

const SignUp = ()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const registerData =()=>{
        console.log(name,email,password);
    }
    return(
        <div className="register-page">
            <h3>Register</h3>
            <input className="register-input" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="register-input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="register-input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button className="register-btn" onClick={registerData}>Register</button>
        </div>
    );
}

export default SignUp;