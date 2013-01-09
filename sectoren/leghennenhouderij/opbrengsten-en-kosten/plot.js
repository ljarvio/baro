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
  [new Date(2006, 0, 1),9896,24581,9658,4167,48302],
  [new Date(2006, 1, 1),15034,24795,9690,4167,53686],
  [new Date(2006, 2, 1),15177,24866,9690,4167,53900],
  [new Date(2006, 3, 1),8106,24938,9690,4167,46900],
  [new Date(2006, 4, 1),860,25151,9722,4167,39900],
  [new Date(2006, 5, 1),1458,25223,9753,4167,40600],
  [new Date(2006, 6, 1),-2114,25294,9753,4167,37100],
  [new Date(2006, 7, 1),6174,25365,9848,4167,45554],
  [new Date(2006, 8, 1),13739,25793,9880,4167,53578],
  [new Date(2006, 9, 1),14959,26220,9848,4167,55194],
  [new Date(2006, 10, 1),19690,27004,9880,4167,60740],
  [new Date(2006, 11, 1),18089,27788,9943,4167,59986],
  [new Date(2007, 0, 1),12096,28215,10070,4167,54548],
  [new Date(2007, 1, 1),17077,28856,10102,4167,60202],
  [new Date(2007, 2, 1),19441,29284,10165,4167,63056],
  [new Date(2007, 3, 1),9759,29640,10228,4167,53794],
  [new Date(2007, 4, 1),6574,29854,10292,4167,50886],
  [new Date(2007, 5, 1),9106,30068,10292,4167,53632],
  [new Date(2007, 6, 1),11607,30281,10323,4167,56378],
  [new Date(2007, 7, 1),13508,31279,10387,4167,59340],
  [new Date(2007, 8, 1),21952,32918,10482,4167,69518],
  [new Date(2007, 9, 1),25755,34913,10608,4167,75442],
  [new Date(2007, 10, 1),31623,36124,10798,4167,82712],
  [new Date(2007, 11, 1),30679,36694,10957,4167,82496],
  [new Date(2008, 0, 1),22968,37193,11115,4167,75442],
  [new Date(2008, 1, 1),23094,37834,11210,4167,76304],
  [new Date(2008, 2, 1),12791,38618,11305,4167,66880],
  [new Date(2008, 3, 1),687,39188,11368,4167,55410],
  [new Date(2008, 4, 1),-2763,39473,11463,4167,52340],
  [new Date(2008, 5, 1),-1637,39544,11558,4167,53632],
  [new Date(2008, 6, 1),-2997,39473,11590,4167,52232],
  [new Date(2008, 7, 1),1601,39259,11622,4167,56648],
  [new Date(2008, 8, 1),6855,38475,11622,4167,61118],
  [new Date(2008, 9, 1),11524,36908,11590,4167,64188],
  [new Date(2008, 10, 1),18291,34556,11590,4167,68604],
  [new Date(2008, 11, 1),31412,33345,11527,4167,80450],
  [new Date(2009, 0, 1),26661,32063,11368,4167,74258],
  [new Date(2009, 1, 1),32362,31635,11210,4167,79374],
  [new Date(2009, 2, 1),43863,31493,11052,4167,90574],
  [new Date(2009, 3, 1),34620,31493,10925,4167,81204],
  [new Date(2009, 4, 1),21776,31421,10862,4167,68226],
  [new Date(2009, 5, 1),18843,31564,10798,4167,65372],
  [new Date(2009, 6, 1),16925,31920,10798,4167,63810],
  [new Date(2009, 7, 1),24839,31706,10798,4167,71510],
  [new Date(2009, 8, 1),32568,31279,10767,4167,78780],
  [new Date(2009, 9, 1),39010,30923,10767,4167,84866],
  [new Date(2009, 10, 1),49649,30780,10608,4167,95204],
  [new Date(2009, 11, 1),59063,30851,10545,4167,104626],
  [new Date(2010, 0, 1),57054,30923,10545,4167,102688],
  [new Date(2010, 1, 1),63985,31208,10545,4167,109904],
  [new Date(2010, 2, 1),62319,31208,10703,4167,108396],
  [new Date(2010, 3, 1),30346,31208,10798,4167,76518],
  [new Date(2010, 4, 1),15412,31279,10798,4167,61656],
  [new Date(2010, 5, 1),12170,31635,10830,4167,58802],
  [new Date(2010, 6, 1),-2616,32205,10830,4167,44586],
  [new Date(2010, 7, 1),1133,33131,10893,4167,49324],
  [new Date(2010, 8, 1),4218,35198,11020,4167,54602],
  [new Date(2010, 9, 1),-2093,36480,10988,4167,49542],
  [new Date(2010, 10, 1),-4334,37406,11495,4167,48734],
  [new Date(2010, 11, 1),2034,38119,11685,4167,56004],
  [new Date(2011, 0, 1),-10205,39116,11780,4167,44858],
  [new Date(2011, 1, 1),-10084,39900,11843,4167,45826],
  [new Date(2011, 2, 1),-3233,40969,12002,4167,53904],
  [new Date(2011, 3, 1),-12418,41895,12128,4167,45772],
  [new Date(2011, 4, 1),-20930,42180,12223,4167,37640],
  [new Date(2011, 5, 1),-17628,42251,12350,4167,41140],
  [new Date(2011, 6, 1),-7837,42251,12413,4167,50994],
  [new Date(2011, 7, 1),-1676,42180,12572,4167,57242],
  [new Date(2011, 8, 1),-3382,42038,12698,4167,55520],
  [new Date(2011, 9, 1),-3780,41681,12698,4167,54766],
  [new Date(2011, 10, 1),7791,41040,12698,4167,65696],
  [new Date(2011, 11, 1),19271,40684,12667,4167,76788],
  [new Date(2012, 0, 1),15407,40541,12635,4167,72750],
  [new Date(2012, 1, 1),35650,41040,12572,4167,93428],
  [new Date(2012, 2, 1),71320,41824,12572,4167,129882],
  [new Date(2012, 3, 1),31624,42750,12572,4167,91112],
  [new Date(2012, 4, 1),24963,43961,12635,4167,85726],
  [new Date(2012, 5, 1),18246,44745,12698,4167,79856],
  [new Date(2012, 6, 1),10782,45671,12828,4167,73448],
  [new Date(2012, 7, 1),6185,47453,12952,4167,70756],
  [new Date(2012, 8, 1),15696,48878,13110,4167,81850],
  [new Date(2012, 9, 1),22886,49661,13268,4167,89982],
  [new Date(2012, 10, 1),24152,50445,13427,4167,92190],
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
