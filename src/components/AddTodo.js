import React from "react";
import "../App.css";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import { addTodoAction, inputChangeAction } from '../Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

export default function AddTodo({ dialogOpen, setDialogOpen }) {

  let history = useHistory();

  const dispatch = useDispatch();
  const usersForm = useSelector((state) => state.todoReducer.usersForm);

  const handleClose = () => {
    setDialogOpen(false)
  };

  const inputChange = (name, value) => {
    dispatch(inputChangeAction(name, value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(usersForm));
    setDialogOpen(false);
    history.push("/");
  };

  return (
    <div className="todoApp">
      <div className="w-75 mx-auto shadow p-5">
        <Dialog open={dialogOpen} onClose={handleClose}>
          <DialogTitle>
            <h2 className="todoAppTitle">Add Todo</h2>
          </DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              <form onSubmit={e => onSubmit(e)}>
                <div className="todoForm">
                  <input
                    type="text"
                    className="addTodoInput"
                    placeholder="Enter Your Name"
                    defaultValue={usersForm.Title}
                    onChange={(e) => inputChange("Title", e.target.value)}
                  />
                </div>
                <div className="todoBtn">
                  <Button color="primary" onClick={onSubmit}>Add</Button>
                  <Button color="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
