import React, { useState } from "react";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, completed: true, title: 'Купить макКомбо' },
    { id: 2, completed: false, title: 'Купить масло' },
    { id: 3, completed: false, title: 'Купить хлеб' },
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const completedPost = (post) => {
    setPosts(
      posts.map(p => {
        if (p.id === post.id) {
          p.completed = !p.completed
        }
        return p
      }))
  }


  return (
    <div className="App">
      <PostCreate create={createPost} />
      <PostList completed={completedPost} remove={removePost} posts={posts} />
    </div >
  );
}

export default App;
