import React, { useState } from "react";
import PostCreate from "./components/PostCreate";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
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


  return (
    <div className="App">
      <PostCreate create={createPost} />
      <PostList posts={posts} />
    </div >
  );
}

export default App;
