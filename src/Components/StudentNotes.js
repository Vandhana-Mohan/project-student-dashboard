import { useState } from "react";

const StudentNotes = () => {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");
  const [notes, setNotes] = useState([]);

  const handleNameChange = (event) => {
    setCommenterName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = { commenterName, comment };
    setNotes([...notes, newNote]);
    setCommenterName('');
    setComment('');
  }

  return (
    <aside className="Notes">
      <h2 className="Notes__title">1-on-1 Notes</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter-name"> Commenter Name :
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
        <label htmlFor="comment"> Comment :
          <input
            type="text"
            id="comment"
            name="comment"
            value={comment}
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
            <strong>{note.commenterName}: </strong> {note.comment}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default StudentNotes;
