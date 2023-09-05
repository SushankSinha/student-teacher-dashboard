import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTeacher from "./components/AddTeacher";
import AddStudent from "./components/AddStudent";
import AssignTeacher from "./components/AssignTeacher";
import UpdateTeacher from "./components/UpdateTeacher";
import TeacherDetails from "./components/TeacherDetails";
import DeleteData from "./components/DeleteData";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route
            path="/add-teacher"
            element={<AddTeacher/>}/>
          <Route
            path="/add-student"
            element={<AddStudent/>}/>
          <Route
            path="/assign-teacher"
            element={<AssignTeacher/>}/>
          <Route
            path="/update-teacher"
            element={
              <UpdateTeacher />
            }/>
          <Route
            path="/teacher"
            element={
              <TeacherDetails />
            }/>
          <Route
            path="/delete-data"
            element={
              <DeleteData />
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
