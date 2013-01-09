function getStyle(elem, cssprop, cssprop2){
	 // IE
	 if (elem.currentStyle) {
	   return elem.currentStyle[cssprop];
	 // other browsers
	 } else if (document.defaultView &&
					   document.defaultView.getComputedStyle) {
	   return colorToHex(document.defaultView.getComputedStyle(elem,
	null).getPropertyValue(cssprop2));
	 // fallback
	 } else {
	   return null;
	 }
}

function colorToHex(color) {
		if (color.substr(0, 1) === '#') {return color;} // already hex

		var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
		
		var red = parseInt(digits[2]);
		var green = parseInt(digits[3]);
		var blue = parseInt(digits[4]);
		
		var rgb = blue | (green << 8) | (red << 16);
		return digits[1] + '#' + rgb.toString(16);
};
