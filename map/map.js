// var mymap = L.map('mapid').setView([51.505, -0.09], 11);
var mymap = L.map('mapid').setView([53.1916665, -4.79583325], 6);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

var stadiums = [
	{
		name: "Wembley",
		x: 51.556648, 
		y: -0.279208,
		color: "#06195d"
	},
	{
		name: "Stamford Bridge",
		x: 51.481830,
		y: -0.190924,
		color: "#034694"
	},
	{
		name: "Emirates",
		x: 51.555513, 
		y: -0.108214,
		color: "#cd1440"
	}, 
	
	{
		name: "Anfield",
		x: 53.431379,
		y: -2.960701,
		color: "#D30000",
	},
	{
		name: "Etihad Stadium",
		x: 53.483764,
		y: -2.200352,
		color: "#6BACDE" 
	},
	{
		name: "Old Trafford",
		x: 53.463112,
		y: -2.291308,
		color: "#E21B22"
	},
	{
		name: "Goodison Park",
		x: 53.439407,
		y: -2.966073,
		color: "#143A69"
	},
	{
		name: "The Hawthorns",
		x: 52.509704, 
		y: -1.963895,
		color: "#052B6A"
	},
	{
		name: "bet365 Stadium",
		x: 52.988733, 
		y: -2.176591,
		color: "#CA0C25"
	},
		{
		name: "London Stadium",
		x: 51.538767, 
		y: -0.015538,
		color: "#7D2C3B"
	},
		{
		name: "St Mary's Stadium",
		x: 50.905930, 
		y: -1.390997,
		color: "#ED1A3B"
	},
		{
		name: "Turf Moor",
		x: 53.789772, 
		y: -2.230174,
		color: "#8DD2F3"
	},
		{
		name: "Vicarage Road",
		x: 51.650342, 
		y: -0.400143,
		color: "#F8EF24"
	},
		{
		name: "Dean Court",
		x: 50.735299, 
		y: -1.836133,
		color: "#CE1417"
	},
		{
		name: "Liberty Stadium",
		x: 51.643330, 
		y: -3.934578,
		color: "#060102"
	},
		{
		name: "Riverside Stadium",
		x: 54.578528, 
		y: -1.218165,
		color: "#EA292E"
	},
		{
		name: "King Power Stadium",
		x: 52.620995, 
		y: -1.142181,
		color: "#0053A0"
	},
		{
		name: "KC Stadium",
		x: 53.745653, 
		y: -0.368160,
		color: "#F5A12D"
	},
		{
		name: "Selhurst Park",
		x: 51.398815, 
		y: -0.086399,
		color: "#1749A2"
	},
		{
		name: "Stadium of Light",
		x: 54.914956, 
		y: -1.388371,
		color: "#D41324"
	}

]


for (var i = 0; i < stadiums.length; i++) {
	var circle = L.circle([stadiums[i].x, stadiums[i].y], {
	color: stadiums[i].color,
	fillColor: stadiums[i].color,
	fillOpacity: 0.8,
	radius: 10000
}).addTo(mymap);
}


// Center: 60.85 + 49.85 + 52.483333 + 57.583333,-0.866667-6.4+1.766667-13.683333

