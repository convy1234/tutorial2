import react from 'react';
import faker from 'faker';



const data1 = props => {
    return(
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} className=""/>
        </a>
        <div className="content">
            <a href="/" className="author">
            </a>
            <div className="metadata">
                <span className="date">{props.val2}</span>
            </div>
            <div className="text">nice blog post</div>


        </div>

    </div>
    )
   
}

export default data1;