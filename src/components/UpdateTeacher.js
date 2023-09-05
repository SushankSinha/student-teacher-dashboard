import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateTeacher() {

  const [studentName, setStudentName] = useState("");
  const [studentDivision, setStudentDivision] = useState("");
  const [studentRoll, setStudentRoll] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [allowed, setAllowed] = useState(true);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const response = await axios.put(`${API}/update-teacher`, {teacherName : teacherName, teacherId : teacherId, studentName: studentName, studentRoll: studentRoll, studentDivision : studentDivision});

      if(response.status === 201){
        
        alert("Teacher Updated!");
        navigate("/");
      }

    } catch (error) {

      alert("Failed to add Student")
    }
};

  return (
    <div>
      <h1 style={{ margin : "2%" }}>Update Teacher</h1>
      <Button style={{ marginLeft: "75%", margin : "15px" }} onClick={() => navigate(-1)}>
        BACK
      </Button>
      <Form>
      <FormGroup row>
          <Label for="teacherName" sm={2}>
            Teacher Name
          </Label>
          <Col sm={10}>
            <Input
              id="teacherName"
              name="teacherName"
              placeholder="Enter Teacher Name"
              type="text"
              onChange={(e) => setTeacherName(e.target.value)}
              value={teacherName}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="teacherId" sm={2}>
            Teacher Id
          </Label>
          <Col sm={10}>
            <Input
              id="teacherId"
              name="teacherId"
              placeholder="Enter Teacher Id"
              type="text"
              onChange={(e) => setTeacherId(e.target.value)}
              value={teacherId}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="studentName" sm={2}>
            Student Name
          </Label>
          <Col sm={10}>
            <Input
              id="studentName"
              name="studentName"
              placeholder="Enter Student Name"
              type="text"
              onChange={(e) => setStudentName(e.target.value)}
              value={studentName}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="studentRoll" sm={2}>
            Student Roll
          </Label>
          <Col sm={10}>
            <Input
              id="studentRoll"
              name="studentRoll"
              placeholder="Enter Student Roll"
              type="text"
              onChange={(e) => setStudentRoll(e.target.value)}
              value={studentRoll}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="studentDivision" sm={2}>
            Student Division
          </Label>
          <Col sm={10}>
            <Input
              id="studentDivision"
              name="studentDivision"
              placeholder="Enter Student Division"
              type="text"
              onChange={(e) => {setStudentDivision(e.target.value); setAllowed(false)}}
              value={studentDivision}
              required = {true}
            />
          </Col>
        </FormGroup>

        <Button disabled = {allowed} onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UpdateTeacher;

