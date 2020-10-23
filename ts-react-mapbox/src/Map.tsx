import React, { useEffect, useState } from "react";
import "./Map.css";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "access-token";

export default function () {

    const [mapState, setMapState] = useState({
        center: {lng: 23.311380902112887, lat: 65.65920721665407},
        zoom: 4.2,
    })

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/streets-v11",
            center: mapState.center,
            zoom: mapState.zoom
        });
        map.on("move", (_ev) => {
            setMapState({...mapState, center: map.getCenter() })
        });
        map.on("zoom", (_ev) => {
            setMapState({...mapState, zoom: map.getZoom() })
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div className="mapContainer" id="mapContainer" />
        </div>
    )
}
