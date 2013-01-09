function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'variable');
	data.addColumn('string', 'month');
	var years = ['gemiddelde 2006-2011', '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	var showLast = 2; //show last n years
	for (var i = 0; i < years.length; i++) { data.addColumn('number', years[i]); }
	data.addRows([
  ["saldo","jan",29.20,24.05,26.00,33.35,29.85,27.75,34.20,35.45],
  ["saldo","feb",29.41,24.20,26.35,33.75,29.55,27.90,34.70,35.65],
  ["saldo","mrt",29.63,24.25,26.75,34.20,29.20,27.90,35.50,36.05],
  ["saldo","apr",29.85,24.25,27.10,34.60,29.00,27.90,36.25,36.65],
  ["saldo","mei",29.93,24.20,27.40,34.75,28.75,27.90,36.55,37.55],
  ["saldo","jun",30.06,24.25,27.60,34.80,28.75,28.25,36.70,38.15],
  ["saldo","jul",30.20,24.25,27.90,34.80,28.85,28.65,36.75,38.65],
  ["saldo","aug",30.38,24.30,28.60,34.50,28.65,29.50,36.75,39.65],
  ["saldo","sep",30.63,24.60,29.80,33.70,28.25,30.85,36.55,40.50],
  ["saldo","okt",30.83,24.80,31.40,32.75,27.90,31.90,36.25,41.25],
  ["saldo","nov",30.97,25.25,32.60,31.55,27.80,32.65,35.95,41.85],
  ["saldo","dec",31.03,25.65,33.10,30.70,27.70,33.40,35.65,null]
	]);
	
	var moneyPattern = '0.00' ;
	var numberformatter = new google.visualization.NumberFormat({pattern: moneyPattern});
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
        vAxis: {minValue: 0, gridlines: {count: 8}},
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