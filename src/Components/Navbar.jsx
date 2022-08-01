import { BrowserRouter, Routes , Route , NavLink } from "react-router-dom";
import Movies from "./Movies";
import LoginForm from "./LoginForm";
import Registration from './Registration'
import Banner from "./Banner";
import Favourites from "./Favourites";



const bodyContainer = {
    marginTop:"2rem",
    display:"flex",
    height:"100%",
    width:"100vw",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    // border:"2px solid red"
}

const navStyle = (
    ({isActive})=>{
        return {color : isActive ? "skyblue" : "white"}
    }
)

const NavbarComp = ()=>{
    return(
            <BrowserRouter >
                {/* <img src={Logo}/> */}
                <div className="navbar">
                    <NavLink style={navStyle} to="/" className='nav-link pt-2 '> <span className="text">Movies</span> </NavLink>
                    <NavLink style={navStyle} to = "/fav"className='nav-link pt-2 '> <span className="text">Favourites</span> </NavLink>
                    <NavLink style={navStyle} to = "/login"className='nav-link pt-2 '> <span className="text">Login</span> </NavLink>
                    <NavLink style={navStyle} to = "/register"className='nav-link pt-2 '> <span className="text">Register</span> </NavLink>
                </div>
                <div style={bodyContainer}>
                    <Routes>
                        <Route path="/" element={<><Banner/><Movies/></>}/>
                        <Route path='/fav' element={<Favourites/>}/>
                        <Route path="Login" element={<LoginForm/>}/>
                        <Route path="Register" element={<Registration/>}/>
                   </Routes>
                </div>
        </BrowserRouter>
       
    )
}

export default NavbarComp;