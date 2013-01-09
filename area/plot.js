function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Month');   
    data.addColumn('number', 'saldo');
    data.addColumn('number', 'krachtvoer');
    data.addColumn('number', 'overig voer');
    data.addColumn('number', 'overige');
    data.addColumn('number', 'opbrengsten');
    data.addRows([
	  [new Date(2005,11, 1),null,null,null,null,0],
	  [new Date(2006, 0, 1),13304.61,2479.276,1016.179,2415.466,19215.535],
  [new Date(2006, 1, 1),11557.29,2479.276,1016.179,2860.472,17913.22],
  [new Date(2006, 2, 1),11313.66,2810.808,1016.179,3305.478,18446.126],
  [new Date(2006, 3, 1),10616.05,2843.24,1016.179,3332.539,17808.008],
  [new Date(2006, 4, 1),11746.30,2864.862,1016.179,3131.084,18758.425],
  [new Date(2006, 5, 1),11256.88,2565.763,1016.179,2848.445,17687.263],
  [new Date(2006, 6, 1),11131.12,2575.372,1016.179,2619.929,17342.603],
  [new Date(2006, 7, 1),13777.36,2594.592,1016.179,2427.494,19815.623],
  [new Date(2006, 8, 1),13098.80,2633.03,1016.179,2283.167,19031.175],
  [new Date(2006, 9, 1),13850.00,2642.64,1016.179,2220.025,19728.84],
  [new Date(2006, 10, 1),13186.07,2700.297,1016.179,2220.025,19122.574],
  [new Date(2006, 11, 1),12572.81,3091.888,1016.179,2268.133,18949.013],
  [new Date(2007, 0, 1),12456.71,2806.003,957.897,2594.387,18814.996],
  [new Date(2007, 1, 1),10555.77,2892.489,957.897,3034.001,17440.158],
  [new Date(2007, 2, 1),10243.50,3318.915,957.897,3473.614,17993.923],
  [new Date(2007, 3, 1),9990.84,3372.969,957.897,3500.347,17822.053],
  [new Date(2007, 4, 1),10575.49,3470.266,957.897,3301.333,18304.987],
  [new Date(2007, 5, 1),10630.13,3113.51,957.897,3022.119,17723.657],
  [new Date(2007, 6, 1),12045.37,3151.948,957.897,2796.372,18951.585],
  [new Date(2007, 7, 1),16299.83,3276.873,957.897,2606.269,23140.872],
  [new Date(2007, 8, 1),17618.99,3507.504,957.897,2463.692,24548.083],
  [new Date(2007, 9, 1),20338.77,3805.401,957.897,2401.314,27503.38],
  [new Date(2007, 10, 1),20217.59,3959.155,957.897,2401.314,27535.959],
  [new Date(2007, 11, 1),19610.38,4562.157,957.897,2448.84,27579.278],
  [new Date(2008, 0, 1),17203.72,4064.86,1282.451,2904.229,25455.259],
  [new Date(2008, 1, 1),15229.02,4103.299,1282.451,3488.991,24103.759],
  [new Date(2008, 2, 1),13583.62,4691.887,1282.451,4073.753,23631.707],
  [new Date(2008, 3, 1),12157.01,4756.752,1282.451,4109.312,22305.529],
  [new Date(2008, 4, 1),12803.69,4778.373,1282.451,3844.589,22709.107],
  [new Date(2008, 5, 1),11658.02,4247.443,1282.451,3473.186,20661.103],
  [new Date(2008, 6, 1),11840.25,4237.833,1282.451,3172.903,20533.441],
  [new Date(2008, 7, 1),14497.58,4209.004,1282.451,2920.033,22909.073],
  [new Date(2008, 8, 1),14211.15,4103.299,1282.451,2730.38,22327.281],
  [new Date(2008, 9, 1),14956.43,3949.545,1282.451,2647.407,22835.833],
  [new Date(2008, 10, 1),14040.18,3718.915,1282.451,2647.407,21688.953],
  [new Date(2008, 11, 1),13281.64,4010.806,1282.451,2710.625,21285.52],
  [new Date(2009, 0, 1),11214.45,3421.017,1335.897,2879.2,18850.566],
  [new Date(2009, 1, 1),8596.38,3344.14,1335.897,3436.138,16712.556],
  [new Date(2009, 2, 1),5829.12,3708.104,1335.897,3950.596,14823.721],
  [new Date(2009, 3, 1),6006.89,3697.293,1335.897,3981.881,15021.963],
  [new Date(2009, 4, 1),6812.85,3654.05,1335.897,3748.984,15551.785],
  [new Date(2009, 5, 1),6285.16,3209.606,1335.897,3422.234,14252.893],
  [new Date(2009, 6, 1),7373.19,3151.948,1335.897,3158.053,15019.091],
  [new Date(2009, 7, 1),9430.44,3084.681,1335.897,2935.584,16786.603],
  [new Date(2009, 8, 1),9621.06,2988.585,1335.897,2768.733,16714.274],
  [new Date(2009, 9, 1),11576.97,2902.099,1335.897,2695.736,18510.705],
  [new Date(2009, 10, 1),12816.66,2882.88,1335.897,2695.736,19731.176],
  [new Date(2009, 11, 1),13768.82,3221.618,1335.897,2751.353,21077.691],
  [new Date(2010, 0, 1),12752.48,2882.88,1190.387,2965.754,19791.499],
  [new Date(2010, 1, 1),10179.07,2902.099,1190.387,3387.504,17659.059],
  [new Date(2010, 2, 1),9554.73,3264.861,1190.387,3785.567,17795.543],
  [new Date(2010, 3, 1),9948.60,3254.05,1190.387,3809.774,18202.815],
  [new Date(2010, 4, 1),12068.54,3254.05,1190.387,3629.569,20142.545],
  [new Date(2010, 5, 1),13395.38,2969.366,1190.387,3376.745,20931.882],
  [new Date(2010, 6, 1),14557.31,3046.243,1190.387,3172.334,21966.274],
  [new Date(2010, 7, 1),16334.15,3190.387,1190.387,3000.199,23715.125],
  [new Date(2010, 8, 1),14987.79,3411.408,1190.387,2871.097,22460.686],
  [new Date(2010, 9, 1),15901.61,3555.552,1190.387,2814.615,23462.165],
  [new Date(2010, 10, 1),15782.03,3670.867,1190.387,2814.615,23457.905],
  [new Date(2010, 11, 1),14753.96,4259.455,1190.387,2857.649,23061.455],
  [new Date(2011, 0, 1),14834.22,3891.888,1473.507,3162.625,23362.239],
  [new Date(2011, 1, 1),12268.82,4007.203,1473.507,3770.802,21520.334],
  [new Date(2011, 2, 1),11980.01,4659.454,1473.507,4360.417,22473.387],
  [new Date(2011, 3, 1),11857.36,4799.995,1473.507,4324.766,22455.634],
  [new Date(2011, 4, 1),14076.14,4832.427,1473.507,4009.949,24392.022],
  [new Date(2011, 5, 1),13831.06,4305.1,1473.507,3671.698,23281.363],
  [new Date(2011, 6, 1),15570.63,4305.1,1473.507,3405.057,24754.293],
  [new Date(2011, 7, 1),15980.33,4295.491,1473.507,3151.547,24900.879],
  [new Date(2011, 8, 1),14430.55,4257.052,1473.507,2967.998,23129.108],
  [new Date(2011, 9, 1),15793.72,4209.004,1473.507,2891.089,24367.318],
  [new Date(2011, 10, 1),15446.43,4151.347,1473.507,2890.102,23961.39],
  [new Date(2011, 11, 1),15334.86,4616.211,1473.507,2938.534,24363.115],
  [new Date(2012, 0, 1),15900.67,4084.08,1388.738,3208.564,24582.054],
  [new Date(2012, 1, 1),13194.73,4141.737,1388.738,3759.604,22484.81],
  [new Date(2012, 2, 1),11870.99,4713.508,1388.738,4240.884,22214.124],
  [new Date(2012, 3, 1),10796.06,4789.184,1388.738,4196.737,21170.717],
  [new Date(2012, 4, 1),11034.77,4908.103,1388.738,3927.896,21259.508],
  [new Date(2012, 5, 1),10608.36,4439.635,1388.738,3622.257,20058.99],
  [new Date(2012, 6, 1),11913.39,4545.34,1388.738,3377.038,21224.508],
  [new Date(2012, 7, 1),12601.56,4708.704,1388.738,3159.792,21858.799],
  [new Date(2012, 8, 1),11733.32,4814.409,1388.738,3006.8,20943.271],
  [new Date(2012, 9, 1),12560.42,4920.115,1388.738,2894.932,21764.205],
  [new Date(2012, 10, 1),13099.58,5006.601,1388.738,2894.932,22389.85],
  [new Date(2012, 11, 1),13276.93,5697.291,1388.738,2894.932,23257.889],
	  [new Date(2013,0, 1),null,null,null,null,0]
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
                start: data.getValue(1, 0), // first date
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
