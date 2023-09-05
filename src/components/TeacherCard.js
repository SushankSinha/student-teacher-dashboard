import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";

function TeacherCard({value}) {
  return (
    <div style = {{margin : "2%", textAlign : "left"}} className="main-card">
      <Card
        style={{
          width: "250px",
          height: "500px",
        }}
      >
        <CardBody>
          <div className="card-style">
            <CardTitle tag="h5">{value.studentName}</CardTitle>
          </div>
        </CardBody>
        <img
          style={{ objectFit: "contain", margin : "2% auto" }}
          alt={value.studentName}
          src={value.studentPhoto}
          width="90%"
          height="200px"
        />
        <CardBody>
          <CardText>Class : {value.studentDivision}</CardText>
          <CardText>Roll No. : {value.studentRoll}</CardText>
          <CardText>Teacher Assigned : {value.teacherName}</CardText>
          <CardText>Teacher Id : {value.teacherId}</CardText>
        </CardBody>
      </Card>
      </div>
  )
}

export default TeacherCard