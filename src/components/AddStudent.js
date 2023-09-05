import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddStudent() {

  const [studentName, setStudentName] = useState("");
  const [studentDivision, setStudentDivision] = useState("");
  const [studentRoll, setStudentRoll] = useState("");
  const [studentPhoto, setStudentPhoto] = useState("");
  const [allowed, setAllowed] = useState(true);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const response = await axios.post(`${API}/add-student`, {studentName: studentName, studentRoll: studentRoll, studentDivision : studentDivision, studentPhoto : studentPhoto});

      if(response.status === 201){
        
        alert("Student Added!");
        navigate("/");
      }

    } catch (error) {

      alert("Failed to add Student")
    }

};

  return (
    <div>
      <h1 style={{ margin : "2%" }}>Add Student</h1>
      <Button style={{ marginLeft: "75%", margin : "15px" }} onClick={() => navigate(-1)}>
        BACK
      </Button>
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
          <Label for="studentDivision" sm={2}>
            Student Division
          </Label>
          <Col sm={10}>
            <Input
              id="studentDivision"
              name="studentDivision"
              placeholder="Enter Student Division"
              type="text"
              onChange={(e) => {setStudentDivision(e.target.value); setAllowed(false) }}
              value={studentDivision}
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
          <Label for="studentPhoto" sm={2}>
            Student Photo Link
          </Label>
          <Col sm={10}>
            <Input
              id="studentPhoto"
              name="studentPhoto"
              placeholder="Enter Photo Link"
              type="text"
              onChange={(e) => setStudentPhoto(e.target.value)}
              value={studentPhoto}
              required = {true}
            />
          </Col>
        </FormGroup>

        <Button disabled = {allowed} onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default AddStudent;
