import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "./Map.scss";

const Map = (props) => {

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
      if (!props.currentLocation.length) {
        console.log("map.locate");
        map.locate({enableHighAccuracy: true});
      }
    }, []);
    
    const map = useMapEvents({
      locationfound: (e) => {
        console.log("location found");
        props.setCurrentLocation(e.latlng);
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom(), {
          animate: true,
          duration: 1 // seconds
        });
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
      dblclick(e) {
        props.setManualLocation(e.latlng);
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
        center={!props.currentLocation.length ? [51.505537, -0.128746] : props.currentLocation}
        zoom={15}
        maxZoom={18}
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
