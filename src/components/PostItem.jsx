import React from "react";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <div>{props.number}. {props.post.title}</div>
            </div>
            <div className="remove__btns">
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default PostItem