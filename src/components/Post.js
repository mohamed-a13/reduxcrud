import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, deletePost } from "../actions/postAction";
import Like from "./Like";
import { isEmpty } from "./Utils";

const Post = ({ post }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [content, setcontent] = useState(post.content);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    const postData = {
      title: post.title,
      author: user[0].pseudo,
      content: content,
      likes: post.likes,
      id: post.id,
    };
    dispatch(updatePost(postData));
    setEditToggle(false);
  };

  return (
    <div className="post">
      {!isEmpty(user[0]) && user[0].pseudo === post.author && (
        <div className="edit-delete">
          <img
            src="./icons/edit.svg"
            onClick={() => setEditToggle(!editToggle)}
            alt="edit"
          />
          <img
            src="./icons/delete.svg"
            onClick={() => dispatch(deletePost(post.id))}
            alt="delete"
          />
        </div>
      )}
      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />
      {editToggle ? (
        <form onSubmit={handleEdit}>
          <textarea
            defaultValue={post.content}
            onChange={(e) => setcontent(e.target.value)}
          />
          <input type="submit" value="Valider la modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;
