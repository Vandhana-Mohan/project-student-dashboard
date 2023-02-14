import React from "react";
import Students__data from "./data/data.json";
import Header from "./Components/Header";
import Student from "./Components/Student";




function App() {
  return (
    <div>
      <Header />
      <main>
            <h2>All Students </h2>
            <h4>Total Students: {Students__data.length} </h4>
            {Students__data.map((student) => {
              return <Student student = {student}/>
            })}
      </main>
    </div>
  );
}

export default App;
