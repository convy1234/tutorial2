import pic from "../img03.jpg";
import "./component4.css"
import mypic from "../img04.jpg"
import picfav from "../img09.jpg"
import {FaLongArrowAltRight} from "react-icons/fa"
import {DiPhotoshop} from "react-icons/di";
import {FiFigma} from "react-icons/fi";
import {FaApple} from "react-icons/fa";
import mypic2 from "../001.jpg"
import vid2 from "../01.mp4"




import {AiFillAndroid} from "react-icons/ai"

const Component4=()=>{
    return(
        <div className="container44">
            <div className="">
                <div className="header">
                    <h1> Use cases</h1>
                </div>
                <div className="subheader">
                    <h3> ClipDrop empowers teams of all scales to create better visual content for a fraction of the time and cost.</h3>
                </div>

            </div>
            <div className="container444">
                <div className="contain44">

                 <div className="">
                     <div className="activeCase">
                            <h2 className = "">
                                E-commerce
                            </h2>
                            <div className="s">
                            <p className ="textCase"> the worls7s best brands and largest e-commerce platforms use ClipDrop to create beautifuk and consistent Visuals arouund the world</p>


                            </div>
                        </div>
                        <div className="s"> <h2>Real Estate</h2></div>
                        <div className="s"><h2>Car Resellers</h2></div>
                        <div className="s"><h2>Team portraits</h2></div>
                    </div>
                    <div className="imgContain4">
                        <div className="caseImage">
                            <img src ={mypic2}/>
                            </div>
                        
                    </div>


                            </div>
                
            </div>




            <div className="contain445">
                <div className="header2">
                    <h1 className="title1"> An award - winning <br></br>
                    <span  className="syleText"> revolutionary workflow</span>
                    </h1>
                    <h3> By combining state of the art artificial intelligence & network communication,</h3>
                    <h3>ClipDrop provides a unique, continuous workflow that “just works” wherever you go.</h3>
                </div>
                <div className="workFlow">
                    <div className="images2">
                    <video src ={vid2} height="450px" width ="450px" controls/>

                    </div>
                    <div className="slider">
                        <div className="sliderText">
                            <div>
                                <h1> A new horizon of potential</h1>
                                <p> Read the full article</p>
                            </div>
                            {/* <div>
                                <h1> the result are nothing short of the  astounding</h1>
                                <p> Read the full article</p>
                            </div>
                            <div>
                                <h1> finally a practical use of AR</h1>
                                <p> Read the full article</p>
                            </div> */}



                        </div>
                      

                    </div>


                </div>

            </div>

            <div className="contain46">
                <h1>Add super-power <br></br>
                to all  <span  className="syleText"> your favourite tools </span> & deviceS
                </h1>
                <h3> we're  working hard to make sure that ClipDrop is available in the tools you already use,<br></br>
                        rather than adding another one.</h3>
                
                <div className="temp2">
                    
                    <button className="btn22 btn-social"><DiPhotoshop className="photo"/> Photoshop </button>
                    <button className="btn22 "><FiFigma/> Figma</button>
                    <button className="btn22 "><FaApple/>iphone</button>
                    <button className="btn22 "><AiFillAndroid/>andriod</button>
                    


                </div>
                <div className="imageDivide">
                    <div className="img2"> <img src ={picfav}/> </div>

                </div>
                

                <button className="new-btn"> New</button>
    




            </div>

            <div className="contain47">
                <div className="header2">
                <h1> Add magic to your own apps <br></br>
                    with the <span  className="syleText">ClipDrop API</span> </h1>
                    <h3> The ClipDrop API allows you to integrate best-in-class AI to your apps in minutes.</h3>

                    

                </div>

                <div className="btnClip">
                    <button className="btnClip-btn1"> Get started with the ClipDrop API </button>  <span ><FaLongArrowAltRight className="glyphiconArrow"/></span> <button className="btnClip-btn2"> Open source Demos</button>
                </div>

                <div className="lassImage">
                    <img src = {mypic} className="pic08"/>
                </div>


                










            </div>



          
       
          

        </div>
    )
}
export default Component4