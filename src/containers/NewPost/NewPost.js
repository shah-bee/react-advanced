import React, {Component} from 'react';

class NewPost extends Component {

    
    render(){
        console.log(this.props);
        return(
            <div>
                Title
                <input type="text" value=""></input>
                Post
                <input type="text" value=""></input>
                Comment
                <input type="area" value=""></input>
                <button>Add Post</button>
            </div>
        )
    }
}

export default NewPost;