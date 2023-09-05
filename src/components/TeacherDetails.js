import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TeacherCard from "./TeacherCard";

function TeacherDetails() {

    const [teacherId, setTeacherId] = useState("");
    const[data, setdata] = useState([]);
    const [allowed, setAllowed] = useState(true);
    
    const navigate = useNavigate();

    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
  
       const res = await axios.get(`${API}/teacher/${teacherId}`);
  
       if(res.status === 200){
        setdata(res.data)
       }

      } catch (error) {
  
        alert("Failed to fetch details")
      }
  };
  
    return (
      <div>
        <h1 style={{ margin : "2%" }}>Teacher Details</h1>
        <Button style={{ marginLeft: "75%", margin : "15px" }} onClick={() => navigate(-1)}>
          BACK
        </Button>
        <Form>
          <FormGroup row>
            <Label for="id" sm={2}>
              Teacher Id
            </Label>
            <Col sm={10}>
              <Input
                id="id"
                name="id"
                placeholder="Enter Teacher Id"
                type="text"
                onChange={(e) => {setTeacherId(e.target.value);setAllowed(false)}}
                value={teacherId}
                required = {true}
              />
            </Col>
          </FormGroup>
            
          <Button disabled = {allowed} onClick={handleSubmit}>Submit</Button>
        </Form>

      {data.map((item, index)=>{
        return(
          <TeacherCard key = {index} value = {item} />
        )
      })}

      </div>
    );

}

export default TeacherDetails;

