import React from "react";
import axios from 'axios';

import { Link } from 'react-router-dom'
import { MapContainer, CircleMarker, Marker, TileLayer, Popup } from 'react-leaflet';
import { Icon } from '@iconify/react';
import 'leaflet/dist/leaflet.css';
import "./Map.css";

import * as ROUTES from '../../constants/routes'
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

// import L from 'leaflet';


class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrijven: [],
      todoChange: null,
    }
  }

  GetIcon(_iconSize) {
    return L.icon({
      iconUrl: require("../../assets/poppetje.png"),
      iconSize: [_iconSize]
    })
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/bedrijven')
      .then(res => {
        this.setState({ bedrijven: res.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addTodo(id, e) {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/addTodo', { id: id })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // window.location.href = "http://localhost:3000/todo";
  }

  addToplan(id, e) {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/addToplan', { id: id })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // window.location.href = "http://localhost:3000/todo";

  }


  getData() {
    return this.state.bedrijven
  }

  getMarker = () => {
    let amountofmarkers = 0;
    return (

      <div>
        {this.getData().map((data, i) => {

          //markers die niet geconroleerd te hoeven worden
          if (data.relevant === 1 && data.gepland === 0 && data.todo === 0 && data.plan === 0) {
            return (
              <div>
                <CircleMarker key={"bedrijf"}
                  radius={5}
                  color={"black"}
                  weight={1}
                  fillColor={"grey"}
                  fillOpacity={1}
                  center={[parseFloat(data.latitude.replace(",", ".")), parseFloat(data.longitude.replace(",", "."))]}>
                  <Popup>
                    <h1>Bedrijf</h1>
                    <p>Info: {data.category}</p>
                    <p>Risicofactor: {data.riskindicator}%</p>
                  </Popup>
                </CircleMarker>
              </div>
            )
          }

          //markers die gecontroleerd moeten worden
          if (data.relevant === 1 && data.gepland === 1 && data.todo === 0 && data.plan === 0) {
            return (
              <div>
                <CircleMarker key={"bedrijf"}
                  radius={10}
                  color={"black"}
                  weight={1}
                  fillColor={"blue"}
                  fillOpacity={1}
                  center={[parseFloat(data.latitude.replace(",", ".")), parseFloat(data.longitude.replace(",", "."))]}>
                  <Popup>
                    <h1>Bedrijf</h1>
                    <p>Info: {data.category}</p>
                    <p>Risicofactor: {data.riskindicator}%</p>
                    <form onSubmit={this.addTodo.bind(this, data.id)}>
                      <button type="submit">Toevoegen aan ToDo</button>
                    </form>

                  </Popup>
                </CircleMarker>
              </div>
            )
          }

          //markers die toegevoegd zijn aan de to do list
          if (data.relevant === 1 && data.gepland === 1 && data.todo === 1 && data.plan === 0) {
            return (
              <div>
                <CircleMarker key={"bedrijf"}
                  radius={10}
                  color={"black"}
                  weight={1}
                  fillColor={"orange"}
                  fillOpacity={1}
                  center={[parseFloat(data.latitude.replace(",", ".")), parseFloat(data.longitude.replace(",", "."))]}>
                  <Popup>
                    <h1>Bedrijf</h1>
                    <p>Info: {data.category}</p>
                    <p>Risicofactor: {data.riskindicator}%</p>
                    <form onSubmit={this.addToplan.bind(this, data.id)}>
                      <button type="submit">Bedrijf gecontroleerd</button>
                    </form>
                  </Popup>
                </CircleMarker>
              </div>
            )
          }

          //markers van bedrijven die gecontroleerd zijn
          if (data.relevant === 1 && data.gepland === 1 && data.todo === 0 && data.plan === 1) {
            return (
              <div>
                <CircleMarker key={"bedrijf"}
                  radius={5}
                  color={"black"}
                  weight={1}
                  fillColor={"lime"}
                  fillOpacity={1}
                  center={[parseFloat(data.latitude.replace(",", ".")), parseFloat(data.longitude.replace(",", "."))]}>
                  <Popup>
                    <h1>Bedrijf</h1>
                    <h2>Gecontroleerd!</h2>
                    <p>Info: {data.category}</p>
                    <p>Risicofactor: {data.riskindicator}%</p>
                  </Popup>
                </CircleMarker>
              </div>
            )
          }

        })}
      </div>
    )

  }

  mapCenter = [51.44362355, 5.472920898];

  render() {
    return (

      <section className="mapsection">

        <Link to={ROUTES.TODO}>
          <section className="map__todoListBtnWrapper">
            <Icon className="map__btn" icon="bi:list-check" color="var(--clr-main)" height="40" />
          </section>
        </Link>

        <Link to={ROUTES.HOME}>
          <section className="map__backBtnWrapper">
            <Icon className="map__btn" icon="ant-design:home-outlined" color="var(--clr-main)" height="40" />
          </section>
        </Link>

        <MapContainer
          center={this.mapCenter}
          zoom={17}
          style={{ width: '100%', height: '100%' }}
        >
          <Marker
            position={this.mapCenter}
            icon={this.GetIcon(60)}
          >

          </Marker>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmllbHNkb2JiZWxhYXIiLCJhIjoiY2wxMjN4anhjMDJvYjNlcGR3ZDVwN2RhbiJ9.M3p510hqjAir3XSYRvPqsQ"
            maxZoom={20}
          >
          </TileLayer>
          {this.getMarker()}
        </MapContainer>
      </section>

    );
  }
}



export default Map;