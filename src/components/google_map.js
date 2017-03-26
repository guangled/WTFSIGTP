/*
* @Author: guangled
* @Date:   2017-03-25 13:43:16
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-26 04:10:35
*/

import React, { Component } from 'react';
import MainButton from './main_button';

class GoogleMap extends Component {

	constructor() {
		super();

		this.state = {
			lat: 0,
			lng: 0,
			map: null,
			directionsDisplay: null,
            arr :[]

		}

		this.draw = this.draw.bind(this);
	}

	draw(lat, lng){

                //this.marker = new google.maps.Marker({position: this.state, map: this.state.map});

                var start = new google.maps.LatLng(this.state.lat, this.state.lng);
                var end = new google.maps.LatLng(lat, lng);
                //console.log(this.props.lat, this.props.lon);

                //var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
                var tempDirectionsDisplay = this.state.directionsDisplay;
                tempDirectionsDisplay.setMap(null);
                tempDirectionsDisplay.setMap(this.state.map); // map should be already initialized.

                var request = {
                    origin : start,
                    destination : end,
                    travelMode : google.maps.TravelMode.DRIVING
                };

                var directionsService = new google.maps.DirectionsService();
                directionsService.route(request, function(response, status){
                	if (status == google.maps.DirectionsStatus.OK) {
                        tempDirectionsDisplay.setDirections(response);

                        console.log(response.routes[0].legs[0].distance.text);
                        console.log(response.routes[0].legs[0].duration.text);
                        //this.state.arr = [response.routes[0].legs[0].distance.text,response.routes[0].legs[0].duration.text];

                    }
                });
                //
	}

	componentDidMount() {

		if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

            		this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                this.setState({lat: this.pos.lat, lng:this.pos.lng})

								this.map = new google.maps.Map(this.refs.map, {
                    center: {lat: this.state.lat, lng: this.state.lng},
                    zoom:15
                });

                var directionsDisplay = new google.maps.DirectionsRenderer();

                this.setState({map: this.map});
                this.setState({directionsDisplay: directionsDisplay});

                //this.draw(this.pos.lat, this.pos.lng);

            }, () => {
                console.log('navigator disabled');
            });

		}
	}

	render() {
		// this.refs.map

		return (
			<div className='mainb'>
                <div ref="map" className="map">
                </div>
                <MainButton drawb = {this.draw} getFirstEvent = {this.getFirstEvent} />

			</div>
		)
	}
}

export default GoogleMap;
