import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteTodoAction, loadUsersAction } from '../Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';


export default function TableData() {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todoReducer.users);


  const loadUsers = () => {
    dispatch(loadUsersAction());
  }

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  }


  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <TableContainer className="pageTitle" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Serial No.</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              tasks.map((user, index) => (

                <TableRow key={user._id}>
                  <TableCell component="th" scope="row">
                    {index + 101}
                  </TableCell>
                  <TableCell align="center">{user.Title}</TableCell>
                  <TableCell align="center">
                    <Link to={`/view/${user._id}`}>
                      <Button className="action">
                        <VisibilityIcon />
                      </Button>
                    </Link>
                    <Link to={`/edit/${user._id}`}>
                      <Button className="action">
                        <EditIcon />
                      </Button>
                    </Link>
                    <Button
                      className="action"
                      color="secondary"
                      onClick={() => deleteTodo(user._id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


