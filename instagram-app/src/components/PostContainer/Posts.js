import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const Posts = (props) => {
    return (
      <div className="post">
        
        <div className="post-image">
          <img
            className="post-img"
            src={props.posts.imageUrl}
          />
        </div>

        <CommentSection comments={props.posts.comments} />

      </div>
    );
  };
  
  export default Posts;