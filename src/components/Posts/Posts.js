import React, {Component} from 'react';
import Post from '../Post/Post';
import axios from 'axios';
class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
                console.log(this.state.posts);
            });
    }

    render()
    {
        let latestPosts = [...this.state.posts];
        let posts = latestPosts.slice(0, 4).map(post => {
            let newPost = {...post, 'author': 'Umar'}
            return <Post key={newPost.id} title={newPost.title} author={newPost.author}></Post>
        });

        return(
            <div>
                {posts}
            </div>
        )
    }
}

export default Posts;