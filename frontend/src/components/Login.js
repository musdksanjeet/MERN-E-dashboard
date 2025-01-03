import React,{ useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
   
    useEffect(()=>{
        const auth = localStorage.getItem('user');
            if(auth){
                navigate('/');
            }
    });

    const loginData = async()=>{
       let response = await fetch('http://127.0.0.1:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:
            {            
                'Content-Type': 'application/json',
            },
       });

       const result = await response.json(); 

       if (result && result.success) {
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/');
        } else {
            alert("Login failed: " + result.message);
        }
    }

    return(
        <div className="login-page">
            <h3>Login</h3>            
            <input className="login-input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
            <input className="login-input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <button className="login-btn" onClick={loginData}>Login</button>
        </div>
    );
}

export default Login;