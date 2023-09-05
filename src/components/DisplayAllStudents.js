import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";
import { API } from "../global";
import { Input, Label } from "reactstrap";

export function DisplayAllStudents() {
  const [studentData, setStudentData] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState(studentData);

  const getStudents = () => {
    axios.get(`${API}/student`).then((res) => {
      if (res.status === 401) {
        alert("Data Not Found");
      }
      setStudentData(res.data);
      setFilteredSearch(res.data)
    });
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleSearch = (event) => {
    if (event.target.value === null) {
      setFilteredSearch(studentData);
      return;
    }
    const filteredValue = studentData.filter(
      (item) =>
        item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    );
    setFilteredSearch(filteredValue);
  };
  return (
    <div>
      <div>
        <Label>Search Student</Label>
        <Input style={{margin : "1% auto", display : 'block', width : '50%'}} onChange={handleSearch} />
      </div>
      <br />
      <br />
      {filteredSearch.map((item, index) => {
        return (
          <StudentCard key={index} value={item} />
        );
      })}
    </div>
  );
}
