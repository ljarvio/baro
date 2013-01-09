// using jp.js
var data = [{year:2010, month: 'jan', order: 1, value: 1},
			{year:2010, month: 'feb', order: 2, value: 2},
			{year:2011, month: 'jan', order: 1, value: 11},
			{year:2011, month: 'feb', order: 2, value: 22}]
var pdata = pivot(data, ['order', 'month'], ['year'], {})
console.log(JSON.stringify(pdata))