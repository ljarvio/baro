function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'variable');
	data.addColumn('string', 'month');
	var years = ['gemiddelde 2007-2011', '2007', '2008', '2009', '2010', '2011', '2012'];
	var showLast = 2; //show last n years
	for (var i = 0; i < years.length; i++) { data.addColumn('number', years[i]); }
	data.addRows([
  ["omzet","jan",3250.0456,3384,3808,3024,2393.368,3640.86,4069.349],
  ["omzet","feb",8432.7184,7201,11157,8106,6448.699,9250.893,8136.238],
  ["omzet","mrt",35175.4706,35011,25157,35925,41856.022,37928.331,50179.5],
  ["omzet","apr",79940.1258,77071,63450,90834,87631.872,80713.757,59863.592],
  ["omzet","mei",69742.4444,68127,79597,68138,67061.839,65788.383,85304.409],
  ["omzet","jun",27492.1056,23441,25109,28966,33869.504,26075.024,32219.951],
  ["omzet","jul",15100.7452,12296,14298,16034,16481.737,16393.989,19960.404],
  ["omzet","aug",14748.1874,13612,12381,14238,17143.968,16365.969,17606.539],
  ["omzet","sep",14964.6394,12156,14453,17543,16172.324,14498.873,16292.145],
  ["omzet","okt",12975.0724,13636,13418,13318,12376.546,12126.816,13913],
  ["omzet","nov",12164.1242,11721,9673,11016,13242.485,15168.136,15520],
  ["omzet","dec",6867.0014,5168,6141,6808,7176.661,9041.346,null],
  ["aantal","jan",3521.2856,3347,4253,4003,2405.632,3597.796,4062.659],
  ["aantal","feb",9823.6058,9244,15281,9663,5965.488,8964.541,9583.456],
  ["aantal","mrt",52318.9922,57713,43061,54236,55005.766,51579.195,69208.151],
  ["aantal","apr",91069.8862,95649,82821,100704,90072.872,86102.559,60581.777],
  ["aantal","mei",82801.463,90143,101620,76294,72699.441,73250.874,85419.12],
  ["aantal","jun",29292.7784,29182,26111,28788,36374.424,26008.468,27057.939],
  ["aantal","jul",13866.458,11932,12888,14838,16132.155,13542.135,15157.71],
  ["aantal","aug",14775.3586,13838,13148,14708,16512.613,15670.18,15825.959],
  ["aantal","sep",19675.9482,16676,19739,23171,19622.72,19171.021,18736.076],
  ["aantal","okt",20228.5696,20191,21362,22701,18686.051,18202.797,18827],
  ["aantal","nov",13574.01,13435,12145,12861,14287.667,15141.383,14385],
  ["aantal","dec",6853.504,6138,7344,6545,6587.577,7652.943,null],
  ["prijs","jan",0.9332,1.011,0.895,0.755,0.994,1.011,1.001],
  ["prijs","feb",0.8916,0.778,0.73,0.838,1.081,1.031,0.848],
  ["prijs","mrt",0.6694,0.606,0.584,0.662,0.76,0.735,0.725],
  ["prijs","apr",0.8762,0.805,0.766,0.901,0.972,0.937,0.988],
  ["prijs","mei",0.8502,0.755,0.783,0.893,0.922,0.898,0.998],
  ["prijs","jun",0.9406,0.803,0.961,1.006,0.931,1.002,1.19],
  ["prijs","jul",1.09,1.03,1.109,1.08,1.021,1.21,1.316],
  ["prijs","aug",0.9948,0.983,0.941,0.968,1.038,1.044,1.112],
  ["prijs","sep",0.7594,0.728,0.732,0.757,0.824,0.756,0.869],
  ["prijs","okt",0.6434,0.675,0.628,0.586,0.662,0.666,0.738],
  ["prijs","nov",0.8902,0.872,0.796,0.856,0.926,1.001,1.078],
  ["prijs","dec",0.9974,0.841,0.836,1.04,1.089,1.181,null]
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
	var indicators = ["omzet", "aantal", "prijs"];
	var titles = ['x 1.000 euro', 'x 1.000 stuks', 'euro / stuk'];
	
	function init() {
		createRadioButtons();
		createCheckBoxes();
		// an ugly hack to get the units right: turnover values are so large they don't fit 
		// if reported in euros. Of course one could change vAxis: {format: 'pattern'}
		//options.title = (view.getDistinctValues(0) == 'omzet') ? 'x 1.000 euro' : 'euro';
		options.title = titles[0];
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
		options.title = titles[indicators.indexOf(rb.value)];
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