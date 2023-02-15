import React from 'react';
import faker from 'faker'



const Comments = () => {
    return(
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} className=""/>
        </a>
        <div className="content">
            <a href="/" className="author">
                sam
            </a>
            <div className="metadata">
                <span className="date">today at 6:00pm</span>
            </div>
            <div className="text">nice blog post</div>


        </div>

    </div>

    );
};

