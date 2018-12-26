import React, { Component } from 'react';
import './Blog.css';
import '../Posts/Posts.css';
import Posts from '../Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {

    render() {
        return (
            <section className="Blog">
                <header className="Posts">
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-posts">Posts</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={NewPost} {...this.props}></Route>
                <Route path="/new-posts" exact component={Posts}></Route>
            </section>
        )
    }
}

export default Blog;