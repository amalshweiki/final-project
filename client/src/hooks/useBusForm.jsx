import { useState } from "react";
import axios from "axios";

const useBusForm = (initialState, apiUrl) => {
  const [drivername, setdrivername] = useState(initialState.drivername);
  const [contact, setbusContact] = useState(initialState.contact);
  const [pickupTimes, setpickupTimes] = useState(initialState.pickupTimes);
  const [dropoffTimes, setdropoffTimes] = useState(initialState.dropoffTimes);
  const [loadingUnloadingStation, setloadingUnloadingStation] = useState(
    initialState.loadingUnloadingStation
  );
  const [schools, setschools] = useState(initialState.schools);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "drivername":
        setdrivername(value);
        break;
      case "contact":
        setbusContact(value);
        break;
      case "pickupTimes":
        setpickupTimes(value);
        break;
      case "dropoffTimes":
        setdropoffTimes(value);
        break;
      case "loadingUnloadingStation":
        setloadingUnloadingStation(value);
        break;
      case "schools":
        setschools(value);
        break;
      default:
        break;
    }
  };
  const submitForm = async () => {
    const data = {
      name: drivername,
      contact,
      dropoffTimes,
      pickupTimes,
      loadingUnloadingStation,
      schools,
    };
    console.log("Submit Data:", data);
    try {
      const response = await axios.post(apiUrl, data);
      console.log("bus added successfully:", response.data);
    } catch (error) {
      console.error("Error adding bus:", error);
    }
  };
  const updateBus = async (busId) => {
    const data = {
      name: drivername,
      contact,
      dropoffTimes,
      pickupTimes,
      loadingUnloadingStation,
      schools,
    };

    try {
      const response = await axios.put(`${apiUrl}/${busId}`, data);
      console.log("bus updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating bus:", error);
    }
  };
  return {
    drivername,
    contact,
    dropoffTimes,
    pickupTimes,
    loadingUnloadingStation,
    schools,
    handleInputChange,
    submitForm,
    updateBus,
  };
};
export default useBusForm;
