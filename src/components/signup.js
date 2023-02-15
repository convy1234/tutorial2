import {IoLogoGoogle} from "react-icons/io";
import {FaFacebookF} from "react-icons/fa";


import{FaApple} from "react-icons/fa";

import "./signup.css"
const SignUp = ()=>{
    return(
        <div>
            <div className= "container7">
                <div className="header7">
                    <h1>Login</h1>

                </div>
                <div className="email">
                    Email
                </div>
                <div className= "container-Input">
                <input type ="email" className="input-control" placeholder="Enter your email"/>
                </div>
                <button class="btn-signup">
                    Sign in with email link
                </button>
                <div className="w2nd">
                    <h3>-Or-</h3>
                    <div className="links-social">
                        <button className="Social G"><IoLogoGoogle/></button>
                        <button className="Social F"><FaFacebookF/></button>
                        <button className="Social A"><FaApple/></button>
                    </div>
                    <div>
                        By signing up , you agree to the terms of Service and Privacy Policy ,including Cookie use
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default SignUp;