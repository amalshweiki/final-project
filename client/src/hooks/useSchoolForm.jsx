import { useState } from "react";
import axios from "axios";

const useSchoolForm = (initialState, apiUrl) => {
  const [schoolName, setschoolName] = useState(initialState.name);
  const [location, setLocation] = useState(initialState.location);
  const [contact, setschoolContact] = useState(initialState.contact);
  const [busServices, setbusServices] = useState(initialState.busServices);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "schoolName":
        setschoolName(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "contact":
        setschoolContact(value);
        break;
      case "busServices":
        setbusServices(value);
        break;
      default:
        break;
    }
  };

  const submitForm = async () => {
    const data = {
      name: schoolName,
      location,
      contact,
      busServices,
    };

    try {
      const response = await axios.post(apiUrl, data);
      console.log("School added successfully:", response.data);
    } catch (error) {
      console.error("Error adding school:", error);
    }
  };

  const updateSchool = async (schoolId) => {
    const data = {
      name: schoolName,
      location,
      contact,
      busServices,
    };

    try {
      const response = await axios.put(`${apiUrl}/${schoolId}`, data);
      console.log("School updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating school:", error);
    }
  };

  return {
    schoolName,
    location,
    contact,
    busServices,
    handleInputChange,
    submitForm,
    updateSchool,
  };
};

export default useSchoolForm;
