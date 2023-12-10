import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL_BUSES;
import "../../style/schoolspage.css";
const BusForm = ({ bus }) => {
  const [schoolDetails, setSchoolDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(
    Array(bus.schools.length).fill(false)
  );

  useEffect(() => {
    // Fetch bus details for each school
    const fetchSchoolDetails = async () => {
      const schoolDetailsPromises = bus.schools.map(async (schoolId) => {
        const response = await axios.get(
          `http://localhost:5000/schools/${schoolId}`
        );
        return response.data.data;
      });

      const schoolDetailsData = await Promise.all(schoolDetailsPromises);
      setSchoolDetails(schoolDetailsData);
    };

    fetchSchoolDetails();
  }, [bus.schools]);
  ///
  const handleToggleDetails = (index) => {
    setShowDetails((prev) => {
      const newShowDetails = [...prev];
      newShowDetails[index] = !newShowDetails[index];
      return newShowDetails;
    });
  };
  //

  const handleDeleteBus = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Bus?"
    );
    if (isConfirmed) {
      try {
        axios
          .delete(`${baseURL}/${bus._id}`)
          .then(alert(`The Bus ${school.name} deleted successfully`));
      } catch (error) {
        console.error("Error deleting bus:", error);
      }
    }
  };
  return (
    <form className="form-container">
      <div className="bus-details">
        <label className="label-style">
          <span> Name Of Driver:</span>
          {bus.name}
        </label>
        <label className="label-style">
          <span>Contact Of Driver:</span>
          {bus.contact}
        </label>
        <label className="label-style">
          <span>Pickup Times:</span> [List of pickup times]
          <ul>
            {bus.pickupTimes.map((picktime, index) => (
              <li key={index}>{picktime}</li>
            ))}
          </ul>
        </label>
        <label className="label-style">
          <span>Drop-off Times: </span>[List of drop-off times]
          <ul>
            {bus.dropoffTimes.map((droptime, index) => (
              <li key={index}>{droptime}</li>
            ))}
          </ul>
        </label>
        <label className="label-style">
          <span> Loading/Unloading Stations: </span> [Locations]
          <ul>
            {bus.loadingUnloadingStation.map((station, index) => (
              <li key={index}>{station}</li>
            ))}
          </ul>
        </label>
        <label className="label-style">
          <span>The schools served by the bus : </span>
          <ul className="ul-style">
            {schoolDetails.map((school, index) => (
              <li key={index}>
                <span>School Name: </span>
                {school.name}
                <br></br>
                <button
                  type="button"
                  onClick={() => handleToggleDetails(index)}
                  className={` see-details  ${
                    showDetails[index] ? "show-less" : ""
                  }`}
                >
                  {showDetails[index] ? "Show Less" : "See Details"}
                </button>
                {showDetails[index] && (
                  <div>
                    <li>Contact: {school.contact}</li>
                    <li>Contact: {school.location}</li>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </label>
      </div>

      <div className="button-container">
        <button className="button-88 edite button-style" role="button">
          Edit
        </button>
        <button
          className="button-88 delete button-style"
          onClick={() => handleDeleteBus()}
          role="button"
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default BusForm;
