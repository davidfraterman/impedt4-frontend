import React from "react";
import axios from 'axios';

import {MapContainer, CircleMarker, TileLayer, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



class Map extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        bedrijven: []
      }
    }
    
    componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/bedrijven')
        .then(res => {
          this.setState({bedrijven: res.data})
        })
        .catch (function (error) {
          console.log(error);
        });
    }

    getData() {
      return this.state.bedrijven
    }

    getMarker = () => {
      let amountofmarkers = 0;
      return(
        
      <div>
      {this.getData().map((data, i) => {

      if(data.relevant == 1 && data.gepland == 0 && data.todo == 0){
        return(
          <div>
            <CircleMarker key={"bedrijf"} 
            radius={3} 
            color={"black"}
            weight={1}
            fillColor={"grey"}
            fillOpacity={1}
            center={[parseFloat(data.latitude.replace(",",".")), parseFloat(data.longitude.replace(",","."))]}>
            </CircleMarker>
          </div>
          )
      }
      if(data.relevant == 1 && data.gepland == 1 && data.todo == 0){
        return(
          <div>
            <CircleMarker key={"bedrijf"} 
            radius={3} 
            color={"black"}
            weight={1}
            fillColor={"blue"}
            fillOpacity={1}
            center={[parseFloat(data.latitude.replace(",",".")), parseFloat(data.longitude.replace(",","."))]}>
            </CircleMarker>
          </div>
          )
      }
      if(data.relevant == 1 && data.gepland == 1 && data.todo == 1){
        return(
          <div>
            <CircleMarker key={"bedrijf"} 
            radius={3} 
            color={"black"}
            weight={1}
            fillColor={"green"}
            fillOpacity={1}
            center={[parseFloat(data.latitude.replace(",",".")), parseFloat(data.longitude.replace(",","."))]}>
            </CircleMarker>
          </div>
          )
      }

      })}
      </div>
      )
      
    }

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
            {this.getMarker()}
          </MapContainer>
        );
    }
}



export default Map;