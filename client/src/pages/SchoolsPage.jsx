import AddSchool from "../components/Form/AddSchool";
import SchoolForm from "../components/Form/SchoolForm";
import { useState } from "react";
import "../style/schoolspage.css";

const SchoolsPage = () => {
  const [isFormAddVisible, setIsFormAddVisible] = useState(false);
  const addSchool = () => {
    setIsFormAddVisible(true);
  };
  return (
    <body>
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
          <button className="button-88" role="button" onClick={addSchool}>
            ADD SCHOOL
          </button>

          <hr />
        </div>
        <div className="school">
          {" "}
          <div className="render-com">
            <SchoolForm />
            <SchoolForm />
          </div>
        </div>
      </div>
      <div className="school-page"></div>
      <div className="background-footer"></div>
      {isFormAddVisible && (
        <AddSchool onClose={() => setIsFormAddVisible(false)} />
      )}
    </body>
  );
};

export default SchoolsPage;
