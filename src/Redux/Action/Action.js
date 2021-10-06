import * as Types from "../Types";
import axios from "axios";


//All Data Lode Action 
export const loadUsersAction = () => (dispatch) => {
  axios
    .get("https://todo-app37.herokuapp.com/loadTodo")
    .then((result) => {
      let data = result.data.reverse();
      dispatch({ type: Types.LOAD_TODO, payload: data });
    });
};


//Data Delete Action
export const deleteTodoAction = id => dispatch => {
  axios.delete(`https://todo-app37.herokuapp.com/deleteTodo?id=${id}`)
    .then((result) => {
      alert("Delete Success");
      dispatch(loadUsersAction());
    })
    .catch(error => {
      alert("Some Error")
    })
};


//New Data Add Action
export const addTodoAction = (usersForm) => (dispatch) => {
    if (usersForm.Title.length === 0) {
      alert('Please give a title !');
      return false;
    }
  axios
  .post("https://todo-app37.herokuapp.com/addTodo", usersForm)
  .then((result) => {
      dispatch({ type: Types.ADD_TODO, payload: usersForm });
      alert("Success Add Todo")
      dispatch(loadUsersAction());
      })
      .catch(error => {
          alert("Some Error")
     });
};


//Input Change Action
export const inputChangeAction = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  }
   dispatch({ type: Types.CHANGE_INPUT, payload: formData });
};


//Single Data Load Action
export const editLoadAction = (id) => (dispatch) => {
  axios
    .get(`https://todo-app37.herokuapp.com/singleTodo?id=${id}`)
    .then((result) => {
      let data = result.data;
      dispatch({ type: Types.EDIT_TODO, payload: data });
    });
};


//Single Data Update Action
export const editTodoAction = (id, usersForm) => (dispatch) => {
  if (usersForm.Title.length === 0) {
    alert('Please give a title !');
    return false;
  }
axios
.patch(`https://todo-app37.herokuapp.com/updateTodo?id=${id}`, usersForm)
.then((result) => {
    alert("Success Update Todo")
    dispatch({ type: Types.ADD_TODO, payload: usersForm });
    dispatch(loadUsersAction());
    })
    .catch(error => {
        alert("Some Error")
   });
};



