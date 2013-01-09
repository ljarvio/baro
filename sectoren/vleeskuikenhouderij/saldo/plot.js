function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'variable');
	data.addColumn('string', 'month');
	var years = ['gemiddelde 2006-2011', '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	var showLast = 2; //show last n years
	for (var i = 0; i < years.length; i++) { data.addColumn('number', years[i]); }
	data.addRows([
  ["saldo","jan",14327.66,11834.46,16285.85,16752.54,17845.73,12717.77,10529.60,15496.29],
  ["saldo","feb",14304.00,10261.18,18596.35,15787.09,18381.43,12633.52,10164.45,13950.51],
  ["saldo","mrt",14894.44,7971.78,20850.47,15460.35,20187.33,13417.34,11479.35,13513.72],
  ["saldo","apr",15549.31,6161.10,22980.41,15729.64,20979.66,14534.39,12910.64,15511.23],
  ["saldo","mei",16725.82,8077.07,25966.44,15310.66,20467.65,16161.56,14371.50,14552.24],
  ["saldo","jun",18323.39,13263.30,28046.98,17063.96,20210.12,17488.10,13867.88,15430.05],
  ["saldo","jul",19233.68,15556.04,26983.57,17419.26,22365.70,18870.52,14206.98,14088.17],
  ["saldo","aug",18378.94,15750.43,23942.88,14951.76,23386.32,16935.17,15307.06,10197.76],
  ["saldo","sep",18045.27,15707.56,20607.51,16874.23,23258.19,14828.04,16996.08,10903.89],
  ["saldo","okt",17876.13,15856.51,21026.55,19312.35,19848.42,13196.49,18016.47,9956.36],
  ["saldo","nov",15915.90,15975.99,20124.54,17330.02,12254.77,11644.43,18165.68,7969.39],
  ["saldo","dec",14903.71,15360.45,18270.77,16204.76,10721.57,10329.26,18535.46,null]
	]);
	var numberformatter = new google.visualization.NumberFormat({pattern:'#,###'});
	for (var i = 1; i < data.getNumberOfColumns(); i++) {numberformatter.format(data, i);} // format for numbers
	
	var variable = data.getValue(0,0); // 'saldo'
	var LEIcolors = ["#DD4477", "#990099", "#ED7301", "#DC3912", "#C2BBB1", "#69B0E1", "#35992A"];
	var t1 = document.getElementById('t1') // html table where viz sits in
	var chart = new google.visualization.ChartWrapper({
		chartType: 'ColumnChart',
		containerId: 'chart_container'
	});
	var options = {
		chartArea: {left:'13%', top:'40', height:"75%", width: "90%"},
		fontName: getStyle(t1, "fontFamily", "font-family"),
		title: 'euro',
		titleTextStyle: { bold: false, italic: true},
        seriesType: "bars",
		bar: {groupWidth: '75%'},
		legend: {position: 'bottom'},
		//backgroundColor: colorToHex(getStyle(t1, "backgroundColor", "background-color")), // needed if table background is not transparent
		colors: LEIcolors, //huisstijl
        vAxis: {viewWindow: {min: 0}, gridlines: {count: 8}},
		animation:{
			duration: 50,
			easing: 'linear'
		},
		series: {0: {type: "line", linewidth: 2.5, color: '#333'}}
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