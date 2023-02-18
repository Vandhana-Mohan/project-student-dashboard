import "../Styles/Cohort.css";

const Cohort = ({ name, active, handleClick }) => {
  return (
    <button
      className={active ? "active__button" : "inactive__button"}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Cohort;
