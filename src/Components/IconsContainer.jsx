import {FaFacebookF , FaGithub , FaGoogle} from "react-icons/fa"

const IconsContainer = () =>{
    const facebookBackground = "";
    return(
        <div className="iconsContainer">
          <svg className="facebook"><FaFacebookF/></svg>
          <svg className="git"><FaGithub/></svg>
          <svg className="google"><FaGoogle/></svg>
        </div>
    )
}

export default IconsContainer;


//style={{background:"blue" , height:}}