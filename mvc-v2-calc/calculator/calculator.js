function InitCalculator(parent_ele){
	var calc = new Calculator();
	parent_ele.appendChild(calc.get_view());
}

var Calculator = Object.extend(Object, {
    constructor: function() {
    	this._model = new CalculatorModel();
		this._view = new CalculatorView(this._model);
		this._controller = new CalculatorController(this._model, this._view);
    },
    get_view: function(){
    	return this._controller.get_view();
    }
})