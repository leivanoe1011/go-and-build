import { collection, getDocs } from "firebase/firestore";
import { React, useEffect, useState } from "react";
import { db } from "../../../firebase-config";

import "react-toastify/dist/ReactToastify.css";

function GetOpenTrips() {
  const [openTrips, setOpenTrips] = useState([]);
  const openTripsCollectionRef = collection(db, "OpenTrips");

  useEffect(() => {
    const getOpenTrips = async () => {
      const data = await getDocs(openTripsCollectionRef);
      setOpenTrips(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getOpenTrips();
  }, []);

  return (
    <div>
      {openTrips.map((trip) => {
        <div>
          {" "}
          <h2>Name: {trip.name}</h2>
          <h2>When: {trip.when}</h2>
        </div>;
      })}
    </div>
  );
}

export default GetOpenTrips;
