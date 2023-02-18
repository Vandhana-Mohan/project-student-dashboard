import React, { useState } from "react";
import Students__data from "./data/data.json";
import Header from "./Components/Header";
import Student from "./Components/Student";
import Cohort from "./Components/Cohort";
import "./App.css";

function App() {
  const [cohort, setCohort] = useState("All Students");
  console.log("cohort",cohort,setCohort)
  const students = Students__data.slice(); // make a copy of the original data array to avoid modifying it
  console.log("students",students)
  const totalStudents = students.length;  // get total number of students
  console.log("totalStudents",totalStudents)

  const uniqueCohorts = new Set(students.map(student => student.cohort.cohortCode));
  

  const orderedCohorts = [
    "All Students",
    ...[...uniqueCohorts] // convert set to array using spread operator
      .filter(cohort => cohort !== "All Students")
      .sort((a, b) => {
        const aYear = parseInt(a.slice(-4));
        const bYear = parseInt(b.slice(-4));
        if (aYear === bYear) {
          const aSeason = a.slice(0, -5);
          const bSeason = b.slice(0, -5);
          if (aSeason === "Winter") return -1;
          if (aSeason === "Spring" && bSeason === "Summer") return -1;
          if (aSeason === "Summer" && (bSeason === "Fall" || bSeason === "Winter")) return -1;
        }
        return `${b.slice(0, -4)} ${bYear}` - `${a.slice(0, -4)} ${aYear}`;
      })
  ];
  console.log("orderedCohorts",orderedCohorts)
  let count = 0; // initialize count to 0

  const studentList = students
    .filter((student) => cohort === "All Students" || student.cohort.cohortCode === cohort) // filter students based on selected cohort
    .map((student) => { // map over the data and create a list of students
      if (student.cohort.cohortCode === cohort) {
        count++; // increment count if the student is in the selected cohort
      }
      return <Student student={student} key={student.id} />; // specify a key for each student to identify them
    });


  const cohortList = orderedCohorts.map((cohortName) => {
    return (
      <Cohort
        name={cohortName === "All Students" ? "All Students" : `${cohortName.slice(0, -4)} ${cohortName.slice(-4)}`}
        active={cohort === cohortName}
        handleClick={() => setCohort(cohortName)}
        key={cohortName}
      />
    );
  });

  return (
    <div className="main__container">
      <div className="header">
        <Header />
      </div>
      <aside className="cohort__container">
        <h2>Choose a Class by Start Date</h2>
        {cohortList}
      </aside>
      <main className="student__container">
        <h2>{cohort === "All Students" ? "All Students" : `${cohort.slice(0, -4)} ${cohort.slice(-4)}`}</h2>
        <h4>
          Total Students:{" "}
          {cohort === "All Students" ? totalStudents : count}{" "}
        </h4> {/* display count if a cohort is selected, otherwise display totalStudents */}
        {studentList} {/* render the list of students */}
      </main>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
