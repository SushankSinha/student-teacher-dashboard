import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DeleteData() {

  const [studentName, setStudentName] = useState("");
  const [studentDivision, setStudentDivision] = useState("");
  const [studentRoll, setStudentRoll] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [teacherBtn, setTeacherBtn] = useState(true);
  const [studentBtn, setStudentBtn] = useState(true);

  const navigate = useNavigate();

  async function handleDeleteTeacher(e) {
    e.preventDefault();

    try {

      const response = await axios.put(`${API}/delete-teacher`, {teacherName : teacherName, teacherId : teacherId });

      if(response.status === 201){
        
        alert("Teacher Data Deleted!");
        navigate("/");
      }

    } catch (error) {

      alert("Failed to delete data")
    }
};
  async function handleDeleteStudent(e) {
    e.preventDefault();

    try {

      const response = await axios.put(`${API}/delete-student`, {studentName: studentName, studentRoll: studentRoll, studentDivision : studentDivision});

      if(response.status === 201){
        
        alert("Student Data Deleted!");
        navigate("/");
      }

    } catch (error) {
      alert("Failed to delete data!")
    }
};

  return (
    <>
    <div>
      <h1 style={{ margin : "2%" }}>Delete Teacher Data</h1>
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
              onChange={(e) => {setTeacherId(e.target.value); setTeacherBtn(false)}}
              value={teacherId}
              required = {true}
            />
          </Col>
        </FormGroup>

        <Button className="btn-danger" disabled = {teacherBtn} onClick={handleDeleteTeacher}>Delete Teacher Data</Button>
      </Form>
    </div>
    <br/>
    <hr/>
    <br/>
    <div>
      <h1 style={{ margin : "2%" }}>Delete Student Data</h1>
      <Form>
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
              onChange={(e) => {setStudentDivision(e.target.value); setStudentBtn(false)}}
              value={studentDivision}
              required = {true}
            />
          </Col>
        </FormGroup>
        <Button className="btn-danger" disabled = {studentBtn} onClick={handleDeleteStudent}>Delete Student Data</Button>
      </Form>
    </div>
    </>
  );
}

export default DeleteData;
