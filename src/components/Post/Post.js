import React from 'react';
import './Post.css';

const post = (props) => {
    return (
        <section className="Post">
            <p><strong>{props.title}</strong></p>
            <p className="Author">{props.author}</p>
            <div>
            {props.children}</div>
        </section>
    )
}

export default post;
