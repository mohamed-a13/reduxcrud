import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getPosts } from "../actions/postAction";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const addPost = async (e) => {
    e.preventDefault();
    if (title && content) {
      const data = {
        title,
        content,
        author: user.pseudo,
        likes: 0,
      };
      await dispatch(addPosts(data));
      setTitle("");
      setContent("");
      //Demande d'id
      dispatch(getPosts());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={addPost}>
        <input
          type="text"
          placeholder="Titre du poste"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Postez vos pensées..."
          name="think"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
