import React, { useState } from "react";
import "../styles/App.css";

const PostItem = (props) => {

    const [value, setValue] = useState(props.post.completed)

    return (
        <div className="post">
            <div className="post__content">
                <div style={value ? { textDecoration: 'none' } : { textDecoration: 'line-through' }}>
                    {props.number}. {props.post.title}
                </div>
                <div className="post__btns">
                    <button onClick={() => props.remove(props.post)}>
                        Удалить
                    </button>
                    <button onClick={function () {
                        props.completed(props.post)
                        setValue(!value)
                    }} >
                        Выполнено
                    </button>
                </div>
            </div>
        </div >
    );
};

export default PostItem