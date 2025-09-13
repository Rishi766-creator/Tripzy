import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to update map view
const UpdateMap = ({ coords }) => {
  const map = useMap();
  map.setView([coords.lat, coords.lng], map.getZoom());
  return null;
};

const Track = () => {
  const [location, setLocation] = useState(null);
  const watchIdRef = useRef(null);

  // Stop tracking on component unmount
  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) navigator.geolocation.clearWatch(watchIdRef.current);
    };
  }, []);

  const handleTrack = () => {
    if (navigator.geolocation) {
      watchIdRef.current = navigator.geolocation.watchPosition(
        (pos) =>
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }),
        (err) => console.log("Geolocation error:", err),
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gray-100">
      <button
        className="bg-green-500 text-white p-3 rounded-lg mb-5 font-semibold"
        onClick={handleTrack}
      >
        Track My Location
      </button>

      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        {location ? (
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={16}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[location.lat, location.lng]} />
            <UpdateMap coords={location} />
          </MapContainer>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-lg font-medium">Click "Track My Location" to start</p>
          </div>
        )}
      </div>

      {location && (
        <div className="mt-5 text-lg font-medium">
          Latitude: {location.lat.toFixed(5)}, Longitude: {location.lng.toFixed(5)}
        </div>
      )}
    </div>
  );
};

export default Track;
