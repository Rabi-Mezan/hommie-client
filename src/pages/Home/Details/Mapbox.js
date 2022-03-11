import React, { useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicmFiaW1lemFuIiwiYSI6ImNsMGo3MDNpdjA5cHEzaXJrYW1qZzJzbGUifQ.a2NyHEdzDkZQhF6dt-XTUg';



const Mapbox = () => {


    return (
        <Map
            initialViewState={{
                latitude: 29.749907,
                longitude: -95.358421,
                zoom: 14
            }}
            style={{ width: 300, height: 200 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={MAPBOX_TOKEN}
        >
            <Marker longitude={-95.358421} latitude={29.749907} color="red" />
        </Map>
    );
};

export default Mapbox;