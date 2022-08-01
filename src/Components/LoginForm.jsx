import React, { useEffect, useState } from "react";
import IconsContainer from "./IconsContainer";
import { useNavigate } from "react-router-dom";
 

const LoginForm = ()=>{

    const navigate = useNavigate();

    const [userName , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [success , setSuccess] = useState(false)
    const [error , setError] = useState(false)

    const authenticate = ()=>{
        if(userName == "apoorv" && password == "123"){
            setSuccess(true)
            setError(false)
            navigate('/')
        }else{
            setError(true)
            setSuccess(false);
        }
    }

    useEffect(()=>{
       setTimeout(() => {
        setSuccess(false);
        setError(false)
       }, 1000);
    } , [success , error])

    return(
        <>
            <div className="mainContainer">
                { success && <h3 className="success">Login Sucessful</h3> }
                { error && <h3 className="danger">Error in Password or email</h3> }
               <h2>Welcome</h2>
               <div className="inputContainer">
                    <input type="text" placeholder="Username" value={userName} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div className="buttonContainer">
                    <button onClick={authenticate}>Login</button>
               </div>
                <div className="text">
                    <h5>or login with</h5>
                </div>
                <hr className="line" />
                <IconsContainer/>
                <div className="forgotPassword">
                    <h6>Forgot Password?</h6>
                 </div>
            </div>
        </>
    )
}

export default LoginForm;