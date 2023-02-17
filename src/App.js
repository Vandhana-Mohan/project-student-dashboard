import React from "react";
import Students__data from "./data/data.json";
import Header from "./Components/Header";
import Student from "./Components/Student";
import "./App.css"


function App() {
  const totalStudents = Students__data.length; // get total number of students

  const studentList = Students__data.map((student) => { // map over the data and create a list of students
    return <Student student={student} key={student.id} />; // specify a key for each student to identify them
  });

  return (
    <div className="main__container">
      <div className="header"> 
        <Header />
      </div>
      <aside className="cohort__container">
        Column 1
      </aside>
      <main className="student__container">
          <h2>All Students </h2>
          <h4>Total Students: {totalStudents} </h4>
              {studentList}
      </main>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}

export default App;