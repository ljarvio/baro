function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'variable');
	data.addColumn('string', 'month');
	var years = ['gemiddelde 2006-2011', '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	var showLast = 2; //show last n years
	for (var i = 0; i < years.length; i++) { data.addColumn('number', years[i]); }
	data.addRows([
  ["saldo","jan",20.74,16.30,18.35,24.95,21.25,18.90,24.70,25.90],
  ["saldo","feb",20.92,16.35,18.75,25.30,20.90,18.95,25.25,26.10],
  ["saldo","mrt",21.19,16.50,19.15,25.80,20.75,18.95,26.00,26.50],
  ["saldo","apr",21.39,16.55,19.50,26.20,20.55,18.85,26.70,27.05],
  ["saldo","mei",21.46,16.55,19.65,26.30,20.40,18.90,26.95,27.85],
  ["saldo","jun",21.58,16.60,19.95,26.30,20.35,19.20,27.10,28.30],
  ["saldo","jul",21.68,16.60,20.15,26.30,20.35,19.55,27.10,28.85],
  ["saldo","aug",21.84,16.70,20.85,26.05,20.00,20.40,27.05,29.70],
  ["saldo","sep",22.06,16.95,22.05,25.30,19.50,21.70,26.85,30.50],
  ["saldo","okt",22.22,17.20,23.50,24.30,19.05,22.65,26.60,31.15],
  ["saldo","nov",22.28,17.65,24.35,23.00,19.00,23.40,26.30,31.65],
  ["saldo","dec",22.32,18.00,24.70,22.15,18.95,24.05,26.05,null]
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