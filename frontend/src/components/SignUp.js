import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';

const SignUp = ()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }    
    });

    const collectData = async()=>{
        // console.log(name,email,password);

        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();  
        if (result && result.success) {
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/');
        } else {
            alert("Registration failed: " + result.message);
        }

    }
    return(
        <div className="register-page">
            <h3>Register</h3>
            <input className="register-input" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <input className="register-input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="register-input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button className="register-btn" onClick={collectData}>Register</button>
        </div>
    );
}

export default SignUp;