import React from "react";
import PostRemove from "./PostRemove";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <div>{props.number}. {props.post.title}</div>
                <div className="post__btns">
                    <PostRemove onClick={() => props.remove(props.post)}>
                        Удалить
                    </PostRemove>
                </div>
            </div>
        </div >
    );
};

export default PostItem