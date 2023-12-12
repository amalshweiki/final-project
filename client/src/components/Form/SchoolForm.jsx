import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Modal from "../../components/Form/Modal";
import "../../style/schoolspage.css";

const baseURL =
  import.meta.env.VITE_BASE_URL_SCHOOLS || "http://localhost:5000";

const SchoolForm = ({ school, onSchoolUpdated }) => {
  const [busDetails, setBusDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(
    Array(school.busServices.length).fill(false)
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editableSchool, setEditableSchool] = useState(school);
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    // Fetch bus details for each busService ID
    const fetchBusDetails = async () => {
      const busDetailsPromises = school.busServices.map(async (busId) => {
        const response = await axios.get(
          `http://localhost:5000/buses/${busId}`
        );
        {
          console.log(response);
        }
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
  // const fetchBusDetails = useCallback(
  //   async (busId) => {
  //     try {
  //       const busDetailsPromises = school.busServices.map((busId) =>
  //         axios.get(`http://localhost:5000/buses/${busId}`)
  //       );
  //       const busDetailsResponses = await Promise.all(busDetailsPromises);
  //       setBusDetails(busDetailsResponses.map((response) => response.data));
  //     } catch (error) {
  //       console.error("Failed to fetch bus details:", error);
  //     }
  //   },
  //   [school.busServices]
  // );

  // useEffect(() => {
  //   fetchBusDetails();
  //   setEditableSchool(school); // Initialize editableSchool with the current school data
  // }, [fetchBusDetails, school]);

  // const handleToggleDetails = useCallback((index) => {
  //   setShowDetails((prev) =>
  //     prev.map((detail, i) => (i === index ? !detail : detail))
  //   );
  // }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
    if (!isModalOpen) {
      // Reset the editableSchool data when opening the modal
      setEditableSchool({ ...school });
    }
  };

  const handleEditChange = (e) => {
    setEditableSchool({ ...editableSchool, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${baseURL}/schools/${editableSchool._id}`,
        editableSchool
      );
      alert("School updated successfully!");
      onSchoolUpdated(response.data); // Update the parent component's state
      handleModalToggle(); // Close the modal
    } catch (error) {
      console.error("Error updating school:", error);
      alert("Failed to update school.");
    }
  };

  const handleDeleteSchool = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this school?"
    );
    if (isConfirmed) {
      try {
        await axios.delete(`${baseURL}/schools/${school._id}`);
        alert(`The school ${school.name} has been deleted successfully.`);
        onSchoolUpdated(null); // Update the parent component's state
      } catch (error) {
        console.error("Error deleting school:", error);
      }
    }
  };

  return (
    <div className="form-container">
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
          <span>Bus Services:</span>
          <ul className="ul-style">
            {busDetails.map((bus, index) => (
              <li key={index}>
                <span>Bus Name: </span> {bus.name}
                <button
                  type="button"
                  onClick={() => handleToggleDetails(index)}
                  className={`see-details ${
                    showDetails[index] ? "show-less" : ""
                  }`}
                >
                  {showDetails[index] ? "Show Less" : "See Details"}
                </button>
                {showDetails[index] && (
                  <div>
                    <p>Contact: {bus.contact}</p>
                    <p>
                      Loading/Unloading Stations:
                      {bus.loadingUnloadingStations?.length > 0 ? (
                        <ul>
                          {bus.loadingUnloadingStations.map(
                            (station, stationIndex) => (
                              <li key={stationIndex}>{station}</li>
                            )
                          )}
                        </ul>
                      ) : (
                        <p>No loading/unloading stations available.</p>
                      )}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </label>
      </div>

      <div className="button-container">
        <button
          className="button-88 edite button-style"
          role="button"
          onClick={handleModalToggle}
        >
          Edit School
        </button>
        <button
          className="button-88 delete button-style"
          role="button"
          onClick={handleDeleteSchool}
        >
          Delete School
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalToggle}>
        <form onSubmit={handleEditSubmit}>
          <div className="form-group">
            <label>School Name:</label>
            <input
              type="text"
              name="name"
              value={editableSchool.name}
              onChange={handleEditChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={editableSchool.location}
              onChange={handleEditChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={editableSchool.contact}
              onChange={handleEditChange}
              required
            />
          </div>
          <button type="submit" className="button-88 save button-style">
            Save Changes
          </button>
          <button
            type="button"
            className="button-88 cancel button-style"
            onClick={handleModalToggle}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default SchoolForm;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Modal from "../../components/Form/Modal";
// import UpdateSchool from "./UpdateSchool";
// const baseURL = import.meta.env.VITE_BASE_URL_SCHOOLS;

// import "../../style/schoolspage.css";
// import ModalE from "./ModalE";

// const SchoolForm = ({ school }) => {
//   const [busDetails, setBusDetails] = useState([]);
//   const [showDetails, setShowDetails] = useState(
//     Array(school.busServices.length).fill(false)
//   );
//   const [isEditModalOpen, setEditModalOpen] = useState(false);
//   const [isFormEditVisible, setIsFormEditVisible] = useState(false);

//   useEffect(() => {
//     // Fetch bus details for each busService ID
//     const fetchBusDetails = async () => {
//       const busDetailsPromises = school.busServices.map(async (busId) => {
//         const response = await axios.get(
//           `http://localhost:5000/buses/${busId}`
//         );
//         return response.data.data;
//       });

//       const busDetailsData = await Promise.all(busDetailsPromises);
//       setBusDetails(busDetailsData);
//     };

//     fetchBusDetails();
//   }, [school.busServices]);
//   ///
//   const handleToggleDetails = (index) => {
//     setShowDetails((prev) => {
//       const newShowDetails = [...prev];
//       newShowDetails[index] = !newShowDetails[index];
//       return newShowDetails;
//     });
//   };
//   //
//   const handleOpenEditModal = () => {
//     setEditModalOpen(true);
//     console.log("Modal opened");
//   };

//   const handleCloseEditModal = () => {
//     setEditModalOpen(false);
//   };

//   const handleEditSchool = () => {
//     handleOpenEditModal();
//   };
//   const handleDeleteSchool = () => {
//     const isConfirmed = window.confirm(
//       "Are you sure you want to delete this school?"
//     );
//     if (isConfirmed) {
//       try {
//         axios
//           .delete(`${baseURL}/${school._id}`)
//           .then(alert(`The school ${school.name} deleted successfully`));
//       } catch (error) {
//         console.error("Error deleting school:", error);
//       }
//     }
//   };

//   return (
//     <div>
//       <form className="form-container">
//         <div className="school-details">
//           <label className="label-style">
//             <span>1. School Name: </span> {school.name}
//           </label>
//           <label className="label-style">
//             <span>Location:</span> {school.location}
//           </label>
//           <label className="label-style">
//             <span>Contact:</span> {school.contact}
//           </label>
//           <label className="label-style">
//             <span> Bus Services:</span>
//             <ul className="ul-style">
//               {busDetails.map((bus, index) => (
//                 <li key={index}>
//                   <span>Bus Name: </span> {bus.name}
//                   <br></br>
//                   <button
//                     type="button"
//                     onClick={() => handleToggleDetails(index)}
//                     className={` see-details  ${
//                       showDetails[index] ? "show-less" : ""
//                     }`}
//                   >
//                     {showDetails[index] ? "Show Less" : "See Details"}
//                   </button>
//                   {showDetails[index] && (
//                     <div>
//                       <li>Contact: {bus.contact}</li>
//                       <li>
//                         Loading/Unloading Stations:
//                         <ul>
//                           {bus.loadingUnloadingStation.map(
//                             (station, stationIndex) => (
//                               <li key={stationIndex}>{station}</li>
//                             )
//                           )}
//                         </ul>
//                       </li>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </label>
//         </div>

//         <div className="button-container">
//           <button
//             className="button-88 edite button-style"
//             role="button"
//             onClick={() => handleEditSchool()}
//           >
//             Edit
//           </button>
//           <button
//             className="button-88 delete button-style"
//             role="button"
//             onClick={() => handleDeleteSchool()}
//           >
//             Delete
//           </button>
//         </div>
//       </form>
//       {isFormEditVisible && (
//         <UpdateSchool onClose={() => setIsFormEditVisible(false)} />
//       )}
//       <ModalE isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
//         <UpdateSchool schoolId={school._id} />

//         {console.log(`id= ${school._id}`)}
//       </ModalE>
//     </div>
//   );
// };

// export default SchoolForm;
