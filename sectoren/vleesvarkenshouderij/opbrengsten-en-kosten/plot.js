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
  [new Date(2006, 0, 1),6730.983,15096.087,16755.344,2083.333,40665.748],
  [new Date(2006, 1, 1),4618.853,15142.394,18406.21,2083.333,40250.791],
  [new Date(2006, 2, 1),7105.175,15281.315,18975.474,2083.333,43445.298],
  [new Date(2006, 3, 1),8292.274,15327.622,17742.068,2083.333,43445.298],
  [new Date(2006, 4, 1),9522.547,15327.622,16831.246,2083.333,43764.749],
  [new Date(2006, 5, 1),14533.658,15373.929,16565.589,2083.333,48556.51],
  [new Date(2006, 6, 1),15071.236,15373.929,15389.109,2083.333,47917.609],
  [new Date(2006, 7, 1),18011.747,15466.543,14592.14,2083.333,50153.764],
  [new Date(2006, 8, 1),14747.087,15698.078,15389.109,2083.333,47917.609],
  [new Date(2006, 9, 1),11839.647,15929.613,14231.606,2083.333,44084.2],
  [new Date(2006, 10, 1),8430.842,16346.376,14668.041,2083.333,41528.594],
  [new Date(2006, 11, 1),5706.205,16670.525,16110.178,2083.333,40570.242],
  [new Date(2007, 0, 1),3104.179,16994.674,15578.864,2083.333,37761.051],
  [new Date(2007, 1, 1),2917.851,17365.13,16926.123,2083.333,39292.439],
  [new Date(2007, 2, 1),2338.483,17735.587,15218.33,2083.333,37375.735],
  [new Date(2007, 3, 1),4149.166,18059.736,14041.851,2083.333,38334.087],
  [new Date(2007, 4, 1),7859.315,18198.657,12428.935,2083.333,40570.242],
  [new Date(2007, 5, 1),10886.52,18476.499,10721.143,2083.333,42167.495],
  [new Date(2007, 6, 1),13475.025,18661.727,9544.663,2083.333,43764.749],
  [new Date(2007, 7, 1),12772.932,19310.025,9279.007,2083.333,43445.298],
  [new Date(2007, 8, 1),12436.426,20421.393,8823.595,2083.333,43764.749],
  [new Date(2007, 9, 1),8980.617,21764.297,7741.993,2083.333,40570.242],
  [new Date(2007, 10, 1),5685.322,22551.516,8652.816,2083.333,38972.988],
  [new Date(2007, 11, 1),3612.297,22875.665,10721.143,2083.333,39292.439],
  [new Date(2008, 0, 1),4070.47,23107.2,10436.511,2083.333,39697.516],
  [new Date(2008, 1, 1),3211.73,23431.349,12163.279,2083.333,40889.693],
  [new Date(2008, 2, 1),2473.788,23894.42,15313.208,2083.333,43764.749],
  [new Date(2008, 3, 1),3361.977,24264.876,13415.66,2083.333,43125.848],
  [new Date(2008, 4, 1),7700.59,24357.49,13776.194,2083.333,47917.609],
  [new Date(2008, 5, 1),9724.883,24357.49,14307.507,2083.333,50473.214],
  [new Date(2008, 6, 1),13254.503,24357.49,12694.592,2083.333,52389.919],
  [new Date(2008, 7, 1),13865.728,24125.955,14231.606,2083.333,54306.623],
  [new Date(2008, 8, 1),13200.364,23431.349,14952.674,2083.333,53667.722],
  [new Date(2008, 9, 1),11292.531,22505.209,14592.14,2083.333,50473.214],
  [new Date(2008, 10, 1),6670.499,21301.227,14668.041,2083.333,44723.101],
  [new Date(2008, 11, 1),4465.858,20514.007,17021,2083.333,44084.2],
  [new Date(2009, 0, 1),2583.507,19680.481,17286.657,2083.333,41633.98],
  [new Date(2009, 1, 1),1299.894,19356.332,17191.78,2083.333,39931.34],
  [new Date(2009, 2, 1),2071.452,19217.411,17836.946,2083.333,41209.143],
  [new Date(2009, 3, 1),4113.326,19032.183,18216.455,2083.333,43445.298],
  [new Date(2009, 4, 1),5501.496,18893.262,17286.657,2083.333,43764.749],
  [new Date(2009, 5, 1),8397.438,18846.955,16034.276,2083.333,45362.003],
  [new Date(2009, 6, 1),11224.965,18846.955,15123.453,2083.333,47278.707],
  [new Date(2009, 7, 1),11549.114,18522.806,15123.453,2083.333,47278.707],
  [new Date(2009, 8, 1),10750.043,18059.736,13510.537,2083.333,44403.651],
  [new Date(2009, 9, 1),9313.112,17642.972,10891.922,2083.333,39931.34],
  [new Date(2009, 10, 1),8277.817,17596.665,11973.524,2083.333,39931.34],
  [new Date(2009, 11, 1),5869.841,17550.358,13150.003,2083.333,38653.537],
  [new Date(2010, 0, 1),5233.036,17504.051,14231.606,2083.333,39052.028],
  [new Date(2010, 1, 1),5636.052,17550.358,15939.398,2083.333,41209.143],
  [new Date(2010, 2, 1),3263.936,17550.358,16394.81,2083.333,39292.439],
  [new Date(2010, 3, 1),4321.167,17457.744,15749.643,2083.333,39611.89],
  [new Date(2010, 4, 1),7402.863,17504.051,14857.796,2083.333,41848.045],
  [new Date(2010, 5, 1),10692.773,17781.894,15123.453,2083.333,45681.453],
  [new Date(2010, 6, 1),10105.918,18106.043,13150.003,2083.333,43445.298],
  [new Date(2010, 7, 1),11507.324,18893.262,12239.181,2083.333,44723.101],
  [new Date(2010, 8, 1),8029.054,20097.244,10360.609,2083.333,40570.242],
  [new Date(2010, 9, 1),8113.838,20977.078,9715.443,2083.333,40889.693],
  [new Date(2010, 10, 1),7188.395,21671.683,10265.731,2083.333,41209.143],
  [new Date(2010, 11, 1),6380.987,22273.674,12068.401,2083.333,42806.397],
  [new Date(2011, 0, 1),3941.471,22875.665,10797.045,2083.333,39697.516],
  [new Date(2011, 1, 1),4029.948,23385.042,13946.973,2083.333,43445.298],
  [new Date(2011, 2, 1),3980.69,24079.648,15218.33,2083.333,45362.003],
  [new Date(2011, 3, 1),5887.998,24727.946,15218.33,2083.333,47917.609],
  [new Date(2011, 4, 1),7525.638,24959.481,14307.507,2083.333,48875.961],
  [new Date(2011, 5, 1),8626.387,25098.402,12428.935,2083.333,48237.059],
  [new Date(2011, 6, 1),9252.578,25098.402,11802.745,2083.333,48237.059],
  [new Date(2011, 7, 1),9197.562,25052.095,10626.265,2083.333,46959.256],
  [new Date(2011, 8, 1),9572.544,24866.867,10436.511,2083.333,46959.256],
  [new Date(2011, 9, 1),10477.8,24635.332,10721.143,2083.333,47917.609],
  [new Date(2011, 10, 1),10752.691,24357.49,12960.249,2083.333,50153.764],
  [new Date(2011, 11, 1),8046.16,24125.955,15578.864,2083.333,49834.313],
  [new Date(2012, 0, 1),3633.556,23987.034,16888.172,2083.333,46592.096],
  [new Date(2012, 1, 1),3777.39,24172.262,19449.861,2083.333,49482.847],
  [new Date(2012, 2, 1),3458.919,24542.718,19734.493,2083.333,49819.465],
  [new Date(2012, 3, 1),4537.755,25052.095,19829.371,2083.333,51502.555],
  [new Date(2012, 4, 1),4399.904,25793.007,18216.455,2083.333,50492.701],
  [new Date(2012, 5, 1),5690.934,26209.77,16508.662,2083.333,50492.701],
  [new Date(2012, 6, 1),6681.406,26719.148,13662.341,2083.333,49146.229],
  [new Date(2012, 7, 1),11426.938,27506.367,13852.096,2083.333,54868.735],
  [new Date(2012, 8, 1),12543.262,28247.279,16034.276,2083.333,58908.151],
  [new Date(2012, 9, 1),11552.667,28849.27,15749.643,2083.333,58234.915],
  [new Date(2012, 10, 1),8396.653,29312.34,15749.643,2083.333,55541.971],
  [new Date(2012, 11, 1),0,null,null,null,null]
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
