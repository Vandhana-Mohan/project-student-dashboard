import { useState } from "react";
import "../Styles/StudentNotes.css";

const StudentNotes = ({ studentNotes }) => {
  const [notes, setNotes] = useState(studentNotes);
  const [commenterName, setCommenterName] = useState("");
  const [studentComment, setStudentComment] = useState("");

  console.log(notes)

  const handleNameChange = (event) => {
    setCommenterName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setStudentComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = { commenter: commenterName, comment: studentComment };
    setNotes([...notes, newNote]);
    setCommenterName("");
    setStudentComment("");
  };
  // Combine all student notes into a single array
  return (
    <aside className="notes">
      <h2 className="notes__title">1-on-1 Notes</h2>
      <form onSubmit={handleSubmit} className="notes__form">
        <label htmlFor="commenter-name">
          {" "}
          Commenter Name : {"  "}
          <input
            type="text"
            id="commenter-name"
            name="commenter-name"
            autoFocus
            placeholder="Your Name..."
            value={commenterName}
            onChange={handleNameChange}
          />
        </label>
        <br />
        <label className="align__label" htmlFor="comment">
          {" "}
          Comment : {"  "}
          <input
            type="text"
            id="comment"
            name="comment"
            value={studentComment}
            onChange={handleCommentChange}
            placeholder="Your Comment..."
          />
        </label>
        <br />
        <input type="submit" className="button__addNote" value="Add Note" />
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <strong>{note.commenter} </strong> says, "{note.comment}"
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default StudentNotes;
