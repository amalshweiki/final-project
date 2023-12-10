import { useEffect, useState } from "react";
import axios from "axios";
import BusForm from "../components/Form/BusForm";
import foterimage from "../images/busPage.jpg";
import Modal from "../components/Form/Modal";
import AddBus from "../components/Form/AddBus";
const baseURL = import.meta.env.VITE_BASE_URL_BUSES;

import "../style/busespage.css";
const BusesPage = () => {
  //
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
  //
  const [buses, setBuses] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setBuses(response.data.data);
    });
  }, []);
  useEffect(() => {
    console.log("amal");
    console.log(buses);
  }, [buses]);
  return (
    <div>
      <div className="grid-container-bus-page">
        <div className="TitleAndPar">
          <h1> Explore Our Buses</h1>
          <p>
            Welcome to the Buses Page of the School Bus Coordination Project.
            Here, you will find a comprehensive list of buses that play a vital
            role in ensuring safe and efficient student transportation. Each bus
            is dedicated to serving specific schools, providing a crucial link
            between educational institutions and families.
          </p>
        </div>
        <div className="list-of-Buses">
          <h1>List of Participating Buses</h1>
          <button
            className="button-88"
            role="button"
            onClick={() => handleOpenModal()}
          >
            ADD BUS
          </button>
          <hr />
        </div>
        <div className="bus">
          <div className="render-com">
            {buses.map((bus) => (
              <BusForm key={bus._id} bus={bus} />
            ))}
          </div>
        </div>

        <div className="image">
          <img src={foterimage} />
        </div>
      </div>
      <div className="bus-footer"></div>
      {isFormAddVisible && (
        <AddBus onClose={() => setIsFormAddVisible(false)} />
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddBus />
      </Modal>
    </div>
  );
};

export default BusesPage;
