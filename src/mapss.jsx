import {  useEffect } from "react";
import { MapContainer, TileLayer,Marker, useMap,useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS


export default function Maps({position,initialPosition,setPosition}) {
   

  function MapClickHandler() {
    useMapEvent("click", (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
        console.log([lat, lng]);
        
    });

    return null;
  }

  function ChangeCenter({ position }) {
    const map = useMap();

    useEffect(() => {
      map.setView(position);
    }, [position, map]);

    return null;
  }
    return (
      <MapContainer
        center={initialPosition}
        zoom={6}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          
        </Marker>
        <ChangeCenter position={position} />
        <MapClickHandler />
      </MapContainer>
    );
  }

