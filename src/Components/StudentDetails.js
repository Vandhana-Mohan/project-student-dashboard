
import "../Styles/StudentDetails.css"
import StudentNotes from "./StudentNotes";

const StudentDetails = ({ codewars, certifications, cohort, notes }) => {
  return (
    <section>
    <div className="student-details">
      <div className="codewars">
        <h3>Codewars</h3>
        <p> <span className="style__EachStudent__green">Current Total: </span> {codewars.current.total}</p>
        <p> <span className="style__EachStudent__green"> Last Week: </span> {codewars.current.lastWeek}</p>
        <p> <span className="style__EachStudent__green">Goal: </span> {codewars.goal.total}</p>
        <p> <span className="style__EachStudent__green">Goal Achieved Percent: </span> {(codewars.current.total / codewars.goal.total * 100).toFixed(0)}%</p>
      </div>
      <div className="scores">
        <h3>Scores</h3>
        <p> <span className="style__EachStudent__green">Assignments: </span>{cohort.scores.assignments * 100}%</p>
        <p> <span className="style__EachStudent__green">Projects: </span>{cohort.scores.projects * 100}%</p>
        <p> <span className="style__EachStudent__green">Assessments: </span>{cohort.scores.assessments * 100}%</p>
      </div>
      <div className="certifications">
        <h3>Certifications</h3>
        <p> <span className="style__EachStudent__green">Resume: </span>{certifications.resume ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</p>
        <p> <span className="style__EachStudent__green">LinkedIn: </span>{certifications.linkedin ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</p>
        <p> <span className="style__EachStudent__green">GitHub: </span>{certifications.github ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</p>
        <p> <span className="style__EachStudent__green">Mock Interview: </span>{certifications.mockInterview ? <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}</p>
      </div>
    </div>
    <div>
      <StudentNotes studentNotes={notes} />
    </div>
    </section>
  );
};

export default StudentDetails;