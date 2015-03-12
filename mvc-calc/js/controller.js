/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
function CalcController(model, view) {
    this._model = model;
    this._view = view;
    this._evaluator = new Evaluator();

    var _this = this;

    this._view.numPadPressed.attach(function(sender, args){
        _this.addNumber(args['e'].target.innerHTML);

    });

    this._view.opPadPressed.attach(function(sender, args){
        _this.addOperator(args['e'].target.innerHTML);
    });

    this._view.clearPressed.attach(function(sender, args){
        _this.clearScreen();
    });

    this._view.evalPressed.attach(function(sender, args){
        _this.evalExpr();
    });
}

CalcController.prototype = {

    addNumber: function(number){
        var result = this._check_add_number(number)
        this._model.setExpr(result);
    },
    addOperator: function(operator){
        var result = this._check_add_operator(operator);
        this._model.setExpr(result);
    },
    clearScreen: function(str){
        this._model.setExpr('');
    },
    evalExpr: function(){
        var result = this._evaluator.eval_expr(this._model.getExpr());
        this._model.setExpr(result);
    },

    /*Utility Functions*/

    _check_add_number: function(number){
        var expr = this._model.getExpr();
        if(number === '.'){
            var i = expr.length-1;
            var last_char = expr.charAt( i );

            while(operators.indexOf(last_char) <= -1 && i >= 0){
                if(last_char == '.'){
                    alert('operation not allowed');
                    return expr;
                }
                i -= 1;
                var last_char = expr.charAt( i );
            }
            return expr + '.';
        }
        return expr + number;
    },

    _check_add_operator: function(operator){
        // if last string is not an operator or any operator other than minus is used
        // to start an expression
        var expr = this._model.getExpr();
        var length = expr.length;
        if(length == 0 && operator !== '-'){
            return ''
        }
        if(this._evaluator.operators.indexOf( expr.charAt(length-1) ) > -1){
            return expr;
        }
        return expr + operator;
    },

};