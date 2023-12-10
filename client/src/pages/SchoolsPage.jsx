import { useEffect, useState } from "react";

import axios from "axios";
import AddSchool from "../components/Form/AddSchool";
import SchoolForm from "../components/Form/SchoolForm";
import Modal from "../components/Form/Modal";
const baseURL = import.meta.env.VITE_BASE_URL_SCHOOLS;

import "../style/schoolspage.css";

const SchoolsPage = () => {
  ////
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  ////
  const [isFormAddVisible, setIsFormAddVisible] = useState(false);
  const addSchool = () => {
    setIsFormAddVisible(true);
  };

  const [schools, setSchools] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setSchools(response.data.data);
    });
  }, []);
  useEffect(() => {
    console.log("amal");
    console.log(schools);
  }, [schools]);

  return (
    <div>
      <div className="grid-container-school-page">
        <div className="TitleAndPar">
          <h1>Welcome to the Schools Page</h1>
          <p>
            Discover the educational institutions partnering with the School Bus
            Coordination Project. Our initiative aims to enhance student
            transportation by fostering collaboration between schools and
            available buses. Below is a list of participating schools, each
            committed to ensuring a safe and efficient journey for their
            students.
          </p>
        </div>
        <div className="list-of-Schools">
          <h1>List of Participating Schools</h1>
          <button
            className="button-88"
            role="button"
            onClick={() => handleOpenModal()}
          >
            ADD SCHOOL
          </button>

          <hr />
        </div>
        <div className="school">
          <div className="render-com">
            {schools.map((school) => (
              <SchoolForm key={school._id} school={school} />
            ))}
          </div>
        </div>
      </div>
      <div className="school-page"></div>
      <div className="background-footer"></div>
      {isFormAddVisible && (
        <AddSchool onClose={() => setIsFormAddVisible(false)} />
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddSchool />
      </Modal>
    </div>
  );
};

export default SchoolsPage;
