import React from "react";

import {MapContainer, CircleMarker, TileLayer, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// import mapData from './geoJSON/bedrijven_normal_json.json'

// import L from 'leaflet';
import './Map.module.css';


class Map extends React.Component {
    state = {}

    mapCenter = [51.44402355, 5.472920898];

    render() {
        return (
            <MapContainer
            center={this.mapCenter}
            zoom={13}
            style={{width: '100%', height: '100%'}}
          >
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmllbHNkb2JiZWxhYXIiLCJhIjoiY2wxMjN4anhjMDJvYjNlcGR3ZDVwN2RhbiJ9.M3p510hqjAir3XSYRvPqsQ"
            maxZoom={20}
          >
          </TileLayer>
          </MapContainer>
        );
    }
}

export default Map;