function loadJSON(callback) {

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'result.json', true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}

function getColor(colors, team) {
	return colors[team] != undefined ? colors[team] : ""
}

var arr = [];
var colors = {
	"Arsenal FC": "#a0854e",
	"Chelsea FC": "#034694",
	"Manchester City": "#6caedf",
	"Manchester United": "#e21b22",
	"Liverpool FC": "#00604f",
	"Tottenham Hotspur": "#0b0e15"
}


loadJSON(function(response) {
	// Parse JSON string into object

	data = JSON.parse(response);
	console.log(data);


	for (var i = 0; i < data.length; i++) {
		var obj = {}
		obj.round = i + 1;
		for (var j = 0; j < 20; j++) {
			obj[data[i][j].team] = j + 1
		}
		arr[arr.length] = obj

	}
	var teams = Object.keys(arr[0])
	teams.shift()
	// console.log(teams);

	// console.log(arr);

	var graphsOptions = []

	for (var j = 0; j < 20; j++) {
		graphsOptions[graphsOptions.length] = {
			"bullet": "",
			// "bulletSize": 4,
			"balloonText": teams[j],
			"title": teams[j],
			"valueField": teams[j],
			"fillAlphas": 0,
			"lineColor": getColor(colors, teams[j]),
			"lineThickness": 2,
		}
	}

	console.log(graphsOptions);


	var chart = AmCharts.makeChart("chartdiv", {
		"type": "serial",
		"theme": "dark",
		"legend": {
			"useGraphSettings": true
		},
		"dataProvider": arr,
		"valueAxes": [{
			"integersOnly": true,
			"maximum": 7,
			"minimum": 1,
			"reversed": true,
			"axisAlpha": 0,
			"dashLength": 5,
			"gridCount": 10,
			"position": "left",
			"title": ""
		}],
		"startDuration": 0.1,
		"graphs": graphsOptions,
		"chartCursor": {
			"cursorAlpha": 0,
			"zoomable": true,
			"graphBulletAlpha": 1
		},
		// "valueScrollbar": {
		// 	"oppositeAxis": false,
		// 	"offset": 50,
		// 	"scrollbarHeight": 10
		// },
		"categoryField": "round",
		"categoryAxis": {
			"title": "",
			"gridPosition": "start",
			"axisAlpha": 0,
			"fillAlpha": 0,
			"fillColor": "#000000",
			"gridAlpha": 0,
			"position": "bottom"
		},
		"export": {
			"enabled": true,
			"position": "bottom-right"
		}
	});



});