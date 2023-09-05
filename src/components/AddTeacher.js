import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddTeacher() {

  const [teacherName, setTeacherName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [allowed, setAllowed] = useState(true);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const response = await axios.post(`${API}/add-teacher`, {teacherName: teacherName, teacherId: teacherId});

      if(response.status === 201){
        
        alert("Teacher Added!");
        navigate("/");
      }

    } catch (error) {

      alert("Failed to add Teacher")
    }

};

  return (
    <div>
      <h1 style={{ margin : "2%" }}>Add Teacher</h1>
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
              onChange={(e) => {setTeacherId(e.target.value); setAllowed(false) }}
              value={teacherId}
              required = {true}
            />
          </Col>
        </FormGroup>

        <Button disabled = {allowed} onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default AddTeacher;
