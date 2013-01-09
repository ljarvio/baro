	function transpose(vw, years) {
		// input: DataView, output: transposed DataView
		// initialize transposed data table: month | 2006 | 2007 | (...)
		var tdata = new google.visualization.DataTable();
		tdata.addColumn('string', 'month');
		for (var i = 0; i < years.length; i++) {tdata.addColumn('number', years[i]);}
		for (var i = 2; i < vw.getNumberOfColumns(); i++) {tdata.addRow()}; // add empty rows
		
		// manual transposing: (i,j+2) -> (j,i+1)  
		for (var c = 0; c < vw.getNumberOfColumns() - 2; c++) { 
			for (var r = 0; r < vw.getNumberOfRows(); r++) { 
				tdata.setValue(c, 0, vw.getColumnLabel(c + 2)); // 'jan', 'feb', ...
				tdata.setValue(c, r + 1, vw.getValue(r, c + 2)); // data
			} 
		} 
		return (new google.visualization.DataView(tdata));
	}