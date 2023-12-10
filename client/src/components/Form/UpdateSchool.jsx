import useSchoolForm from "../../hooks/useSchoolForm";
import AddEditSchool from "../Form/AddEditSchool";
import "../../style/modal.css";
const baseURL = "http://localhost:5000/schools";

const UpdateSchool = ({ schoolId }) => {
  const initialState = {
    name: "FetchedSchoolName",
    location: "FetchedLocation",
    contact: "FetchedContact",
    busServices: "FetchedBusServices",
  };

  const {
    schoolName,
    location,
    contact,
    busServices,
    handleInputChange,
    updateSchool,
  } = useSchoolForm(initialState, baseURL);

  const fields = [
    {
      name: "schoolName",
      value: schoolName,
      placeholder: "School name",
      onChange: handleInputChange,
      label: "School Name",
    },
    {
      name: "location",
      value: location,
      placeholder: "School Location",
      onChange: handleInputChange,
      label: "School Location",
    },
    {
      name: "contact",
      value: contact,
      placeholder: "School Contact",
      onChange: handleInputChange,
      label: "School Contact",
    },
    {
      name: "busServices",
      value: busServices,
      placeholder: "School Bus Services",
      onChange: handleInputChange,
      label: "School Bus Services",
    },
  ];

  return (
    <AddEditSchool
      title="Edit School"
      fields={fields}
      onSubmit={() => updateSchool(schoolId)}
    />
  );
};

export default UpdateSchool;
// const [schoolName, setschoolName] = useState("");
// const [location, setLocation] = useState("");
// const [contact, setcakeContact] = useState("");
// const [busServices, setbusServices] = useState("");
// const updateschool = async () => {
//   try {
//     const response = await axios.put(`${baseURL}/${schoolId}`, {
//       name: schoolName,
//       location: location,
//       contact: contact,
//       busServices: busServices,
//     });

//     console.log("School updated successfully:", response.data);
//   } catch (error) {
//     console.log("test");
//     console.error("Error updating school:", error);
//   }
// };
// const updateschool = {
//   name: schoolName,
//   location: location,
//   contact: contact,
//   busServices: busServices,
// };
// axios
//   .put(`${baseURL}/${schoolId}`, updateschool)

//   .then((response) => {
//     console.log("school add successfully:", response.data);
//   })
//   .catch((error) => {
//     console.log("Error adding school:", error);
//   });

//   return (
//     <div>
//       <h1>Edit School </h1>

//       <div>
//         <label className="label">School Name :</label>
//         <input
//           className="form-input"
//           name="schoolName"
//           value={schoolName}
//           placeholder="School name"
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>School Location :</label>
//         <input
//           className="form-input"
//           name="location"
//           placeholder="School Location"
//           value={location}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label>School Contact :</label>
//         <input
//           className="form-input"
//           name="contact"
//           placeholder="School Contact"
//           value={contact}
//           onChange={handleInputChange}
//         />
//       </div>

//       <div>
//         <label>School Bus Services :</label>
//         <input
//           className="form-input"
//           name="busServices"
//           value={busServices}
//           placeholder="School Bus Services"
//           onChange={handleInputChange}
//         />
//       </div>

//       <button
//         type="submit"
//         onClick={() => updateSchool(schoolId)}
//         className="button-88"
//       >
//         Save Update
//       </button>
//     </div>
//     // <div>
//     //   <h1>Edit School </h1>

//     //   <div>
//     //     <label className="label">School Name :</label>
//     //     <input
//     //       className="form-input"
//     //       value={schoolName}
//     //       placeholder="School name"
//     //       onChange={(e) => setschoolName(e.target.value)}
//     //     />
//     //   </div>
//     //   <div>
//     //     <label>School Location :</label>
//     //     <input
//     //       className="form-input"
//     //       placeholder="School Location"
//     //       value={location}
//     //       onChange={(e) => setLocation(e.target.value)}
//     //     />
//     //   </div>
//     //   <div>
//     //     <label>School Contact :</label>
//     //     <input
//     //       className="form-input"
//     //       placeholder="School Contact"
//     //       value={contact}
//     //       onChange={(e) => setcakeContact(e.target.value)}
//     //     />
//     //   </div>

//     //   <div>
//     //     <label>School Bus Services :</label>
//     //     <input
//     //       className="form-input"
//     //       value={busServices}
//     //       placeholder="School Bus Services"
//     //       onChange={(e) => setbusServices(e.target.value)}
//     //     />
//     //   </div>

//     //   <button type="submit" onClick={updateschool} className="button-88">
//     //     Save Update
//     //   </button>
//     // </div>
//   );
// };

// export default UpdateSchool;
