import axios from "axios";

//Read
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/posts?_sort=id&_order=desc")
      .then((res) => {
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

//Create
export const ADD_POSTS = "ADD_POSTS";

export const addPosts = (data) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3000/posts", data)
      .then((res) => {
        dispatch({ type: ADD_POSTS, payload: data });
      })
      .catch((err) => console.log(err));
  };
};

//Update
export const UPDATE_POSTS = "UPDATE_POSTS";

export const updatePost = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POSTS, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

//Delete
export const DELETE_POSTS = "DELETE_POSTS";

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3000/posts/${postId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_POSTS, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

export const ADD_LIKE = "ADD_LIKE";

export const addLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: ADD_LIKE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
