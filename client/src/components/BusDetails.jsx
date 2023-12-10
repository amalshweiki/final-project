// BusDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const BusDetails = ({ match }) => {
  const [busDetails, setBusDetails] = useState(null);

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const busId = match?.params?.id;
        if (busId) {
          const response = await axios.get(
            `http://localhost:5000/buses/${busId}`
          );
          setBusDetails(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching bus details:", error);
      }
    };

    fetchBusDetails();
  }, [match]);

  if (!busDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Bus Details</h2>
      <p>Name: {busDetails.name}</p>
      <p>Pickup Times: {busDetails.pickupTimes.join(", ")}</p>
      <p>Drop-off Times: {busDetails.dropoffTimes.join(", ")}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default BusDetails;
