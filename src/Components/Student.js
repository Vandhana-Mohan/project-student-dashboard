
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
  console.log(student)
  return (
    <div className="style__EachStudent">
      <span>
          <img className="student__pic" src={student.student.profilePhoto} alt={student.student.names.preferredName} />
      </span>
      <main className="style__EachStudent__info">
        <h2>
          {student.student.names.preferredName}{" "}
          {abbreviate__middleName(student.student.names.middleName)}{" "}
          {student.student.names.surname}{" "}
        </h2>
        <h5>{student.student.username}</h5>
        <h5 className="last__h5"> 
          <span className="style__EachStudent__dob">Birthday: </span>
          <span>{format__dob(student.student.dob)}</span>
        </h5>
        <a href="#"> Show More...</a>
      </main>
    </div>
  );
};
export default Student;
