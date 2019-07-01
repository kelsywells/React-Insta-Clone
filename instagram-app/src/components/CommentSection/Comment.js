import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return (
    <div className= "comments">
        <p className="comment">{props.posts.comment.text}</p>
        <p className="username">{props.posts.comment.username}</p>
    </div>
    );    
}

Comment.propTypes = {
    comments: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
}

export default Comment;