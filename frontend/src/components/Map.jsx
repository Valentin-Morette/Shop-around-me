import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import useGeolocation from "react-hook-geolocation";
import "leaflet/dist/leaflet.css";

const shopPosition = [49.258329, 4.031696];

const position = (geolocation) => {
  if (geolocation.error || !geolocation.latitude || !geolocation.longitude) {
    return null;
  }

  return [geolocation.latitude, geolocation.longitude];
};

function Map() {
  const userGeolocation = useGeolocation();
  const userPosition = position(userGeolocation);

  return (
    <div className="flex flex-col text-center">
      <h1>Résultats :</h1>
      <MapContainer
        zoom={13}
        center={userPosition ?? shopPosition}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "800px" }}
        className="rounded-xl border-solid border border-gray-200"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={shopPosition}>
          <Popup>The shop</Popup>
        </Marker>
        {!userGeolocation.error && userGeolocation.latitude && (
          <Marker position={userPosition}>
            <Popup>Your position.</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
