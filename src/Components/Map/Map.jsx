import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "./Map.scss";
import L from "leaflet";
import originalMarker from "../../assets/images/marker.png";
import orangeMarker from "../../assets/images/location-marker.png";
import greenMarker from "../../assets/images/building-marker.png";

const Map = (props) => {
  let defaultMarker = new L.Icon({
    iconUrl: originalMarker,
    iconRetinaUrl: originalMarker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 40],
  });
  let locationMarker = new L.Icon({
    iconUrl: orangeMarker,
    iconRetinaUrl: orangeMarker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 40],
  });
  let buildingMarker = new L.Icon({
    iconUrl: greenMarker,
    iconRetinaUrl: greenMarker,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 40],
  });

  const showDatabaseMarkers = () => {
    // may need a useEffect to render correctly from DB query

    // replace allMarkers with database input
    const allMarkers = [
      [50.833841, -1.688118],
      [51.514403, -2.58728],
      [51.505537, -0.128746],
    ];

    return allMarkers.map((marker) => {
      return <Marker position={marker} icon={defaultMarker} />;
    });
  };

  const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
      if (!props.currentLocation.length) {
        map.locate({ enableHighAccuracy: true });
      }
    }, []);

    const map = useMapEvents({
      // dblclick: () => {
      //   map.locate();
      // },
      locationfound: (e) => {
        console.log("location found");
        props.setCurrentLocation(e.latlng);
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom(), {
          animate: true,
          duration: 1, // seconds
        });
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={locationMarker}>
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
      <Marker position={position} icon={buildingMarker}>
        <Popup>
          <img src="https://www.wilsons.school/history/files/image_256-687129.jpg"></img>
          {/* <button className="moreInfo btn-primary">More Info!</button> */}
          <button className="pendingInfo btn-secondary">Pending Info...</button>
        </Popup>
      </Marker>
    );
  };

  return (
    <div>
      <MapContainer
        center={
          !props.currentLocation.length
            ? [51.505537, -0.128746]
            : props.currentLocation
        }
        zoom={15}
        maxZoom={18}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showDatabaseMarkers()}

        <LocationMarker />

        <ClickMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
