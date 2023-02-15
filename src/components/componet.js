import React from 'react';
import "./component1.css";
import { useState } from 'react';
import SignUp from './signup';




const Component1 = ()=>{
    const [login , setLogin] = useState(false);
    function HandleClick (){
        setLogin(!login);
    }
    
    return(
        <div>
        <div clasName = "container">
            <div className = "contain">
                <div className ="logo">
                    <div>
                        <h1>  ClipDrop </h1>
                    </div>


                </div>
               
                <div className="menu">

                    <div> <a className="menus"><p className="hellow">Apps</p></a>  </div>
                    <div> <a className="menus"><p className="hellow">Api</p></a> </div>
                    <div> <a className="menus"><p className="hellow">Pricing</p> </a> </div>
                    <div><a className="menus"><p className="hellow">Blog</p></a>  </div>
                    <div> 
                        <button className='btn2' onClick = {HandleClick}>
                        <a className="menus"><p> Sign-up for free</p></a>   
                        </button>
                    </div>
                </div>
                
               
            </div>
           {login   &&   <SignUp></SignUp> }


            <div>
                


            </div>

        </div>
   
        </div>
    )
}
export default Component1;