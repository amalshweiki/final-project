import { Link } from "react-router-dom";
import closeImage from "../../images/close icon.jpeg";
import { useState } from "react";
import Modal from "react-modal";
import "../../style/modal.css";
const customStyles = {
  content: {
    background: "#ffc728",
    width: "30%",
    height: "60%",
    margin: "auto",
    top: "70%",
    left: "-10%",
    transform: "translateY(-50%)",
    zIndex: 10000,
  },
};

const AddSchool = ({ onClose }) => {
  const [isModelOpen, setIsModelOpen] = useState(true);
  const [schoolName, setschoolName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setcakeContact] = useState("");
  const [busServices, setbusServices] = useState("");
  const addschool = {
    name: schoolName,
    location: location,
    contact: contact,
    busServices: busServices,
  };
  return (
    <div className="modal-add">
      <Modal
        style={customStyles}
        isOpen={isModelOpen}
        onRequestClose={onClose}
        appElement={document.getElementById("app")}
      >
        <h1>Add School </h1>
        <Link to="/schools">
          <img
            className="imgclose"
            src={closeImage}
            onClick={onClose}
            alt="Close"
          />
        </Link>

        <div>
          <label className="label">School Name :</label>
          <input
            className="form-input"
            value={schoolName}
            placeholder="School name"
            onChange={(e) => setschoolName(e.target.value)}
          />
        </div>
        <div>
          <label>School Location :</label>
          <input
            className="form-input"
            placeholder="School Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>School Contact :</label>
          <input
            className="form-input"
            placeholder="School Contact"
            value={contact}
            onChange={(e) => setcakeContact(e.target.value)}
          />
        </div>

        <div>
          <label>School Bus Services :</label>
          <input
            className="form-input"
            value={busServices}
            placeholder="School Bus Services"
            onChange={(e) => setbusServices(e.target.value)}
          />
        </div>

        <button type="submit" onClick={addschool} className="button-88">
          add School
        </button>
      </Modal>
    </div>
  );
};

export default AddSchool;
