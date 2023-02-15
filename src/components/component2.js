
import React from "react";
import "./componet2.css";
import pic from "../img03.jpg";
import vid from "../vid.mp4"


const Component2 =(props)=>{
    return(
        <div>
          
            <div className="contain2">
          
           
                <div className="text">
                    <h1 className="color">
                        Create stunning visuals
                        <h1 className="syleText"> in seconds</h1>
                    </h1>
                    
                    <p> The ultimate ecosystem of apps, plugins & resources for all creators,</p>
                           <p> powered by artificial intelligence </p>
                    <div>
                   
                        <div className="demo">
                        <div> <p> watch a 2mm demo</p></div>
                        <div className="btn-container"> <button className="btn1">Try for free</button></div>

                    </div>

                    <div className="cover">
                    <div className="video">
                        <div className="vid">
                            <video src={vid } className="myvideo" controls autoplay loop muted width="1000" height="400" />
                        </div>
                        
                    </div>

                        </div>
                    
                </div>

                <div>
          
           </div>
               

                <div className="info">
                    <div>
                        <h3>15M</h3>
                        <p>Users</p>
                    </div>
                   
                    <div>
                      
                      <div className="ll">
                        <h3>6 times</h3>  
                      <p className="">product of the day</p> 
                      <p className="" class="Text-style2"> product hunt</p>
                      

                      </div>
                        </div>
                   
                    <div>
                    <div className="ll">
                        <h3>4M</h3>
                        <p className="lll">Images processed every month</p>
                        </div>
                    </div>
                    
                </div>

                    </div>
                                
                
                


            </div>
            {/* <SignUp></SignUp> */}

            

        </div>
    )
}
export default Component2;