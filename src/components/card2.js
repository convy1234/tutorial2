// import  images from"./img03.jpg";
 import pic from "../img03.jpg";
 import "./card2.css"
const Card2=(props)=>{
    return(
        <div>
            <div className="card2">
                <div className="img">
                    <img src= {props.img}/>

                </div>
                <div className="text2">
                    <h1>Cleanup</h1>
                    <h3> this is a text editor and u no that it is easy working with it </h3>


                </div>

            </div>

        </div>
    )
}
export default Card2;