const StudentDetails = ({ codewars, certifications, cohort }) => {
  return (
    <div className="student-details">
      <h3>CodeWars</h3>
      <p>Total: {codewars.current.total}</p>
      <p>Last Week: {codewars.current.lastWeek}</p>
      <p>Goal: {codewars.goal.total}</p>
      <p>Last Week: {codewars.goal.lastWeek}</p>

      <h3>Certifications</h3>
      <p>Resume: {certifications.resume ? "Yes" : "No"}</p>
      <p>LinkedIn: {certifications.linkedin ? "Yes" : "No"}</p>
      <p>GitHub: {certifications.github ? "Yes" : "No"}</p>
      <p>Mock Interview: {certifications.mockInterview ? "Yes" : "No"}</p>

      <h3>Cohort Scores</h3>
      <p>Assignments: {cohort.scores.assignments * 100}%</p>
      <p>Projects: {cohort.scores.projects * 100}%</p>
      <p>Assessments: {cohort.scores.assessments * 100}%</p>
    </div>
  );
};

export default StudentDetails;
