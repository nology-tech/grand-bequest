import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <div>
      <h1> Please Work</h1>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.449313, -2.58797]}>
          <Popup>Almost certainly not _Nology</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
