import React from "react";
import { useSelector } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { isEmpty } from "./components/Utils";

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  const users = useSelector((state) => state.userReducer);

  return (
    <div>
      <h1>CRUD</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) &&
            posts.map((post, index) => {
              return <Post key={index} post={post} />;
            })}
        </div>
        {!isEmpty(users) &&
          users.map((user, index) => {
            return <User key={index} user={user} />;
          })}
      </div>
    </div>
  );
};

export default App;
