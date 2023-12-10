import "../../style/modal.css";
import useSchoolForm from "../../hooks/useSchoolForm";
import AddEditSchool from "./AddEditSchool";

const baseURL = import.meta.env.VITE_BASE_URL_SCHOOLS;
const AddSchool = () => {
  const initialState = {
    name: "",
    location: "",
    contact: "",
    busServices: "",
  };

  const {
    schoolName,
    location,
    contact,
    busServices,
    handleInputChange,
    submitForm,
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
    <AddEditSchool title="Add School" fields={fields} onSubmit={submitForm} />
  );
};

export default AddSchool;
