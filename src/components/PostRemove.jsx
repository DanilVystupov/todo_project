import React from "react";


const PostRemove = ({ children, ...props }) => {
    return (
        <button {...props} >
            {children}
        </button>
    );
};

export default PostRemove;