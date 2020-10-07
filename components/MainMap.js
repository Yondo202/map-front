
import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { motion } from 'framer-motion'

import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { FaParking } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdLocationCity } from "react-icons/md";
import { GiStairs, GiFootyField } from "react-icons/gi";




let easing = [0.5, 0.9, 0.16, 0.95];
const textVariants = {
    exit: { y: 100, transition: { duration: 0.9, ease: easing } },
    enter: {
        y: 0,
        transition: { delay: 0.2, duration: 0.9, ease: easing }
    }
};


const style = {
    width: '100%',
    height: '100%'
}

const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%'
}



export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

    mapStyles = () => {
        return [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 13 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#08304b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#0c4152" }, { "lightness": 5 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b434f" }, { "lightness": 25 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b3d51" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "color": "#146474" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#021019" }] }]
    }



    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };


    render() {
        return (
            <div className="MainMapParent" style={{ width: '100vw', height: '100vh' }}>

                {/* <Map google={this.props.google} initialCenter={{
                    lat: 47.91737606059214,
                    lng: 106.91336779475739
                }} zoom={14} styles={[{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 13 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#08304b" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#0c4152" }, { "lightness": 5 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b434f" }, { "lightness": 25 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#0b3d51" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "color": "#146474" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#021019" }] }]
                }> */}

                <Map
                    containerStyle={containerStyle}
                    google={this.props.google} zoom={14}
                    style={style}
                    initialCenter={{
                        lat: 47.91737606059214,
                        lng: 106.91336779475739
                    }}
                    zoom={15}
                    onClick={this.onMapClicked}
                    styles={[
                        {
                            featureType: "poi.business",
                            stylers: [{ visibility: "off" }],
                        },
                        {
                            featureType: "transit",
                            elementType: "labels.icon",
                            stylers: [{ visibility: "off" }],
                        },
                    ]}
                >

                    <Marker
                        animation={1}
                        icon={{
                            url: require('../img/3.png'),
                            anchor: new google.maps.Point(32, 32),
                            scaledSize: new google.maps.Size(50, 50)
                        }}
                        onClick={this.onMarkerClick}
                        title={'The marker`s title will appear as a tooltip.'}
                        name={
                            <div className="conPar">
                                <img src={require('../img/house4.jpg')} />

                                <div className="textCont">
                                    <span className="title">Нархан хотхон - Байр зарна</span>
                                    <div className="textPar">
                                        <div className="group1">
                                            <div className="content">
                                                <GiStairs />
                                                <div className="contentChild">
                                                    <span className="value1">Давхар:</span>
                                                    <span className="value">6 давхарт</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <GiFootyField />
                                                <div className="contentChild">
                                                    <span className="value1">Талбай: </span>
                                                    <span className="value">31.6 м²</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group1">
                                            <div className="content">
                                                <FaRegMoneyBillAlt />
                                                <div className="contentChild">
                                                    <span className="value1">Үнэ:</span>
                                                    <span className="value">15 сая ₮</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <FaParking />
                                                <div className="contentChild">
                                                    <span className="value1">Гараж:</span>
                                                    <span className="value">Байхгүй</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group1">
                                            <div className="content">
                                                <GoLocation />
                                                <div className="contentChild">
                                                    <span className="value1">Дүүрэг:</span>
                                                    <span className="value">Баянзүрх</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <MdLocationCity />
                                                <div className="contentChild">
                                                    <span className="value1">Байрлал:</span>
                                                    <span className="value">1-р хороолол</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="DescPAr">
                                            <span>Дулаан тохилог
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        position={{ lat: 47.91882851772318, lng: 106.92667155147114 }} />



                    <Marker
                        animation={1}
                        icon={{
                            url: require('../img/2.png'),
                            anchor: new google.maps.Point(32, 32),
                            scaledSize: new google.maps.Size(50, 50)
                        }}
                        onClick={this.onMarkerClick}
                        name={
                            <div className="conPar">
                                <img src={require('../img/house5.jpg')} />

                                <div className="textCont">
                                    <span className="title">Нархан хотхон - Байр зарна</span>
                                    <div className="textPar">
                                        <div className="group1">
                                            <div className="content">
                                                <GiStairs />
                                                <div className="contentChild">
                                                    <span className="value1">Давхар:</span>
                                                    <span className="value">6 давхарт</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <GiFootyField />
                                                <div className="contentChild">
                                                    <span className="value1">Талбай: </span>
                                                    <span className="value">31.6 м²</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group1">
                                            <div className="content">
                                                <FaRegMoneyBillAlt />
                                                <div className="contentChild">
                                                    <span className="value1">Үнэ:</span>
                                                    <span className="value">15 сая ₮</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <FaParking />
                                                <div className="contentChild">
                                                    <span className="value1">Гараж:</span>
                                                    <span className="value">Байхгүй</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group1">
                                            <div className="content">
                                                <GoLocation />
                                                <div className="contentChild">
                                                    <span className="value1">Дүүрэг:</span>
                                                    <span className="value">Баянзүрх</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <MdLocationCity />
                                                <div className="contentChild">
                                                    <span className="value1">Байрлал:</span>
                                                    <span className="value">1-р хороолол</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="DescPAr">
                                            <span>Дулаан тохилог
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        position={{ lat: 47.92225097822737, lng: 106.91667227626363 }} />
                    <Marker />



                    <Marker
                        animation={1}
                        onClick={this.onMarkerClick}
                        name={
                            <div className="conPar">
                                <img src={require('../img/house6.jpg')} />

                                <div className="textCont">
                                    <span className="title">Нархан хотхон - Байр зарна</span>
                                    <div className="textPar">
                                        <div className="group1">
                                            <div className="content">
                                                <GiStairs />
                                                <div className="contentChild">
                                                    <span className="value1">Давхар:</span>
                                                    <span className="value">6 давхарт</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <GiFootyField />
                                                <div className="contentChild">
                                                    <span className="value1">Талбай: </span>
                                                    <span className="value">31.6 м²</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group1">
                                            <div className="content">
                                                <FaRegMoneyBillAlt />
                                                <div className="contentChild">
                                                    <span className="value1">Үнэ:</span>
                                                    <span className="value">15 сая ₮</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <FaParking />
                                                <div className="contentChild">
                                                    <span className="value1">Гараж:</span>
                                                    <span className="value">Байхгүй</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group1">
                                            <div className="content">
                                                <GoLocation />
                                                <div className="contentChild">
                                                    <span className="value1">Дүүрэг:</span>
                                                    <span className="value">Баянзүрх</span>
                                                </div>
                                            </div>
                                            <div className="content content2">
                                                <MdLocationCity />
                                                <div className="contentChild">
                                                    <span className="value1">Байрлал:</span>
                                                    <span className="value">1-р хороолол</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="DescPAr">
                                            <span>Дулаан тохилог
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        position={{ lat: 47.92357388547662, lng: 106.93104891658345 }}
                        icon={{
                            url: require('../img/1.png'),
                            anchor: new google.maps.Point(32, 32),
                            scaledSize: new google.maps.Size(50, 50)
                        }} />


                    <InfoWindow
                        onOpen={this.windowHasOpened}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onInfoWindowClose}>
                        <div className="windowPar">
                            {this.state.selectedPlace.name}
                        </div>
                    </InfoWindow>

                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (`AIzaSyA70FyK0IXccej33Oj3k7decCj5UsIYt0Y`)
})(MapContainer)