var init_calc = function(){
	var model = new CalculatorModel('');
	var view = new CalculatorView(model, {
		'numPad' : 'numPad',
		'opPad' : 'opPad',
		'clearPad' : 'clearPad',
		'evalPad' : 'evalPad'
	});
	var controller = new CalcController(model, view);
        // view = new ListView(model, {
        //     'list' : $('#list'), 
        //     'addButton' : $('#plusBtn'), 
        //     'delButton' : $('#minusBtn')
        // }),
        // controller = new ListController(model, view);
    
    view.show();
}