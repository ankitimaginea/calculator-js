/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
function CalcController(model, view) {
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.numPadPressed.attach = function(){
        // Controller function
        _this.addNumber(expr);

    };
    this._view.opPadPressed.attach = function(){
        // Controller function
        _this.addOperator(expr);
    };
    this._view.clearPressed.attach = function(){
        // Controller function
        _this.clearScreen(expr);
    };
    this._view.evalPressed.attach = function(){
        // Controller function
        _this.evalExpr(expr);
    };
}

CalcController.prototype = {

    updateExpr: function(expr){
        this._model.setExpr(result);
    };

    addNumber: function(str){
        this.updateExpr(result);
    };
    addOperator: function(str){
        this.updateExpr(result);
    };
    clearScreen: function(str){
        this.updateExpr(result);
    };

    evalExpr: function(expr){
        // evaluator logic
        // var result = some_func(expr);
        this.updateExpr(result);
    }
};