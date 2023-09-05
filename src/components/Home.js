import React from 'react'
import {Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { DisplayAllStudents } from './DisplayAllStudents';

function Home() {

    const navigate = useNavigate();

  return (
    <div>
    <h1 style={{ margin : "2%" }}>Welcome to Student - Teacher Management Dashboard </h1>
    <div style={{justifyContent : "center", display : 'flex', flexDirection : 'row'}}>
      <Button color='success' style={{ margin : "2%" }} onClick={() => navigate("/add-teacher")}>
        Add Teacher
      </Button>
      <Button color='success' style={{ margin : "2%"  }} onClick={() => navigate("/add-student")}>
        Add Student
      </Button>
      <Button color="primary" style={{ margin : "2%" }} onClick={() => navigate("/assign-teacher")}>
      Assign Teacher
      </Button>
      <Button color='warning' style={{ margin : "2%" }} onClick={() => navigate("/update-teacher")}>
      Update Teacher
      </Button>
      <Button color='info' style={{ margin : "2%" }} onClick={() => navigate("/teacher")}>
      Get Teacher Details
      </Button>
      <Button color='danger' style={{ margin : "2%" }} onClick={() => navigate("/delete-data")}>
      Delete Data
      </Button>
      </div>
      <br/>
    
      <DisplayAllStudents />

    </div>
  )
}

export default Home