import React, { useState } from "react";
import axios from "axios";

function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleTrackParcel = async () => {
    const response = await axios.get(
      `http://localhost:4000/Tracking_Parcel?tracking_number=${trackingNumber}`
    );
    console.log("Response", response.data);
    if (response.data.parcel_tracking_items) {
      const formattedData = response.data.parcel_tracking_items.map((item) => ({
        timestamp: formatTimestamp(item.timestamp),
        location: item.location
          ? `${item.location}, ${item.country.isoCode}`
          : item.state
          ? `${item.state}, ${item.city}, ${item.country.isoCode}`
          : `${item.city}, ${item.country.isoCode}`,
      }));
      setTrackingInfo(formattedData);
    } else {
      setTrackingInfo([]);
    }
  };

  return (
    <div>
      <h2>Tracking</h2>
      <div>
        <label>
          Tracking Number:
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleTrackParcel}>Track Parcel</button>
      {trackingInfo && trackingInfo.length > 0 && (
        <div>
          <h3>Tracking Information</h3>
          <ul>
            {trackingInfo.map((item, index) => (
              <li key={index}>
                Timestamp: {item.timestamp} | Location: {item.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Tracking;
