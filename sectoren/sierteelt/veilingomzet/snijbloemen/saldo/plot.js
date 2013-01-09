function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('string', 'variable');
	data.addColumn('string', 'month');
	var years = ['gemiddelde 2007-2011', '2007', '2008', '2009', '2010', '2011', '2012'];
	var showLast = 2; //show last n years
	for (var i = 0; i < years.length; i++) { data.addColumn('number', years[i]); }
	data.addRows([
  ["omzet","jan",145253.669,174585,164184,133195,111354.549,142949.796,150709.773],
  ["omzet","feb",213130.1064,225493,264832,183507,184045.46,207773.072,201569.654],
  ["omzet","mrt",185113.8188,202200,177702,165076,213220.766,167370.328,194014.663],
  ["omzet","apr",144186.6846,145898,142699,136237,153124.404,142975.019,147224.987],
  ["omzet","mei",174179.6154,195325,179161,147075,183660.633,165676.444,190648.365],
  ["omzet","jun",134061.6714,146729,134914,129470,130113.999,129081.358,139790.24],
  ["omzet","jul",105863.2182,135072,101779,93708,91250.445,107506.646,98502.836],
  ["omzet","aug",125393.724,143884,122686,101724,134777.103,123897.517,118343.563],
  ["omzet","sep",145085.7424,150510,151720,133956,152473.883,136768.829,124461.887],
  ["omzet","okt",151916.2938,174986,161361,142469,147155.204,133610.265,143852],
  ["omzet","nov",126806.7728,135763,120994,123216,126095.194,127965.67,124162],
  ["omzet","dec",145013.941,153639,156501,142302,121485.214,151142.491,null],
  ["aantal","jan",634923.076,657525,714616,606721,575439.379,620314.001,663945.954],
  ["aantal","feb",767798.7354,738704,858113,731141,735628.868,775406.809,775997.437],
  ["aantal","mrt",886600.3124,861618,796625,874053,985284.978,915420.584,881482.097],
  ["aantal","apr",763528.3292,738693,725288,765594,783895.495,804171.151,697562.02],
  ["aantal","mei",671114.9216,755036,693445,646116,603665.539,657312.069,667728.274],
  ["aantal","jun",609030.5382,628823,616409,635157,611688.501,553075.19,537220.797],
  ["aantal","jul",578339.3236,618699,624800,599540,553587.275,495070.343,536614.796],
  ["aantal","aug",606526.1446,653921,602969,590151,600746.016,584843.707,579502.013],
  ["aantal","sep",586223.046,571537,630179,610932,560771.662,557695.568,501769.801],
  ["aantal","okt",543785.4552,614729,562190,527217,514375.545,500415.731,522702],
  ["aantal","nov",438052.2878,479757,407443,437024,442420.006,423617.433,392937],
  ["aantal","dec",456341.1432,469740,471768,472060,411671.451,456466.265,null],
  ["prijs","jan",0.2272,0.265,0.229,0.219,0.193,0.23,0.226],
  ["prijs","feb",0.276,0.305,0.308,0.25,0.25,0.267,0.259],
  ["prijs","mrt",0.2086,0.234,0.223,0.188,0.216,0.182,0.22],
  ["prijs","apr",0.1884,0.197,0.196,0.177,0.195,0.177,0.211],
  ["prijs","mei",0.2598,0.258,0.258,0.227,0.304,0.252,0.285],
  ["prijs","jun",0.2198,0.233,0.218,0.203,0.212,0.233,0.26],
  ["prijs","jul",0.1834,0.218,0.162,0.156,0.164,0.217,0.183],
  ["prijs","aug",0.206,0.22,0.203,0.172,0.224,0.211,0.204],
  ["prijs","sep",0.2476,0.263,0.24,0.219,0.271,0.245,0.248],
  ["prijs","okt",0.2786,0.284,0.287,0.27,0.286,0.266,0.28],
  ["prijs","nov",0.2892,0.282,0.296,0.281,0.285,0.302,0.315],
  ["prijs","dec",0.317,0.327,0.331,0.301,0.295,0.331,null]
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