/*
* @Author: guangled
* @Date:   2017-03-25 13:43:16
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-26 00:27:25
*/

import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.map = new google.maps.Map(this.refs.map, {
                    center: {lat: this.pos.lat, lng: this.pos.lng},
                    zoom:15
                });
                this.marker = new google.maps.Marker({position: this.pos, map: this.map});

                var start = new google.maps.LatLng(this.pos.lat, this.pos.lng);
                var end = new google.maps.LatLng(this.pos.lat + 1, this.pos.lng + 1);

                var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
                directionsDisplay.setMap(this.map); // map should be already initialized.

                var request = {
                    origin : start,
                    destination : end,
                    travelMode : google.maps.TravelMode.DRIVING
                };
                var directionsService = new google.maps.DirectionsService();
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });

            }, () => {
                console.log('navigator disabled');
            });
		}
	}

	render() {
		// this.refs.map
		return <div ref="map" className="map" />;
	}
}

export default GoogleMap;