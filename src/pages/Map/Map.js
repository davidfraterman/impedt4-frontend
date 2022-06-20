import React from "react";
import axios from 'axios';

import { Link } from 'react-router-dom'
import { MapContainer, CircleMarker, Marker, TileLayer, Popup } from 'react-leaflet';
import { Icon } from '@iconify/react';
import 'leaflet/dist/leaflet.css';
import "./Map.css";

import * as ROUTES from '../../constants/routes'

import L from 'leaflet';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedrijven: [],
      todoChange: null,
      showLegend: false,
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
        console.log(res)
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
        window.location.href = "http://localhost:3000/todo";
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addToplan(id, e) {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/addToplan', { id: id })
      .then(function (response) {
        console.log(response.data);
        window.location.href = "http://localhost:3000/kaart";
      })
      .catch(function (error) {
        console.log(error);
      });
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
          if (data.relevant === 1 && data.gepland == 0 && data.todo === 0 && data.plan === 0) {
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
                    <h1>Bedrijf {data.id}</h1>
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
                    <h1>Bedrijf {data.id}</h1>
                    <p>Info: {data.category}</p>
                    <p>Risicofactor: {data.riskindicator}%</p>
                    <form onSubmit={this.addTodo.bind(this, data.id)}>
                      <button type="submit" className='markerPopupButton'>Toevoegen aan ToDo</button>
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
                    <Link to={ROUTES.INSPECTIE.replace(':id', data.id)}>
                      <button className='markerPopupButton'>Controleren</button>
                    </Link>
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
                    <h1>Bedrijf {data.id}</h1>
                    <h2>Gecontroleerd!</h2>
                    <p>Info: {data.category}</p>
                    <p>Risicofactor: {data.riskindicator}%</p>
                  </Popup>
                </CircleMarker>
              </div>
            )
          } else {
            console.log("je moeder is een plopkoek!")
          }

        })}
      </div>
    )

  }

  mapCenter = [51.44362355, 5.472920898];

  toggleLegend = () => {
    this.setState({
      showLegend: !this.state.showLegend
    });
  }

  render() {
    return (

      <section className="mapsection">

        <Link to={ROUTES.TODO}>
          <section className="map__todoListBtnWrapper">
            <Icon className="map__btn" icon="bi:list-check" color="var(--clr-main)" height="40" />
          </section>
        </Link>

        {!this.state.showLegend &&
        <section className="map__legendBtnWrapper" onClick={this.toggleLegend}>
          <Icon className="map__btn" icon="clarity:help-info-line" color="var(--clr-main)" height="40" />
        </section>
        }

        {this.state.showLegend &&
        <section className="map__legend">
          <section className="map__legend__closeIconWrapper">
            <h2>Legenda</h2>
            <Icon onClick={this.toggleLegend} className="map__legend__closeIcon" icon="ep:close-bold" color="var(--clr-black)" height="30" />
          </section>
            <div className="row">
              <p>Gecontroleerd</p>
              <div className="dot green"></div>
            </div>
            <div className="row">
              <p>Relevant</p>
              <div className="dot blue"></div>
            </div>
            <div className="row">
              <p>Irrelevant</p>
              <div className="dot grey"></div>
            </div>
            <div className="row">
              <p>Gepland</p>
              <div className="dot orange"></div>            
              </div>
        </section>
        }

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