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
  [new Date(2006, 0, 1),11834,52217,17447,10139,91636],
  [new Date(2006, 1, 1),10261,52448,17286,10139,90134],
  [new Date(2006, 2, 1),7972,52613,17158,10139,87880],
  [new Date(2006, 3, 1),6161,53082,16997,10139,86378],
  [new Date(2006, 4, 1),8077,53419,16997,10139,88632],
  [new Date(2006, 5, 1),13263,53491,16997,10139,93889],
  [new Date(2006, 6, 1),15556,53451,16997,10139,96143],
  [new Date(2006, 7, 1),15750,54008,16997,10139,96894],
  [new Date(2006, 8, 1),15708,54802,16997,10139,97645],
  [new Date(2006, 9, 1),15857,56155,16997,10139,99147],
  [new Date(2006, 10, 1),15976,57538,16997,10139,100649],
  [new Date(2006, 11, 1),15360,58937,16965,10139,101401],
  [new Date(2007, 0, 1),16286,60136,17093,10139,103654],
  [new Date(2007, 1, 1),18596,60702,17222,10139,106658],
  [new Date(2007, 2, 1),20850,61227,17447,10139,109663],
  [new Date(2007, 3, 1),22980,61941,17607,10139,112667],
  [new Date(2007, 4, 1),25966,62454,17864,10139,116423],
  [new Date(2007, 5, 1),28047,63153,18089,10139,119427],
  [new Date(2007, 6, 1),26984,64807,18249,10139,120178],
  [new Date(2007, 7, 1),23943,67848,18249,10139,120178],
  [new Date(2007, 8, 1),20608,73116,18570,10139,122432],
  [new Date(2007, 9, 1),21027,73974,18795,10139,123934],
  [new Date(2007, 10, 1),20125,74748,18923,10139,123934],
  [new Date(2007, 11, 1),18271,76441,19084,10139,123934],
  [new Date(2008, 0, 1),16753,77321,19722,10139,123934],
  [new Date(2008, 1, 1),15787,78158,19850,10139,123934],
  [new Date(2008, 2, 1),15460,79140,19946,10139,124685],
  [new Date(2008, 3, 1),15730,79557,20011,10139,125436],
  [new Date(2008, 4, 1),15311,79976,20011,10139,125436],
  [new Date(2008, 5, 1),17064,79597,20139,10139,126938],
  [new Date(2008, 6, 1),17419,79961,20171,10139,127690],
  [new Date(2008, 7, 1),14952,78737,20107,10139,123934],
  [new Date(2008, 8, 1),16874,76878,20043,10139,123934],
  [new Date(2008, 9, 1),19312,74569,19914,10139,123934],
  [new Date(2008, 10, 1),17330,72173,19786,10139,119427],
  [new Date(2008, 11, 1),16205,70486,19593,10139,116423],
  [new Date(2009, 0, 1),17846,68877,19561,10139,116423],
  [new Date(2009, 1, 1),18381,68374,19529,10139,116423],
  [new Date(2009, 2, 1),20187,67974,19625,10139,117925],
  [new Date(2009, 3, 1),20980,67804,19754,10139,118676],
  [new Date(2009, 4, 1),20468,68252,19818,10139,118676],
  [new Date(2009, 5, 1),20210,68413,19914,10139,118676],
  [new Date(2009, 6, 1),22366,68511,19914,10139,120930],
  [new Date(2009, 7, 1),23386,67458,19946,10139,120930],
  [new Date(2009, 8, 1),23258,66835,19946,10139,120178],
  [new Date(2009, 9, 1),19848,66425,20011,10139,116423],
  [new Date(2009, 10, 1),12255,66476,20043,10139,108912],
  [new Date(2009, 11, 1),10722,66507,20043,10139,107409],
  [new Date(2010, 0, 1),12718,66732,20075,10139,109663],
  [new Date(2010, 1, 1),12634,66784,20107,10139,109663],
  [new Date(2010, 2, 1),13417,66655,20203,10139,110414],
  [new Date(2010, 3, 1),14534,67040,20203,10139,111916],
  [new Date(2010, 4, 1),16162,67634,20235,10139,114170],
  [new Date(2010, 5, 1),17488,68561,20235,10139,116423],
  [new Date(2010, 6, 1),18871,70934,20235,10139,120178],
  [new Date(2010, 7, 1),16935,73620,20235,10139,120930],
  [new Date(2010, 8, 1),14828,76479,20235,10139,121681],
  [new Date(2010, 9, 1),13196,78110,20235,10139,121681],
  [new Date(2010, 10, 1),11644,80413,20235,10139,122432],
  [new Date(2010, 11, 1),10329,83231,20235,10139,123934],
  [new Date(2011, 0, 1),10530,85284,20235,10139,126187],
  [new Date(2011, 1, 1),10164,86400,20235,10139,126938],
  [new Date(2011, 2, 1),11479,87274,20300,10139,129192],
  [new Date(2011, 3, 1),12911,88847,20300,10139,132196],
  [new Date(2011, 4, 1),14372,88921,20268,10139,133699],
  [new Date(2011, 5, 1),13868,88211,19979,10139,132196],
  [new Date(2011, 6, 1),14207,87538,19561,10139,131445],
  [new Date(2011, 7, 1),15307,86824,19176,10139,131445],
  [new Date(2011, 8, 1),16996,86829,18983,10139,132947],
  [new Date(2011, 9, 1),18016,85809,18983,10139,132947],
  [new Date(2011, 10, 1),18166,84909,18983,10139,132196],
  [new Date(2011, 11, 1),18535,83788,18983,10139,131445],
  [new Date(2012, 0, 1),15496,84046,19511,10139,129192],
  [new Date(2012, 1, 1),13951,84841,19511,10139,128441],
  [new Date(2012, 2, 1),13514,85997,19543,10139,129192],
  [new Date(2012, 3, 1),15511,87722,19575,10139,132947],
  [new Date(2012, 4, 1),14552,89240,19768,10139,133699],
  [new Date(2012, 5, 1),15430,90455,19928,10139,135952],
  [new Date(2012, 6, 1),14088,93235,19993,10139,137454],
  [new Date(2012, 7, 1),10198,96901,20217,10139,137454],
  [new Date(2012, 8, 1),10904,99167,20249,10139,140459],
  [new Date(2012, 9, 1),9956,100705,20410,10139,141210],
  [new Date(2012, 10, 1),7969,102628,20474,10139,141210],
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
