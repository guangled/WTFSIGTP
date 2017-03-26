/*
* @Author: guangled
* @Date:   2017-03-25 13:16:57
* @Last Modified by:   guangled
* @Last Modified time: 2017-03-26 00:43:13
*/

// import axios from 'axios';

// const API_KEY = 'VhnW57qbDxHMZ5js';
// const ROOT_URL=`http://api.eventful.com/json/events/search?within=25&app_key=${API_KEY}`;

// export const FETCH_EVENT='FETCH_EVENT';

// export function fetchEvent() {
// 	const url = `${ROOT_URL}&where=34,-118`;
// 	const request = axios.get(url);

// 	console.log('Request:', request);
// }

export const FETCH_EVENT = 'FETCH_EVENT';

export function fetchEvent() {

	var oArgs = {

            app_key:"VhnW57qbDxHMZ5js",
            location: "Los Angeles",
            within: 10,
            page_size: 50,
            page_number: 1,
            date: "Today"

  };

	EVDB.API.call("/events/search", oArgs, function(oData) {
		console.log('request:', oData.events);
		// Note: this relies on the custom toString() methods below
		const request = oData.events;
    });

	return {
		type: FETCH_EVENT,
		payload: request
	};

}

