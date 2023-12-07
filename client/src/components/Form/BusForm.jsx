import "../../style/schoolspage.css";
const BusForm = () => {
  return (
    <form className="form-container">
      <div className="bus-details">
        <label className="label-style">
          <span>1. Bus Name:</span>Bus1
        </label>
        <label className="label-style">
          <span>Pickup Times:</span> [List of pickup times]
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </label>
        <label className="label-style">
          <span>Drop-off Times: </span>[List of drop-off times]
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </label>
        <label className="label-style">
          <span> Loading/Unloading Stations: </span> [Locations]
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </label>
      </div>

      <div className="button-container">
        <button className="button-88 edite button-style" role="button">
          Edit
        </button>
        <button className="button-88 delete button-style" role="button">
          Delete
        </button>
      </div>
    </form>
  );
};

export default BusForm;
