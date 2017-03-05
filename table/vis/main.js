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
new Vue({
	el: '#app',
	
	data: function() {

		return {
			tableData: []
		}

	},
	mounted: function() {

		var self = this;

		loadJSON(function(response) {
			// Parse JSON string into object

			data = JSON.parse(response);
			console.log(data);
			self.tableData = data

		});

	},

})