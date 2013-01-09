function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'variable');
	data.addColumn('string', 'month');
	var years = ['gemiddelde 2006-2011', '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	var showLast = 2; //show last n years
	for (var i = 0; i < years.length; i++) { data.addColumn('number', years[i]); }
	data.addRows([
  ["saldo","jan",13627.70,13304.61,12456.71,17203.72,11214.45,12752.48,14834.22,15900.67],
  ["saldo","feb",11397.72,11557.29,10555.77,15229.02,8596.38,10179.07,12268.82,13194.73],
  ["saldo","mrt",10417.44,11313.66,10243.50,13583.62,5829.12,9554.73,11980.01,11870.99],
  ["saldo","apr",10096.13,10616.05,9990.84,12157.01,6006.89,9948.60,11857.36,10796.06],
  ["saldo","mei",11347.17,11746.30,10575.49,12803.69,6812.85,12068.54,14076.14,11034.77],
  ["saldo","jun",11176.10,11256.88,10630.13,11658.02,6285.16,13395.38,13831.06,10608.36],
  ["saldo","jul",12086.31,11131.12,12045.37,11840.25,7373.19,14557.31,15570.63,11913.39],
  ["saldo","aug",14386.62,13777.36,16299.83,14497.58,9430.44,16334.15,15980.33,12601.56],
  ["saldo","sep",13994.72,13098.80,17618.99,14211.15,9621.06,14987.79,14430.55,11733.32],
  ["saldo","okt",15402.91,13850.00,20338.77,14956.43,11576.97,15901.61,15793.72,12560.42],
  ["saldo","nov",15248.16,13186.07,20217.59,14040.18,12816.66,15782.03,15446.43,13099.58],
  ["saldo","dec",14887.08,12572.81,19610.38,13281.64,13768.82,14753.96,15334.86,13276.93]
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