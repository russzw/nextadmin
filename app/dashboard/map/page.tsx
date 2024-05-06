"use client"

import styles from "./map.module.css"
import { useEffect, useState } from "react"
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
} from "@vis.gl/react-google-maps"
import { darkModeMapStyle } from "@/app/lib/mapStyles"
import React from "react"

export default function Mapper() {
  const position = {lat:-17.809456, lng: 31.037992}

  return(
    <div style={{height: "100vh", width: "100%" }}>
      <APIProvider apiKey="AIzaSyDBSfE6Xg5BY5jSf3_gzr1V52irZGWGGos">
        <Map center={position} zoom={14}  styles={darkModeMapStyle}
        fullscreenControl = {false} zoomControl={true}>
          <Directions/>
        </Map>
      </APIProvider>
    </div>
  )
}

function Directions() {
  const map = useMap();
  const routeslibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routeslibrary || !map) return;
    setDirectionsService(new routeslibrary.DirectionsService());
    setDirectionsRenderer(new routeslibrary.DirectionsRenderer({ map }));
  }, [routeslibrary, map]);

  useEffect(() => {
    if (!directionsRenderer || !directionsService) return;

    directionsService.route({
      origin: "-17.820587117773236, 31.02204701024367",
      destination: "-17.820836287961782, 31.046514506847107",
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true,
    }).then(response => {
      setRoutes(response.routes);
      directionsRenderer.setDirections(response);
    });
  }, [directionsService, directionsRenderer]);

  useEffect (() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer])

  if (!leg) return null;

  return (
    <div className={styles.summary}>
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>
      <p>
        Distance: {leg.distance?.text}
      </p>
      <p>
        Duration: {leg.duration?.text}
      </p>
      <h2 className={styles.others}>
        Other routes
        <ul>
          {routes.map(( route, index) => (
          <li key={route.summary}>
            <button className={styles.btn} onClick={() => setRouteIndex(index)}>
            {route.summary}
            </button>
            </li>
            ))}
        </ul>
      </h2>
    </div>
  );
}