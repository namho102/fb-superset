var mymap = L.map('mapid').setView([51.505, -0.09], 11);

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
		name: "Liverpool",
		x: 53.431379,
		y: -2.960701,
		color: "#D30000",
	},
	// {
	// 	name: "",
	// 	x: ,
	// 	y: ,
	// 	color: 
	// },
	// {
	// 	name: "",
	// 	x: ,
	// 	y: ,
	// 	color: 
	// },
	// {
	// 	name: "",
	// 	x: ,
	// 	y: ,
	// 	color: 
	// },
	// {
	// 	name: "",
	// 	x: ,
	// 	y: ,
	// 	color: 
	// },
	// {
	// 	name: "",
	// 	x: ,
	// 	y: ,
	// 	color: 
	// }

]


for (var i = 0; i < stadiums.length; i++) {
	var circle = L.circle([stadiums[i].x, stadiums[i].y], {
	color: stadiums[i].color,
	fillColor: stadiums[i].color,
	fillOpacity: 0.5,
	radius: 1500
}).addTo(mymap);
}


