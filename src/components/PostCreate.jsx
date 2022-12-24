import React, { useState } from "react";

const PostCreate = ({ create }) => {
    const [post, setPost] = useState({ title: '', completed: false })

    function addPost(e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '' })
    }

    return (
        <form>
            <input
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Название" />
            <button onClick={addPost}>Добавить</button>
        </form>
    );
};

export default PostCreate