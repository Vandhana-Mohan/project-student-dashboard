
import "../Styles/Student.css"

const abbreviate__middleName = (name) => {
  return name.charAt(0) + "."; // abbreviate middle name
};

const format__dob = (dob) => {
  let split__date = dob.split("/");
  const date = new Date();
  date.setMonth(split__date[0] - 1);
  return date.toLocaleString("en-US", { month: "long" }) + " " + split__date[1] + ", " + split__date[2];
};

const Student = (student) => {
  return (
    <div className="style__EachStudent">
      <h3>
        {student.student.names.preferredName}{" "}
        {abbreviate__middleName(student.student.names.middleName)}{" "}
        {student.student.names.surname}{" "}
      </h3>
      <h5>{student.student.username}</h5>
      <h5> Birthday: {format__dob(student.student.dob)}</h5>
      <a href="#"> Show More...</a>
    </div>
  );
};
export default Student;
