import "../Styles/Cohort.css";

const Cohort = ({ name, active, handleClick }) => {
  return (
    <div>
    <button
      className={active ? "active__button" : "inactive__button"}
      onClick={handleClick}
    >
      {name}
    </button>
    </div>
  );
};

export default Cohort;
