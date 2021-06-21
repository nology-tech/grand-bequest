import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "./Map.scss";

const Map = () => {
  const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
      map.locate();
    }, []);
    
    const map = useMapEvents({
      dblclick: () => {
        map.locate();
      },

      locationfound: (e) => {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here, at {position.toString()}</Popup>
      </Marker>
    );
  };

  const ClickMarker = () => {
    const [position, setPosition] = useState(null);
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>{position.toString()}</Popup>
      </Marker>
    );
  };

  return (
    <div>
      <MapContainer
        center={[51.505537, -0.128746]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker />

        <ClickMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
