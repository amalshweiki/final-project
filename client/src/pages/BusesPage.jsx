import BusForm from "../components/Form/BusForm";
import foterimage from "../images/busPage.jpg";
import "../style/busespage.css";
const BusesPage = () => {
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
          <button className="button-88" role="button">
            ADD BUS
          </button>
          <hr />
        </div>
        <div className="bus">
          <div className="render-com">
            <BusForm />
            <BusForm />
          </div>
        </div>
        <div className="image">
          <img src={foterimage} />
        </div>
      </div>
      <div className="bus-footer"></div>
    </div>
  );
};

export default BusesPage;
