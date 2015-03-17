/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
var CalculatorControllerInterface = {
    _changeStyle : function (args) {}
};

var CalculatorController = Object.extend(Object, {
    constructor: function(model, view) {
        this._model = model;
        this._view = view;

        this._evaluator = new Evaluator();

        // attach screen logic
        // attach button logic
        this._nbtn_func_init();
        this._obtn_func_init();
        this._eval_btn_func_init();
        this._clear_btn_func_init();
        this._dec_btn_func_init();
        // attach eval logic
    },

    _changeStyle: function(style){
        this._model.setStyle(style);
    },
    _cbtn_func_init: function(){

    },
    _nbtn_func_init: function(){
        var btn_arr = this._model._nbtn_arr;
        var that = this;
        for(var j in btn_arr){
            var btn = btn_arr[j];
            btn.changeClickFunc(function(){
                var expr = that._check_add_number(this.get_label());
                that._update_screen(expr);
            })
        }
    },
    _obtn_func_init: function(){
        var btn_arr = this._model._obtn_arr;
        var that = this;
        for(var j in btn_arr){
            var btn = btn_arr[j];
            btn.changeClickFunc(function(){
                var expr = that._check_add_operator(this.get_label());
                that._update_screen(expr);
            })
        }
    },
    _eval_btn_func_init: function(){
        var that = this;
        this._model._eval_btn.changeClickFunc(function(){
            var expr = that._get_screen_text();
            var result = that._evaluator.eval_expr(expr);
            that._update_screen(result);
        });
    },
    _clear_btn_func_init: function(){
        var that = this;
        this._model._clear_btn.changeClickFunc(function(){
            that._update_screen('');
        });
    },

    _dec_btn_func_init: function(){
        var that = this;
        this._model._dec_btn.changeClickFunc(function(){
            var expr = that._check_add_number(this.get_label());
            that._update_screen(expr);
        });
    },

    _get_screen_text: function(){
        return this._model._screen.get_text().toString();
    },
    _update_screen: function(text){
        this._model._screen.update({'text': text});
    },
    get_view: function(){
        return this._view.get_view()
    },

    /*Utility Functions*/

    _check_add_number: function(number){
        var expr = this._get_screen_text();
        if(number === '.'){
            var i = expr.length-1;
            var last_char = expr.charAt( i );

            while(this._evaluator.operators.indexOf(last_char) <= -1 && i >= 0){
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
        var expr = this._get_screen_text();
        var length = expr.length;
        if(length == 0 && operator !== '-'){
            return ''
        }
        if(this._evaluator.operators.indexOf( expr.charAt(length-1) ) > -1){
            return expr;
        }
        return expr + operator;
    },


}).implement(CalculatorControllerInterface);