function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'variable');
	data.addColumn('string', 'month');
	var years = ['gemiddelde 2007-2011', '2007', '2008', '2009', '2010', '2011', '2012'];
	var showLast = 2; //show last n years
	for (var i = 0; i < years.length; i++) { data.addColumn('number', years[i]); }
	data.addRows([
  ["omzet","jan",111769.7348,107791,122439,114445,99206.965,114966.709,121392.193],
  ["omzet","feb",123967.727,108632,135133,121606,120643.314,133824.321,127703.815],
  ["omzet","mrt",144474.4924,137805,124211,145824,168087.79,146444.672,161607.626],
  ["omzet","apr",131804.0862,111320,125427,131958,145625.805,144689.626,120910.507],
  ["omzet","mei",133245.1212,132904,131542,130263,134740.693,136775.913,163354.389],
  ["omzet","jun",93912.929,82441,90889,99067,100401.926,96765.719,101673.172],
  ["omzet","jul",81978.6214,80981,84710,81887,76380.265,85934.842,92025.357],
  ["omzet","aug",108049.1002,106188,99056,100950,118416.253,115635.248,112097.349],
  ["omzet","sep",104574.115,89739,107016,109032,109549.741,107533.834,102230.966],
  ["omzet","okt",96088.5174,95679,98512,95719,94885.959,95646.628,110279],
  ["omzet","nov",103637.0336,98453,94796,102001,111553.095,111382.073,112574],
  ["omzet","dec",105297.1638,94032,109837,110854,97810.138,113952.681,null],
  ["aantal","jan",74850.2394,73636,82031,76067,67232.222,75284.975,76103.313],
  ["aantal","feb",80420.0404,73154,89873,78650,78403.546,82019.656,78500.562],
  ["aantal","mrt",98226.8288,94154,82261,98565,120514.432,95639.712,108696.516],
  ["aantal","apr",79107.3432,68285,73312,81217,82161.689,90561.027,66241.369],
  ["aantal","mei",75750.4786,75476,75483,76370,73153.192,78270.201,84595.202],
  ["aantal","jun",62535.0476,55671,60113,67107,67071.451,62712.787,62865.072],
  ["aantal","jul",58390.7698,54465,60183,62909,58841.745,55555.104,60688.376],
  ["aantal","aug",68579.1662,66754,63925,67761,73315.519,71140.312,71509.57],
  ["aantal","sep",65010.5932,55668,67110,68171,67908.773,66195.193,61712.355],
  ["aantal","okt",62002.5512,61887,63091,63486,61875.587,59673.169,66191],
  ["aantal","nov",68225.8372,64589,62640,71916,72273.78,69710.406,70002],
  ["aantal","dec",68950.6198,62639,71840,76818,64434.693,69021.406,null],
  ["prijs","jan",1.4922,1.463,1.492,1.504,1.475,1.527,1.595],
  ["prijs","feb",1.5404,1.484,1.503,1.546,1.538,1.631,1.626],
  ["prijs","mrt",1.4752,1.463,1.509,1.479,1.394,1.531,1.486],
  ["prijs","apr",1.6666,1.63,1.71,1.624,1.772,1.597,1.825],
  ["prijs","mei",1.759,1.76,1.742,1.705,1.841,1.747,1.931],
  ["prijs","jun",1.501,1.48,1.511,1.476,1.496,1.542,1.617],
  ["prijs","jul",1.4076,1.486,1.407,1.301,1.298,1.546,1.516],
  ["prijs","aug",1.5736,1.59,1.549,1.489,1.615,1.625,1.567],
  ["prijs","sep",1.6084,1.612,1.594,1.599,1.613,1.624,1.656],
  ["prijs","okt",1.5498,1.546,1.561,1.507,1.533,1.602,1.666],
  ["prijs","nov",1.519,1.524,1.513,1.418,1.543,1.597,1.608],
  ["prijs","dec",1.5278,1.501,1.528,1.443,1.517,1.65,null]
	]);
	var numberformatter = new google.visualization.NumberFormat({pattern:'#,###'});
	//for (var i = 1; i < data.getNumberOfColumns(); i++) {numberformatter.format(data, i);} // format for numbers
	
	var variable = data.getValue(0,0); 
	var LEIcolors = ["#DD4477", "#ED7301", "#DC3912", "#C2BBB1", "#69B0E1", "#35992A"];
	var t1 = document.getElementById('t1') // html table where viz sits in
	var chart = new google.visualization.ChartWrapper({
		chartType: 'ColumnChart',
		containerId: 'chart_container'
	});
	var options = {
		chartArea: {left:'13%', top:'40', height:"75%", width: "90%"},
		fontName: getStyle(t1, "fontFamily", "font-family"),
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
		//series: {0: {type: "line", linewidth: 2.5, color: '#333'}}
	}  
    
	var showAvgLine = false;
	var view = new google.visualization.DataView(data);
	view.hideColumns([0]);
	var currCols = [1,2];
	var titles = {}; var indicators = [];
	titles = {omzet: "x 1.000 euro", aantal: "x 1.000 stuks", prijs: "euro / stuk"};
	for (key in titles) {indicators.push(key)}
	
	function init() {
		createRadioButtons();
		createCheckBoxes();
		
		options.title = titles['omzet'];
		drawChart(view, options);
	}
	init(); // build html
	
	function createRadioButtons() {
		var rbForm = document.getElementById('radiobuttonForm');
		rbForm.setAttribute('align', 'left');
		var rbLabel = document.getElementById('radiobuttonLabel');
		rbLabel.setAttribute('align', 'left');
		rbLabel.setAttribute('style', 'display:inline-block; vertical-align: middle;');
		rbLabel.appendChild(document.createTextNode('Kengetal:'))

		for (var i = 0; i < indicators.length; i++) {
			// create radiobuttons with one of them checked
			var id = "r"+(i+1);
			var radiobutton = document.createElement('input');
			radiobutton.type = "radio";
			radiobutton.name = "indicatorselector";
			radiobutton.value = indicators[i];
			radiobutton.id = id;
			radiobutton.setAttribute('style', 'display:inline-block; vertical-align: middle;');
			radiobutton.checked = (i == 0) ? true : false
			radiobutton.onclick = function() {updateRows(this)}
			
			// indicator labels for each box
			var radioLabel = document.createElement('label')
			radioLabel.htmlFor = id;
			radioLabel.setAttribute('style', 'display:inline-block; vertical-align: middle;');
			radioLabel.appendChild(document.createTextNode(indicators[i]));
			rbForm.appendChild(radiobutton);
			rbForm.appendChild(radioLabel);
		}

		var newRows = data.getFilteredRows([{
            column: 0, value: indicators[0]
        }]);
		view.setRows(newRows);
	}
	
	function createCheckBoxes() {
		var cbForm = document.getElementById('checkboxForm');
		cbForm.setAttribute('align', 'left');
		var cbLabel = document.getElementById('checkboxLabel');
		cbLabel.setAttribute('align', 'left');
		cbLabel.setAttribute('style', 'display:inline-block; vertical-align: middle;');
		cbLabel.appendChild(document.createTextNode('Jaar:'))
		
		for (var i = 1; i < years.length; i++) {
			// create checkboxes with some of them checked
			var id = "b"+i;
			var checkbox = document.createElement('input');
			checkbox.type = "checkbox";
			checkbox.name = "yearselector";
			checkbox.value = years[i];
			checkbox.id = id;
			checkbox.setAttribute('style', 'display:inline-block; vertical-align: middle;');
			checkbox.checked = (i >= years.length - showLast) ? true : false
			checkbox.onclick = function() {updateColumns(this)}
			
			// year labels for each box
			var label = document.createElement('label')
			label.htmlFor = id;
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
		var newColors = (showAvgLine) ? ['#DD4477']: []
		// update colors according to changed years
		for (var i = 2; i < newColumns.length; i++) {
			var col = newColumns[i]; // e.g. column 3 matches color LEIcolors[0]
			newColors.push(LEIcolors[col-3]);
		}
		
		options.colors = newColors;
		view.setColumns(newColumns);
		//console.log('initial columns: ' + newColumns);
		//console.log('initial colors: ' + newColors.slice(1))
	}	
	
	
	function updateRows(rb) { 
		// re-draws chart based on selected radio button: effectively viewed rows are updated
		var newRows = data.getFilteredRows([{
            column: 0, value: rb.value
        }]);
		view.setRows(newRows);
		options.title = titles[rb.value];
		// console.log(newRows) 
		drawChart(view, options);	
	}	
	
	function updateColumns(cb) { 
		// re-draws chart based on selected check boxes: effectively viewed columns are updated
		var year = cb.value;
		var col = years.indexOf(year) + 2;
		if (cb.checked) {currCols.push(col)}
		else {currCols.splice(currCols.indexOf(col),1)}
		// now currCols are up-to-date: call it something more descriptive
		var newColumns = currCols.sort();
		
		var newColors = (showAvgLine) ? ['#DD4477']: []
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
	  if (!showAvgLine) { view.hideColumns([2]) }
	  
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