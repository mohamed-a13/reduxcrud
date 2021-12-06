import axios from "axios";

export const GET_USERS = "GET_USERS";

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/users")
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const addUserLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3000/users/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({ type: ADD_USER_LIKE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};
