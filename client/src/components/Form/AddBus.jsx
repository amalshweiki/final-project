import useBusForm from "../../hooks/useBusForm";
import AddEditBus from "./AddEditBus";

const baseURL = import.meta.env.VITE_BASE_URL_BUSES;
import "../../style/modal.css";
const AddBus = () => {
  const initialState = {
    driverName: "",
    contact: "",
    dropoffTimes: "",
    pickupTimes: "",
    loadingUnloadingStation: "",
    schools: "",
  };

  const {
    driverName,
    contact,
    dropoffTimes,
    pickupTimes,
    loadingUnloadingStation,
    schools,
    handleInputChange,
    submitForm,
  } = useBusForm(initialState, baseURL);
  const fields = [
    {
      name: "DriverName",
      value: driverName,
      placeholder: "Driver name",
      onChange: handleInputChange,
      label: "Driver Name",
    },
    {
      name: "contact",
      value: contact,
      placeholder: "Bus Contact",
      onChange: handleInputChange,
      label: "Bus Contact",
    },
    {
      name: "dropoffTimes",
      value: dropoffTimes,
      placeholder: "Bus drop off Times (HH:MM AM/PM)",
      onChange: handleInputChange,
      label: "Bus drop off Times",
    },
    {
      name: "pickupTimes",
      value: pickupTimes,
      placeholder: " Bus pickup Times (HH:MM AM/PM)",
      onChange: handleInputChange,
      label: "Bus pickup Times",
    },
    {
      name: "loadingUnloadingStation",
      value: loadingUnloadingStation,
      placeholder: " Bus loading/Unloading Station",
      onChange: handleInputChange,
      label: " Bus loading/Unloading Station",
    },
    {
      name: "schools",
      value: schools,
      placeholder: "schools Servining",
      onChange: handleInputChange,
      label: "schools Servining",
    },
  ];

  return <AddEditBus title="Add Bus" fields={fields} onSubmit={submitForm} />;
};

export default AddBus;
