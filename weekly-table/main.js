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




loadJSON(function(response) {
	// Parse JSON string into object

	data = JSON.parse(response);
	console.log(data);

	var labels = []

	for(var i = 0; i < data.length; ) {
		labels[i] = ++i;
	}


	var ctx = document.getElementById("myChart");
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [
			{
				label: '',
				data: [12, 19, 3, 5, 2, 3],
		
				
			}
			]
		},
		options: {
			
		}
	});


});