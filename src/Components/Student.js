
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

const Student = ({ student }) => { // use destructuring to get the student object from the props
  const { profilePhoto, names, username, dob } = student; // use destructuring to get the relevant student properties
  console.log(student)
  return (
    <div className="style__EachStudent">
      <span>
          <img className="student__pic" src={profilePhoto} alt={names.preferredName} />
      </span>
      <main className="style__EachStudent__info">
        <h2>
          {names.preferredName}
          {abbreviate__middleName(names.middleName)}
          {names.surname}
        </h2>
        <h5>{username}</h5>
        <h5 className="last__h5"> 
          <span className="style__EachStudent__dob">Birthday: </span>
          <span>{format__dob(dob)}</span>
        </h5>
        <a href="#"> Show More...</a>
      </main>
    </div>
  );
};
export default Student;
