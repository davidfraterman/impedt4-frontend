import React from "react";
import axios from 'axios';

import {MapContainer, CircleMarker, TileLayer, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// import mapData from './geoJSON/bedrijven_normal_json.json'

import L from 'leaflet';
// import './MyMap.css';
// const coords = () => {
//   let data;
//   axios.get('http://127.0.0.1:8000/api/bedrijven')
//     .then(res => {
//       const bedrijven = res.data;
//       this.setState({bedrijven});
//     })
    // console.log(data);
  //   let lat = data[id].latitude;
  //   let long = data[id].longitude;
  //   lat = parseFloat(lat.replace(",","."));
  //   long = parseFloat(long.replace(",","."));
  //   // coords.push(lat, long);
  //   coords = [lat, long];
  // return(coords);
// }

const getLat = (id) => {
  let latt;
  axios.get('http://127.0.0.1:8000/api/bedrijven')
    .then(res => {
      const bedrijven = res.data;
      let lat = bedrijven[id].latitude;
      lat = parseFloat(lat.replace(",","."));
      trekken(lat);
    }
  )
}

const trekken = (data) => {
  let lat = data
  return(lat);
}


class Map extends React.Component {
    state = {
    }

    mapCenter = [51.44402355, 5.472920898];

    render() {
      console.log(getLat(0));
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
          {/* <CircleMarker center={[coords(0)[0], coords(0)[1]]}>

          </CircleMarker> */}
          </MapContainer>
        );
    }
}



export default Map;