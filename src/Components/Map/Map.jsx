import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "./Map.scss";
import L, { map } from "leaflet";
import originalMarker from "../../assets/images/marker.png";
import orangeMarker from "../../assets/images/location-marker.png";
import greenMarker from "../../assets/images/building-marker.png";
import InfoModal from "../InfoModal/InfoModal";

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
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      if (!props.currentLocation.length) {
        map.locate({ enableHighAccuracy: true });
      }
    }, []);

    useEffect(() => {
      if (toggle) {
        console.log(position);
        map.flyTo(position, map.getZoom(), {
          animate: true,
          duration: 1, // seconds
        });
        setToggle(false);
      }
    }, [toggle]);

    const map = useMapEvents({
      locationfound: (e) => {
        props.setCurrentLocation([e.latlng.lat, e.latlng.lng]);
        console.log([e.latlng.lat, e.latlng.lng]);
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom(), {
          animate: true,
          duration: 1, // seconds
        });
      },
    });

    if (props.currentLocation.length) {
      return (
        <>
          <Marker position={props.currentLocation} icon={locationMarker}>
            <Popup>You are here, at {props.currentLocation.toString()}</Popup>
          </Marker>
          <button className="locate-button" onClick={() => setToggle(!toggle)}>
            Locate
          </button>
        </>
      );
    } else {
      return position === null ? null : (
        <>
          <Marker position={position} icon={locationMarker}>
            <Popup>You are here, at {position.toString()}</Popup>
          </Marker>
          <button className="locate-button" onClick={() => setToggle(!toggle)}>
            Locate
          </button>
        </>
      );
    }
  };

  const ClickMarker = () => {
    const [position, setPosition] = useState(null);

    useMapEvents({
      dblclick(e) {
        props.setManualLocation([e.latlng.lat, e.latlng.lng]);

        console.log([e.latlng.lat, e.latlng.lng]);
        console.log(props.manualLocation);
        setPosition(e.latlng);
      },
    });

    const [show, setShow] = useState(false);

    const handleOpen = () => {
      setShow(true);
    };

    const handleClose = () => {
      setShow(false);
    };

    if (props.manualLocation.length) {
      return (
        <Marker position={props.manualLocation} icon={buildingMarker}>
          <Popup>
            <img
              src={
                props.imgFile
                  ? URL.createObjectURL(props.imgFile)
                  : "https://www.wilsons.school/history/files/image_256-687129.jpg"
              }
            ></img>

            {props.imgData.live ? (
              <button onClick={handleOpen} className="moreInfo btn-primary">
                More Info!
              </button>
            ) : (
              <button className="pendingInfo btn-secondary">
                Pending Info...
              </button>
            )}
          </Popup>
          <InfoModal handleClose={handleClose} show={show} />
        </Marker>
      );
    } else {
      return position === null ? null : (
        <Marker position={position} icon={buildingMarker}>
          <Popup>
            <img
              src={
                props.imgFile
                  ? URL.createObjectURL(props.imgFile)
                  : "https://www.wilsons.school/history/files/image_256-687129.jpg"
              }
            ></img>

            {props.imgData.live ? (
              <button onClick={handleOpen} className="moreInfo btn-primary">
                More Info!
              </button>
            ) : (
              <button className="pendingInfo btn-secondary">
                Pending Info...
              </button>
            )}
          </Popup>
          <InfoModal handleClose={handleClose} show={show} />
        </Marker>
      );
    }
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
