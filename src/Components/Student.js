import { useState } from "react";
import "../Styles/Student.css";
import StudentDetails from "./StudentDetails";

// function to abbreviate middle name
const abbreviate__middleName = (name) => {
  return name.charAt(0) + "."; 
};

// function to format date of birth
const format__dob = (dob) => {
  const [month, day, year] = dob.split("/"); // Split the date of birth and destructure as array of month, day, and year strings.
  const date = new Date(year, month - 1, day); // Create new Date object from the array and - 1 for zero-based indexing.
  const formattedMonth = date.toLocaleString("default", { month: "long" }); // Get the full month name in the user's default locale using the toLocaleString method.
  return `${formattedMonth} ${day}, ${year}`; // Return the formatted date of birth using a template literal.
};

// function to check if a student is on track to graduate
const isOnTrackToGraduate = (certifications, codewars) => {
  return (
    certifications.resume &&
    certifications.linkedin &&
    certifications.github &&
    certifications.mockInterview &&
    codewars.current.total > 600
  );
};

const Student = ({ student }) => {
  // use destructuring to get the student object from the props
  const { profilePhoto, names, username, dob } = student; // use destructuring to get the relevant student properties
  
  const [showDetails, setShowDetails] = useState(false); // state to toggle the display of the student details
  // function to toggle the display of the student details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  // check if the student is on track to graduate
  const onTrackToGraduate = isOnTrackToGraduate(
    student.certifications,
    student.codewars
  );

  return (
    <div className="style__EachStudent">
      <span>
        <img
          className="student__pic"
          src={profilePhoto}
          alt={names.preferredName}
        />
      </span>
      <main className="style__EachStudent__info">
        {/* display student's name */}
        <h2>
          <span className="style__EachStudent__green">Full Name: </span>
          {names.preferredName} {abbreviate__middleName(names.middleName)}{" "}
          {names.surname}
        </h2>
        {/* display student's graduation status */}
        <aside className="student__status">
          <span className="style__EachStudent__green">
            {onTrackToGraduate ? (
              <p>On Track to Graduate</p>
            ) : (
              <p>Not Graduating</p>
            )}
          </span>
        </aside>
        {/* display student's email address */}
        <h5>
          <span className="style__EachStudent__green">Email: </span>
          {username}
        </h5>
        {/* display student's date of birth */}
        <h5 className="last__h5">
          <span className="style__EachStudent__green">Birthday: </span>
          <span>{format__dob(dob)}</span>
        </h5>
        {/* display toggle show more button */}
        <button className="show__more" onClick={toggleDetails}>
          {" "}
          {showDetails ? "Show Less..." : "Show More..."}{" "}
        </button>
        {showDetails && (
          <StudentDetails
            codewars={student.codewars}
            certifications={student.certifications}
            cohort={student.cohort}
            notes={student.notes}
          />
        )}
      </main>
    </div>
  );
};
export default Student;