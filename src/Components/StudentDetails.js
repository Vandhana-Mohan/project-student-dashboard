
import "../Styles/StudentDetails.css"
const StudentDetails = ({ codewars, certifications, cohort }) => {
  return (
    <div className="student-details">
      <div className="codewars">
        <h3>Codewars</h3>
        <p> <span className="style__EachStudent__green">Current Total: </span> {codewars.current.total}</p>
        <p> <span className="style__EachStudent__green"> Last Week: </span> {codewars.current.lastWeek}</p>
        <p> <span className="style__EachStudent__green">Goal: </span> {codewars.goal.total}</p>
        <p> <span className="style__EachStudent__green">Percent of Goal Achieved: </span> {(codewars.current.total / codewars.goal.total * 100).toFixed(0)}%</p>
      </div>
      <div className="scores">
        <h3>Scores</h3>
        <p> <span className="style__EachStudent__green">Assignments: </span>{cohort.scores.assignments * 100}%</p>
        <p> <span className="style__EachStudent__green">Projects: </span>{cohort.scores.projects * 100}%</p>
        <p> <span className="style__EachStudent__green">Assessments: </span>{cohort.scores.assessments * 100}%</p>
      </div>
      <div className="certifications">
        <h3>Certifications</h3>
        <p> <span className="style__EachStudent__green">Resume: </span>{certifications.resume ? "Yes" : "No"}</p>
        <p> <span className="style__EachStudent__green">LinkedIn: </span>{certifications.linkedin ? "Yes" : "No"}</p>
        <p> <span className="style__EachStudent__green">GitHub: </span>{certifications.github ? "Yes" : "No"}</p>
        <p> <span className="style__EachStudent__green">Mock Interview: </span>{certifications.mockInterview ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default StudentDetails;
