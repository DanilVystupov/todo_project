import React, { useState } from "react";
import PostCreate from "./components/PostCreate";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostRemove from "./components/PostRemove";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Купить макКомбо' },
    { id: 2, title: 'Купить масло' },
    { id: 3, title: 'Купить хлеб' },
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostCreate create={createPost} />
      <PostList remove={removePost} posts={posts} />
    </div >
  );
}

export default App;
