import Component5 from './component5';
import "./component6.css";
// const [open, setOpen] = useState(false)
const Component6=(props)=>{
    // setOpen(!open)
    return(
        <div>{props.children}
        <div  className="ffq">
            <h1>Frequently asked questions</h1>
        </div>
         {/* { open &&  <Component5 />}  */}
            <Component5></Component5>
            <Component5></Component5>
            <Component5></Component5>
            <Component5></Component5>
            <Component5></Component5>
            <Component5></Component5>

        </div>
    )


}
export default Component6;