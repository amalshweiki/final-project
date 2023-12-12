import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../components/Form/Modal";
import UpdateSchool from "./UpdateSchool";
const baseURL = import.meta.env.VITE_BASE_URL_SCHOOLS;

import "../../style/schoolspage.css";
import ModalE from "./ModalE";

const SchoolForm = ({ school }) => {
  const [busDetails, setBusDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(
    Array(school.busServices.length).fill(false)
  );
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isFormEditVisible, setIsFormEditVisible] = useState(false);

  useEffect(() => {
    // Fetch bus details for each busService ID
    const fetchBusDetails = async () => {
      const busDetailsPromises = school.busServices.map(async (busId) => {
        const response = await axios.get(
          `http://localhost:5000/buses/${busId}`
        );
        return response.data.data;
      });

      const busDetailsData = await Promise.all(busDetailsPromises);
      setBusDetails(busDetailsData);
    };

    fetchBusDetails();
  }, [school.busServices]);
  ///
  const handleToggleDetails = (index) => {
    setShowDetails((prev) => {
      const newShowDetails = [...prev];
      newShowDetails[index] = !newShowDetails[index];
      return newShowDetails;
    });
  };
  //
  const handleOpenEditModal = () => {
    setEditModalOpen(true);
    console.log("Modal opened");
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  const handleEditSchool = () => {
    handleOpenEditModal();
  };
  const handleDeleteSchool = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this school?"
    );
    if (isConfirmed) {
      try {
        axios
          .delete(`${baseURL}/${school._id}`)
          .then(alert(`The school ${school.name} deleted successfully`));
      } catch (error) {
        console.error("Error deleting school:", error);
      }
    }
  };

  return (
    <div>
      <form className="form-container">
        <div className="school-details">
          <label className="label-style">
            <span>1. School Name: </span> {school.name}
          </label>
          <label className="label-style">
            <span>Location:</span> {school.location}
          </label>
          <label className="label-style">
            <span>Contact:</span> {school.contact}
          </label>
          <label className="label-style">
            <span> Bus Services:</span>
            <ul className="ul-style">
              {busDetails.map((bus, index) => (
                <li key={index}>
                  <span>Bus Name: </span> {bus.name}
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
                      <li>Contact: {bus.contact}</li>
                      <li>
                        Loading/Unloading Stations:
                        <ul>
                          {bus.loadingUnloadingStation.map(
                            (station, stationIndex) => (
                              <li key={stationIndex}>{station}</li>
                            )
                          )}
                        </ul>
                      </li>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </label>
        </div>

        <div className="button-container">
          <button
            className="button-88 edit-school-button button-style"
            role="button"
            onClick={() => handleEditSchool()}
          >
            Edit
          </button>
          <button
            className="button-88 delete button-style"
            role="button"
            onClick={() => handleDeleteSchool()}
          >
            Delete
          </button>
        </div>
      </form>
      {isFormEditVisible && (
        <UpdateSchool onClose={() => setIsFormEditVisible(false)} />
      )}
      <ModalE isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
        <UpdateSchool schoolId={school._id} />

        {console.log(`id= ${school._id}`)}
      </ModalE>
    </div>
  );
};

export default SchoolForm;
