import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function View() {

    const { id } = useParams();

    const [user, setUser] = useState([]);
    
    const loadUser = async () => {
        const result = await axios.get(`https://todo-app37.herokuapp.com/singleTodo?id=${id}`);
      setUser(result.data);
      };

      useEffect(() => {
        loadUser();
      }, []);


    return (
    <div className="pageTitle">
    <div className="container py-4">
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <h2 className="display-4">ID: {user._id}</h2>
        <h2 className="display-4">Title: {user.Title}</h2>
      </ul>
    </div>
    </div>
    )
}
