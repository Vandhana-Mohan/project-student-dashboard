
import "../Styles/Cohort.css";

const Cohort = ({ name, active, handleClick }) => { // three props: name (string), active (boolean), and handleClick (function)
  return (
    <div>
      <button 
        className={active ? "active__button" : "inactive__button"} // Set the class of the <button> element based on the value of the active prop
        onClick={handleClick} // Attach the handleClick function to the onClick event of the <button> element
      >
        {name}  
        {/* Render the value of the name prop inside the <button> element */}
      </button>
    </div>
  );
};

export default Cohort;