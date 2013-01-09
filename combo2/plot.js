function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'variable');
	data.addColumn('string', 'month');
	var years = ['gemiddelde 2006-2011', '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	var showLast = 2; // initially, show last n years 
	for (var i = 0; i < years.length; i++) { data.addColumn('number', years[i]); }
	data.addRows([
	/* cumulative euros
		["saldo","jan",13628,13306,12457,17204,11215,12752,14833,15900],
		["saldo","feb",25026,24864,23013,32434,19812,22931,27101,29094],
		["saldo","mrt",35443,36178,33256,46018,25641,32486,39081,40964],
		["saldo","apr",45540,46794,43247,58176,31648,42435,50938,51760],
		["saldo","mei",56887,58540,53823,70980,38461,54504,65014,62795],
		["saldo","jun",68063,69797,64453,82639,44746,67900,78844,73403],
		["saldo","jul",80150,80929,76499,94479,52119,82458,94414,85317],
		["saldo","aug",94537,94707,92799,108977,61549,98793,110394,97918],
		["saldo","sep",108531,107806,110417,123189,71169,113782,124824,109695],
		["saldo","okt",123934,121656,130756,138146,82746,129683,140617,null],
		["saldo","nov",139182,134843,150974,152187,95562,145465,156063,null],
		["saldo","dec",154069,147416,170584,165469,109331,160219,171397,null]
	]);
	var numberformatter = new google.visualization.NumberFormat({pattern:'#,###'});
	for (var i = 1; i < data.getNumberOfColumns(); i++) {numberformatter.format(data, i);} // format for numbers
	*/ 
		["saldo","jan",100,97.6,91.4,126.2,82.3,93.6,108.8,116.7],
		["saldo","feb",100,99.4,92.0,129.6,79.2,91.6,108.3,116.3],
		["saldo","mrt",100,102.1,93.8,129.8,72.3,91.7,110.3,115.6],
		["saldo","apr",100,102.8,95.0,127.7,69.5,93.2,111.9,113.7],
		["saldo","mei",100,102.9,94.6,124.8,67.6,95.8,114.3,110.4],
		["saldo","jun",100,102.5,94.7,121.4,65.7,99.8,115.8,107.8],
		["saldo","jul",100,101.0,95.4,117.9,65.0,102.9,117.8,106.4],
		["saldo","aug",100,100.2,98.2,115.3,65.1,104.5,116.8,103.6],
		["saldo","sep",100,99.3,101.7,113.5,65.6,104.8,115.0,101.1],
		["saldo","okt",100,98.2,105.5,111.5,66.8,104.6,113.5,null],
		["saldo","nov",100,96.9,108.5,109.3,68.7,104.5,112.1,null],
		["saldo","dec",100,95.7,110.7,107.4,71.0,104.0,111.2,null]
	]);
	
	var variable = data.getValue(0,0); // 'saldo'
	var LEIcolors = ["#DD4477", "#990099", "#ED7301", "#DC3912", "#C2BBB1", "#69B0E1", "#35992A"];
	var t1 = document.getElementById('t1') // html table where viz sits in
	var chart = new google.visualization.ChartWrapper({
		chartType: 'LineChart',
		containerId: 'chart_container'
	});
	
	var min_values = []; // get minimum value in DataTable to set y-axis limits below
	for (var i = 4; i < data.getNumberOfColumns(); i++) {min_values.push(data.getColumnRange(i).min);}
	var min_value = Math.min.apply(Math, min_values);
	
	var options = {
		chartArea: {left:'13%', top:'40', height:"75%", width: "90%"},
		fontName: getStyle(t1, "fontFamily", "font-family"),
		title: 'cumulatief saldo: (index: gem. 2006-2011 = 100)',
		titleTextStyle: { bold: false, italic: true},
		legend: {position: 'bottom'},
		//backgroundColor: colorToHex(getStyle(t1, "backgroundColor", "background-color")), // needed if table background is not transparent
		colors: LEIcolors, //huisstijl
        vAxis: {viewWindow: {min: min_value}, gridlines: {count: 8}},
		series: {0: {lineWidth: 2.75 , color: '#333'}}
	}  
   
	var view = new google.visualization.DataView(data);
	view.hideColumns([0]); // 'variable' -column not relevant
	var currCols = [1,2];
	
	function init() {
		var cbForm = document.getElementById('checkboxForm');
		cbForm.setAttribute('align', 'right');
		var cbLabel = document.getElementById('checkboxLabel');
		cbLabel.setAttribute('align', 'left');
		cbLabel.setAttribute('style', 'display:inline-block; vertical-align: middle;');
		cbLabel.appendChild(document.createTextNode('Selecteer:'))
		
		for (var i = 1; i < years.length; i++) {
			// create checkboxes with some of them checked
			var checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			checkbox.name = "yearselector";
			checkbox.value = years[i];
			checkbox.id = "b"+i;
			checkbox.setAttribute('style', 'display:inline-block; vertical-align: middle;');
			checkbox.checked = (i >= years.length - showLast) ? true : false
			checkbox.onclick = function() {update(this)}
			
			// year labels for each box
			var label = document.createElement('label')
			label.htmlFor = "b"+i;
			label.setAttribute('style', 'display:inline-block; vertical-align: middle;');
			label.appendChild(document.createTextNode(years[i]));
			cbForm.appendChild(checkbox);
			cbForm.appendChild(label);
		}
		
		var bxs = document.getElementsByName('yearselector')
		var ind = []; 
		for (var i = 0; i < bxs.length; i++) {
			if (bxs[i].checked) {
				// add column # based on checkbox value
				ind.push(years.indexOf(bxs[i].value) + 2); 
			}
		}
		// e.g. [8,9] <--> [2011, 2012]
		var newColumns = currCols.concat(ind);
		currCols = newColumns;
		
		// this color will be skipped most of the time since it is overridden by #333-colored avg-line
		var newColors = ["#DD4477"];
		// update colors according to changed years
		for (var i = 2; i < newColumns.length; i++) {
			var col = newColumns[i]; // e.g. column 3 matches color LEIcolors[0]
			newColors.push(LEIcolors[col-3]);
		}
		options.colors = newColors;
		view.setColumns(newColumns);
		//console.log('initial columns: ' + newColumns);
		//console.log('initial colors: ' + newColors.slice(1))
		drawChart(view, options);	
	}
	
	init(); // build html
		
	function update(cb) { // returns column indices to be shown based on checkboxes
		var year = cb.value;
		var col = years.indexOf(year) + 2;
		if (cb.checked) {currCols.push(col)}
		else {currCols.splice(currCols.indexOf(col),1)}
		// now currCols are up-to-date: call it something more descriptive
		var newColumns = currCols.sort();
		
		var newColors = ["#DD4477"];
		// update colors according to changed years
		for (var i = 2; i < newColumns.length; i++) {
			var col = newColumns[i]; // e.g. column 3 matches color LEIcolors[0]
			newColors.push(LEIcolors[col-3]);
		}
		
		options.colors = newColors;
		view.setColumns(newColumns);
		//console.log(year); console.log(col) ; console.log(newColumns) ; 
		drawChart(view, options);	
	}
	
	function drawChart(view, options) {
	  chart.setDataTable(view);
	  chart.setOptions(options);
      chart.draw(view);
    }
	
	// helper function: access attrs defined in CSS
	function getStyle(elem, cssprop, cssprop2){
		 // IE
		 if (elem.currentStyle) {
		   return elem.currentStyle[cssprop];
		 // other browsers
		 } else if (document.defaultView &&
						   document.defaultView.getComputedStyle) {
		   return document.defaultView.getComputedStyle(elem,
		null).getPropertyValue(cssprop2);
		 // fallback
		 } else {
		   return null;
		 }
	}
	// helper function: rgb(1,0,0) --> '#FF0000'
	function colorToHex(color) {
		if (color.substr(0, 1) === '#') {return color;} // already hex

		var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
		
		var red = parseInt(digits[2]);
		var green = parseInt(digits[3]);
		var blue = parseInt(digits[4]);
		
		var rgb = blue | (green << 8) | (red << 16);
		return digits[1] + '#' + rgb.toString(16);
	}

}