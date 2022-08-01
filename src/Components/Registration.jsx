import React, {useState } from "react";
import {FaArrowLeft} from "react-icons/fa"

const Registration = ()=>{
    const [userName , setUsername] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [gender , setGender] = useState("");
    const [age , setAge] = useState("");
    const [submit , setSubmit] = useState(false)


    return(
        <>
            <div className="registerMainContainer">
              {
                !submit  ? <>
                     <h2>Welcome</h2>
                         <div className="registerInputContainer">
                            <input type="text" placeholder="Username" value={userName} onChange={(e)=>setUsername(e.target.value)}/>
                            <input type="email" placeholder="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                            <input type="text" placeholder="Gender" value={gender}  onChange={(e)=>setGender(e.target.value)}/>
                            <input type="number" placeholder="Age" value={age}  onChange={(e)=>setAge(e.target.value)}/>
                            <input type="password" placeholder="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                         </div>
                        <div className="buttonContainer">
                            <button onClick={()=>setSubmit(true)}>Register</button>
                        </div>
                </>:<>
                    <FaArrowLeft onClick={()=>setSubmit(false)} style={{margin:"-15rem 0 0 -25rem" , cursor:"pointer"}}/>
                    <h2>Name:  <span>{userName}</span> </h2>
                    <h2>Email:  <span>{email}</span> </h2>
                    <h2>Gender:  <span>{gender}</span> </h2>
                    <h2>Age:  <span>{age}</span> </h2>
                </>
              }
            </div>
        </>
    )
}

export default Registration