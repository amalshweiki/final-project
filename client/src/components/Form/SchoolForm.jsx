import { Link } from "react-router-dom";
import "../../style/schoolspage.css";
const SchoolForm = () => {
  return (
    <form className="form-container">
      <div className="school-details">
        <label className="label-style">
          <span>1. School Name: </span> School1
        </label>
        <label className="label-style">
          <span>Location:</span> Location1
        </label>
        <label className="label-style">
          <span>Contact:</span>Contact: Contact1, Contact2
        </label>
        <label className="label-style">
          <span> Bus Services:</span> [List of buses serving the school]
        </label>
        <ul className="ul-style">
          <li style={{ listStyleType: "decimal" }}>
            bus1
            <Link to="" className="link-see-detail">
              See Details
            </Link>
          </li>
          <li>
            bus2
            <Link to="" className="link-see-detail">
              See Details
            </Link>
          </li>
          <li>
            bus3
            <Link to="" className="link-see-detail">
              See Details
            </Link>
          </li>
        </ul>
      </div>

      <div className="button-container">
        <button className="button-88 edite button-style" role="button">
          Edit
        </button>
        <button className="button-88 delete button-style" role="button">
          Delete
        </button>
      </div>
    </form>
  );
};

export default SchoolForm;
