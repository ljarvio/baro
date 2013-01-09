function drawVisualization() {
	var data = new google.visualization.DataTable();
    data.addColumn('date', 'jaar');
	data.addColumn('number', 'gemiddelde');
	data.addColumn({type:'string', role:'tooltip', p: {html:true}});  // tooltip for avg
	data.addColumn({type:'boolean',role:'certainty'}); // certainty column
	data.addColumn('number', '20%');
	data.addColumn({type:'string', role:'tooltip', p: {html:true}});  // tooltip for 20% series
	data.addColumn({type:'boolean',role:'certainty'}); // certainty column
	data.addColumn('number', '20%-80% groep');
	data.addColumn({type:'string', role:'tooltip', p: {html:true}});  // tooltip for 80% series
	data.addColumn({type:'boolean',role:'certainty'}); // certainty column
	data.addRows([
[new Date(2001,0,1), 35.49, "<b>2001</b><br>gemiddelde: <b>35.49</b>", true, 11.93, "<b>2001</b><br>20%: <b>11.93</b>", true, 43.74, "<b>2001</b><br>80%: <b>55.67</b>", true],
[new Date(2002,0,1), 25.32, "<b>2002</b><br>gemiddelde: <b>25.32</b>", true, 3.97, "<b>2002</b><br>20%: <b>3.97</b>", true, 39.06, "<b>2002</b><br>80%: <b>43.03</b>", true],
[new Date(2003,0,1), 25.22, "<b>2003</b><br>gemiddelde: <b>25.22</b>", true, 7.1, "<b>2003</b><br>20%: <b>7.10</b>", true, 34.24, "<b>2003</b><br>80%: <b>41.34</b>", true],
[new Date(2004,0,1), 31.2, "<b>2004</b><br>gemiddelde: <b>31.20</b>", true, 8.35, "<b>2004</b><br>20%: <b>8.35</b>", true, 42.46, "<b>2004</b><br>80%: <b>50.81</b>", true],
[new Date(2005,0,1), 35.81, "<b>2005</b><br>gemiddelde: <b>35.81</b>", true, 12.88, "<b>2005</b><br>20%: <b>12.88</b>", true, 41.89, "<b>2005</b><br>80%: <b>54.77</b>", true],
[new Date(2006,0,1), 36.12, "<b>2006</b><br>gemiddelde: <b>36.12</b>", true, 10.71, "<b>2006</b><br>20%: <b>10.71</b>", true, 45.43, "<b>2006</b><br>80%: <b>56.14</b>", true],
[new Date(2007,0,1), 54.14, "<b>2007</b><br>gemiddelde: <b>54.14</b>", true, 26.17, "<b>2007</b><br>20%: <b>26.17</b>", true, 53.92, "<b>2007</b><br>80%: <b>80.09</b>", true],
[new Date(2008,0,1), 38.56, "<b>2008</b><br>gemiddelde: <b>38.56</b>", true, 12.54, "<b>2008</b><br>20%: <b>12.54</b>", true, 46.85, "<b>2008</b><br>80%: <b>59.39</b>", true],
[new Date(2009,0,1), -2.18, "<b>2009</b><br>gemiddelde: <b>-2.18</b>", true, -23.32, "<b>2009</b><br>20%: <b>-23.32</b>", true, 43.98, "<b>2009</b><br>80%: <b>20.66</b>", true],
[new Date(2010,0,1), 40, "<b>2010</b><br>gemiddelde: <b>40.00</b>", true, 10, "<b>2010</b><br>20%: <b>10.00</b>", true, 50, "<b>2010</b><br>80%: <b>60.00</b>", true],
[new Date(2011,0,1), 50, "<b>2011</b><br>gemiddelde: <b>50.00</b>", true, 15, "<b>2011</b><br>20%: <b>15.00</b>", true, 55, "<b>2011</b><br>80%: <b>70.00</b>", true],
[new Date(2012,0,1), 34, "<b>2012</b><br>gemiddelde: <b>34.00</b>", false, 0, "<b>2012</b><br>20%: <b>0.00</b>", false, 50, "<b>2012</b><br>80%: <b>50.00</b>", false]
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