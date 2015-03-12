var init_calc = function(){
	var model = new CalculatorModel('');
	var view = new CalculatorView(model, {
		'numPad' : document.getElementById('num_pad'),
		'opPad' : document.getElementById('op_pad'),
		'clearPad' : document.getElementById('clear'),
		'evalPad' : document.getElementById('eval'),
		'screen': document.getElementById('screen'),
	});
	var controller = new CalcController(model, view);
    view.show('');
}