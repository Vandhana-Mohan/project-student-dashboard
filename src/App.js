import React from "react";
import Students__data from "./data/data.json";
import Header from "./Components/Header";
import Student from "./Components/Student";
import "./App.css"

function App() {
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
          <h4>Total Students: {Students__data.length} </h4>
              {Students__data.map((student) => {
                return <Student student = {student}/>
              })}
      </main>
      <div className="footer">
        Footer
      </div>
    </div>
  );
}

export default App;
