google.load('visualization', '1', {packages: ['controls', 'corechart'], 'language': 'nl'});
google.setOnLoadCallback(drawVisualization); 

function drawVisualization() {
	var data = google.visualization.arrayToDataTable([
		['month','avg','2011','2012'],
		['jan',3,1,5],
		['feb',4,5,3]
		]);
		
	var chart = new google.visualization.ChartWrapper({
		chartType: 'ColumnChart',
		containerId: 'chart_container'
		});
		
	var view = new google.visualization.DataView(data);
	var myColors = ['grey', 'blue', 'red'];
	var options = {animation: {duration: 100},
				   series: {0: {type: 'line', color: myColors[0]}}};
	var options2 = {animation: {duration: 1000},
				   series: {0: {type: 'line', color: myColors[0]}}};
	
	var currCols = []; // data columns viewed
	
	function init() {
		// make checkboxes functional and check '2011' by default
		var checkboxes = document.getElementsByName('year');
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].onclick = function() {update(this)}
			checkboxes[i].checked = (checkboxes[i].value === '2011') ? true : false
		}
		// first, let's use these data columns to build the plot
        currCols = [0,1,2]; 
		options.colors = getColors(currCols);
		printdebug()
		view.setColumns(currCols);
		drawChart(view, options); 
	}
	init();

	function rearrange() {
		currCols.sort();
		// set colors to correspond chosen columns
		options2.colors = getColors(currCols);
		view.setColumns(currCols);
		drawChart(view, options2);    
	}
	
	function update(checkbox) { 
	// returns column indices to be shown based on checkboxes
		var year = checkbox.value;
		var col = (year === '2012') ? 3 : 2
		
		// add/remove column based on checkboxes' status
		if (checkbox.checked) {currCols.push(col)}
		else {currCols.splice(currCols.indexOf(col),1)}
		//currCols.sort();
		options.colors = getColors(currCols);
		printdebug()
				
		view.setColumns(currCols);
		drawChart(view, options);	
	}
	
	function drawChart(view, options) {
	  chart.setDataTable(view);
	  chart.setOptions(options);
      chart.draw(view);
    }
		
	function printdebug() {
		console.log(currCols);
		console.log(options.colors);
	}
	
	function getColors(currCols) {
		// returns colors based on viewed columns
		var retColors = [myColors[0]]; 
		for (var i = 2; i < currCols.length; i++) {
			var col = currCols[i];
			retColors.push(myColors[col-1]);
		}
		return retColors;
		// -   :		['grey']
		// 2011: 		['grey', 'blue'] 
		// 2012: 		['grey', 'red'] 
		// 2011 & 2012: ['grey', 'blue', 'red'] 
	}
	
	google.visualization.events.addListener(
		chart.getChart(), 'animationfinish', function() {rearrange();})
	
}