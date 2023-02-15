import react from 'react'




const Prep1 = props => {
    return(
        <div className="menu">
        <ul style={{listStyle:'none', display: 'inline'}}>
            <li style ={{display: 'inline',padding:'30px'}}>{props.val}</li>
            <li style ={{display: 'inline',padding:'30px'}}>{props.val}</li>
            <li style ={{display: 'inline',padding:'30px'}}>about</li>
            <li style ={{display: 'inline',padding:'30px'}}>preview</li>
        </ul>

    
    </div>

    );


};
export default Prep1;
