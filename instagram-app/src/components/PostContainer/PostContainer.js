import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import Posts from './Posts';

const PostContainer= (props) => {
    return (

    <div className="post-container">

        {props.post.map(p => <Posts key={p.imageUrl} posts={p} />)}
        <input type= "text" placeholder="Add a comment" />
        
    </div>
    
    )
}


export default PostContainer;