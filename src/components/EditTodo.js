import "../App.css";
import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { useDispatch, useSelector } from 'react-redux';
import { inputChangeAction, editLoadAction, editTodoAction } from '../Redux/Action/Action';


export default function EditTodo() {

  const dispatch = useDispatch();
  const singleData = useSelector((state) => state.todoReducer.singleData);
  const usersForm = useSelector((state) => state.todoReducer.usersForm);


  const inputChange = (name, value) => {
    dispatch(inputChangeAction(name, value));
  };

  let history = useHistory();
  const { id } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodoAction(id, usersForm));
    history.push("/");
  };

  const loadUsers = () => {
    dispatch(editLoadAction(id));
  }


  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="todoApp">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="todoAppTitle">Edit Todo</h2>
        <Button color="secondary" onClick={onSubmit}>
          <DoneOutlineIcon style={{ paddingRight: 10 }} /> Update
        </Button>
        <form onSubmit={e => onSubmit(e)}>
          <div className="todoForm">
            <input
              type="text"
              className="todoInput"
              placeholder="Enter Your Name"
              defaultValue={singleData.Title}
              onChange={(e) => inputChange("Title", e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  )
}



