function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('date', 'jaar');
	data.addColumn('number', 'gemiddelde');
	data.addColumn({type:'string', role:'tooltip', p: {html:true}});  // tooltip for avg
	data.addColumn('number', '20%');
	data.addColumn({type:'string', role:'tooltip', p: {html:true}});  // tooltip for 20% series
	data.addColumn('number', '20%-80% groep');
	data.addColumn({type:'string', role:'tooltip', p: {html:true}});  // tooltip for 80% series
	data.addRows([

	]);
	
	var dateformatToolTip = 'yyyy';
	var dateformatter = new google.visualization.DateFormat({pattern: dateformatToolTip});
	dateformatter.format(data, 0); // format for dates
	
	var variable = 'inkomen'; 
	var t1 = document.getElementById('t1') // html table where viz sits in
	var chart = new google.visualization.ChartWrapper({
		chartType: 'AreaChart',
		containerId: 'chart_container'
	});
	
	var options = {
		chartArea: {left:'5%', top:'40', height:"75%", width: "100%"},
		fontName: getStyle(t1, "fontFamily", "font-family"),
		title: '1.000 euro / oaje',
		isStacked: true,
		tooltip: {isHtml: true},
		areaOpacity: 0.5,
		titleTextStyle: { bold: false, italic: true},
		legend: {position: 'bottom'},
		series: {0: {type: "line", linewidth: 2.5, color: '#2C5329'},
                 2: {areaOpacity: .5, color: '#35992A'},
				 1: {areaOpacity: 0, linewidth: 0, color: '#35992A', visibleInLegend: false}}
	}  
	var view = new google.visualization.DataView(data);
	
	function drawChart(view, options) {
	  chart.setDataTable(view);
	  chart.setOptions(options);
      chart.draw(view);
    }
	
	drawChart(view, options)
	
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