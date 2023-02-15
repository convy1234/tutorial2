import { ReactDOM,useState } from "react";
import {FaLessThan} from "react-icons/fa";
import {FaGreaterThan} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa";
import Component2 from "./component2";
import './component5.css'

const Component5=(props)=>{
    const[btnState,Setbtn] = useState(false);
    const [text ,settext] = useState(false);
    function handleClick(){
     Setbtn( !btnState)


    }
    
    return(
        <div className="myContainer7">
             <div className="containerFaq">{props.children}
            <button className="btnFaq" onClick={handleClick}>{btnState ? <FaChevronDown/> : <FaGreaterThan/>} </button>
            <div className="faq">
          <h2 className=""> How to remove background of a picture for free? </h2>

            </div>
            <div className="innertext" >
                { btnState && <p> To remove the background of a picture, go to clipdrop.co/remove-background, and upload your image. ClipDrop will remove the background for you, and you will be able to download your HD image for free. </p>}

            </div>
        </div>
        </div>
       
    )
}
export default Component5;