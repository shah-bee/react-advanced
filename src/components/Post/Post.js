import React from 'react';
import './Post.css';
import {withRouter} from 'react-router-dom';

const post = (props) => {
    console.log(props);
    return (
        <section className="Post">
            <p><strong>{props.title}</strong></p>
            <p className="Author">{props.author}</p>
            <div>
            {props.children}</div>
        </section>
    )
}

export default withRouter(post);
