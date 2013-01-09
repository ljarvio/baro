function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Month');   
    data.addColumn('number', 'saldo');
    data.addColumn('number', 'voer');
    data.addColumn('number', 'aankoop dieren');
    data.addColumn('number', 'overige');
    data.addColumn('number', 'opbrengsten');
    data.addRows([
	  [new Date(2005,11, 1),null,null,null,null,0],
  [new Date(2006, 0, 1),29711.30,16684.85,2989.39,7083.33,56468.87],
  [new Date(2006, 0, 1),29711.30,16684.85,2989.39,7083.33,56468.87],
  [new Date(2006, 1, 1),34785.73,16762.90,3136.79,7083.33,61768.75],
  [new Date(2006, 2, 1),36930.89,16864.75,3166.27,7083.33,64045.25],
  [new Date(2006, 3, 1),33181.58,16893.19,3071.93,7083.33,60230.03],
  [new Date(2006, 4, 1),30223.78,16905.09,3007.08,7083.33,57219.28],
  [new Date(2006, 5, 1),29650.26,16950.06,2971.70,7083.33,56655.35],
  [new Date(2006, 6, 1),25941.82,16978.50,2948.11,7083.33,52951.77],
  [new Date(2006, 7, 1),23719.97,17051.91,2889.15,7083.33,50744.36],
  [new Date(2006, 8, 1),26037.30,17293.33,2924.53,7083.33,53338.49],
  [new Date(2006, 9, 1),21978.69,17473.23,2836.08,7083.33,49371.34],
  [new Date(2006, 10, 1),22801.55,17906.44,2865.57,7083.33,50656.88],
  [new Date(2006, 11, 1),26472.54,18209.36,2965.80,7083.33,54731.03],
  [new Date(2007, 0, 1),24068.55,18524.19,3024.76,7083.33,52700.84],
  [new Date(2007, 1, 1),28190.96,18867.45,3113.21,7083.33,57254.95],
  [new Date(2007, 2, 1),22326.52,19227.25,3012.97,7083.33,51650.07],
  [new Date(2007, 3, 1),18320.31,19542.08,2936.32,7083.33,47882.04],
  [new Date(2007, 4, 1),12515.35,19755.05,2830.19,7083.33,42183.92],
  [new Date(2007, 5, 1),6936.54,19934.95,2688.68,7083.33,36643.50],
  [new Date(2007, 6, 1),3303.47,20204.80,2606.13,7083.33,33197.73],
  [new Date(2007, 7, 1),2186.13,20834.45,2594.34,7083.33,32698.26],
  [new Date(2007, 8, 1),-449.19,21885.41,2576.65,7083.33,31096.20],
  [new Date(2007, 9, 1),-5906.61,23353.05,2511.79,7083.33,27041.57],
  [new Date(2007, 10, 1),-4098.87,24233.39,2576.65,7083.33,29794.51],
  [new Date(2007, 11, 1),1921.92,24597.83,2718.16,7083.33,36321.24],
  [new Date(2008, 0, 1),799.97,24851.14,2706.37,7083.33,35440.80],
  [new Date(2008, 1, 1),6177.49,25154.06,2818.40,7083.33,41233.28],
  [new Date(2008, 2, 1),15861.46,25587.28,3024.76,7083.33,51556.83],
  [new Date(2008, 3, 1),10130.84,25947.08,2912.74,7083.33,46073.99],
  [new Date(2008, 4, 1),11664.90,25996.69,2959.91,7083.33,47704.83],
  [new Date(2008, 5, 1),13508.38,26013.23,3001.18,7083.33,49606.12],
  [new Date(2008, 6, 1),9034.64,25984.79,2900.94,7083.33,45003.71],
  [new Date(2008, 7, 1),14422.20,25743.38,3024.76,7083.33,50273.68],
  [new Date(2008, 8, 1),17455.66,25080.65,3077.83,7083.33,52697.47],
  [new Date(2008, 9, 1),16879.64,24254.56,3042.45,7083.33,51259.99],
  [new Date(2008, 10, 1),17421.26,23232.04,3178.07,7083.33,50914.69],
  [new Date(2008, 11, 1),25111.54,22467.46,3337.26,7083.33,57999.60],
  [new Date(2009, 0, 1),26399.81,21731.33,3349.06,7083.33,58563.52],
  [new Date(2009, 1, 1),26247.27,21461.48,3349.06,7083.33,58141.14],
  [new Date(2009, 2, 1),28379.14,21260.40,3413.92,7083.33,60136.79],
  [new Date(2009, 3, 1),29968.86,21137.38,3443.40,7083.33,61632.97],
  [new Date(2009, 4, 1),27242.86,20940.94,3360.85,7083.33,58627.98],
  [new Date(2009, 5, 1),23596.40,20884.06,3254.72,7083.33,54818.52],
  [new Date(2009, 6, 1),21091.15,20888.70,3195.75,7083.33,52258.94],
  [new Date(2009, 7, 1),21555.62,20623.49,3189.86,7083.33,52452.30],
  [new Date(2009, 8, 1),16937.21,20206.81,3042.45,7083.33,47269.81],
  [new Date(2009, 9, 1),8957.16,19806.68,2871.46,7083.33,38718.64],
  [new Date(2009, 10, 1),11893.38,19688.29,2948.11,7083.33,41613.12],
  [new Date(2009, 11, 1),15346.56,19598.34,3030.66,7083.33,45058.89],
  [new Date(2010, 0, 1),18623.24,19643.31,3119.10,7083.33,48468.99],
  [new Date(2010, 1, 1),24530.08,19721.36,3254.72,7083.33,54589.49],
  [new Date(2010, 2, 1),25412.00,19749.80,3301.89,7083.33,55547.02],
  [new Date(2010, 3, 1),23578.95,19692.93,3260.61,7083.33,53615.82],
  [new Date(2010, 4, 1),20780.42,19721.36,3207.55,7083.33,50792.67],
  [new Date(2010, 5, 1),21268.61,20007.75,3254.72,7083.33,51614.41],
  [new Date(2010, 6, 1),14985.56,20310.68,3066.04,7083.33,45445.61],
  [new Date(2010, 7, 1),11597.36,21075.25,3001.18,7083.33,42757.12],
  [new Date(2010, 8, 1),5230.34,22318.01,2830.19,7083.33,37461.88],
  [new Date(2010, 9, 1),1995.75,23205.61,2794.81,7083.33,35079.51],
  [new Date(2010, 10, 1),2986.88,23851.80,2859.67,7083.33,36781.68],
  [new Date(2010, 11, 1),7910.07,24497.99,2995.28,7083.33,42486.67],
  [new Date(2011, 0, 1),2612.46,25160.71,2859.67,7083.33,37716.17],
  [new Date(2011, 1, 1),12272.96,25582.03,3101.42,7083.33,48039.73],
  [new Date(2011, 2, 1),15713.89,26301.63,3195.75,7083.33,52294.60],
  [new Date(2011, 3, 1),15425.98,26976.25,3195.75,7083.33,52681.32],
  [new Date(2011, 4, 1),12466.37,27189.23,3125.00,7083.33,49863.93],
  [new Date(2011, 5, 1),6351.61,27324.15,2971.70,7083.33,43730.80],
  [new Date(2011, 6, 1),4199.74,27397.56,3113.21,7083.33,41793.84],
  [new Date(2011, 7, 1),800.50,27369.13,3030.66,7083.33,38283.61],
  [new Date(2011, 8, 1),545.93,27189.23,3007.08,7083.33,37825.56],
  [new Date(2011, 9, 1),1742.98,26919.38,3024.76,7083.33,38770.45],
  [new Date(2011, 10, 1),9130.42,26621.09,3183.96,7083.33,46018.80],
  [new Date(2011, 11, 1),17211.76,26351.24,3408.02,7083.33,54054.35],
  [new Date(2012, 0, 1),21062.31,26228.21,3502.36,7083.33,57876.21],
  [new Date(2012, 1, 1),29059.10,26408.11,3725.00,7083.33,66275.54],
  [new Date(2012, 2, 1),29911.71,26682.60,3750.00,7083.33,67427.64],
  [new Date(2012, 3, 1),29897.68,27193.86,3750.00,7083.33,67924.87],
  [new Date(2012, 4, 1),24123.48,27918.10,3675.00,7083.33,62799.91],
  [new Date(2012, 5, 1),18307.73,28372.49,3550.00,7083.33,57313.55],
  [new Date(2012, 6, 1),9113.01,28765.36,3343.75,7083.33,48305.45],
  [new Date(2012, 7, 1),9420.05,29551.11,3381.25,7083.33,49435.74],
  [new Date(2012, 8, 1),15908.28,30230.38,3575.00,7083.33,56796.99],
  [new Date(2012, 9, 1),14549.37,30819.69,3600.00,7083.33,56052.39],
  [new Date(2012, 10, 1),13714.46,31302.51,3612.50,7083.33,55712.81],
  [new Date(2012, 11, 1),null,null,null,null,0]
	]);
  	 
    var view = new google.visualization.DataView(data);

	if (data.getColumnType(0) !== "date") {alert("First column in data is not of type Date!") ;}
	var dateformatAxis = 'MMMyy';
	var dateformatToolTip = 'MMMM yyyy';
	var dateformatter = new google.visualization.DateFormat({pattern: dateformatToolTip});
	dateformatter.format(data, 0); // format for dates
	 
    var numberformatter = new google.visualization.NumberFormat({pattern:'#,### EUR'});
	for (var i = 1; i < data.getNumberOfColumns(); i++) {numberformatter.format(data, i);} // format for numbers
	
    var control = new google.visualization.ControlWrapper({
        controlType: 'ChartRangeFilter',
        containerId: 'control',
        dataTable: data,
        options: {	
            filterColumnIndex: 0,
            ui: {
                chartOptions: {
					//backgroundColor: colorToHex(getStyle(t1, "backgroundColor", "background-color")),
                    hAxis: {format: dateformatAxis}
                },          
                chartView: {
                    columns: [0, {
                        type: 'number',
                        calc: function() {return 0;}
                    }]
                }         
            }
        },
        state: {
            range: {
                start: data.getValue(3, 0), // first date
                end: data.getValue(data.getNumberOfRows()-1, 0) // last date
            }
        }
    });
    
    var chart = new google.visualization.ChartWrapper({
        chartType: 'ColumnChart',
        containerId: 'chart_container',
        options: {
			title: 'euro',
			titleTextStyle: {bold: false, italic: true},
            seriesType: "bars",
	    	isStacked: true,
			legend: {position: 'bottom'},
	    	//backgroundColor: colorToHex(getStyle(t1, "backgroundColor", "background-color")), //huisstijl
			chartArea: {left:'12%', top:'10%', height:"75%", width: "100%"},
	    	colors: ['#333', '#69B0E1', '#ED7301', '#C2BBB1',  '#35992A'], //huisstijl
	    	hAxis: {format: dateformatAxis},
            vAxis: {gridlines: {count: 8}},
	    	series: {0: {type: "line", linewidth: 2.5}}
        }
    });
    
    // renders the chart initially by calling drawChart
    google.visualization.events.addListener(control, 'ready', function() {
        var zoom = control.getState();
        drawChart(zoom.range.start, zoom.range.end);
    });
    // renders the chart when re-zooming
    google.visualization.events.addListener(control, 'statechange', function(e) {
        var zoom = control.getState();
        drawChart(zoom.range.start, zoom.range.end);
    });

    control.draw();

    function drawChart(min, max) {
        // select rows which match the date-interval
        var rows = data.getFilteredRows([{
            column: 0,
            minValue: min,
            maxValue: max
        }]);
        view.setRows(rows); // current view on data      
        chart.setDataTable(view); // associate current view with chart
		view.setColumns([0, 1, {calc:cost1, type:'number', label: view.getColumnLabel(2)}, {calc:cost2, type:'number', label: view.getColumnLabel(3)},
						{calc:cost3, type:'number', label: view.getColumnLabel(4)}, 5]);
        chart.draw();
    }	
	// make sure costs are shown as negative numbers regardless of data
	function cost1(dataTable, rowNum){
		return (-1)*Math.abs(dataTable.getValue(rowNum, 2));
	}
	function cost2(dataTable, rowNum){
		return (-1)*Math.abs(dataTable.getValue(rowNum, 3));
	}
	function cost3(dataTable, rowNum){
		return (-1)*Math.abs(dataTable.getValue(rowNum, 4));
	}
	
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
	
	// helper function: rgb(1,0,0) ---> '#FF0000'
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
