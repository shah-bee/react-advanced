import React, { Component } from 'react';
import axios from 'axios';
import Post from '../components/Post/Post'
import './Blog.css';
import '../components/Posts/Posts.css';
import Posts from '../components/Posts/Posts';

class Blog extends Component {

    render() {
        return (
            <section className="Blog">
                <header className="Posts">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Posts</a></li>
                        </ul>
                    </nav>
                </header>
                {/* <Posts></Posts> */}
            </section>
        )
    }
}

export default Blog;