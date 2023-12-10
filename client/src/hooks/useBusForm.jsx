import { useState } from "react";
import axios from "axios";

const useBusForm = (initialState, apiUrl) => {
  const [driverName, setdriverName] = useState(initialState.drivername);
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
      case "DriverName":
        setdriverName(value);
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
      name: driverName,
      contact,
      dropoffTimes,
      pickupTimes,
      loadingUnloadingStation,
      schools,
    };

    try {
      const response = await axios.post(apiUrl, data);
      console.log("bus added successfully:", response.data);
    } catch (error) {
      console.error("school adding school:", error);
    }
  };
  const updateBus = async (schoolId) => {
    const data = {
      name: driverName,
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
    driverName,
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
