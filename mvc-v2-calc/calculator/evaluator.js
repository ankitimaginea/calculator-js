var SimpleMath = function(){};
SimpleMath.add = function(arg1, arg2){
	return arg1 + arg2 ;
}
SimpleMath.minus = function(arg1, arg2){
	return arg1 - arg2 ;
}
SimpleMath.multiply = function(arg1, arg2){
	return arg1 * arg2 ;
}
SimpleMath.divide = function(arg1, arg2){
	try{
		return arg1/arg2;
	}
	catch(e){
		alert(e);
	}
}

var Evaluator = function(){
	this.operators_precedence = {
		'-' : {'priority': 1, 'func': SimpleMath.minus},
		'+' : {'priority': 1, 'func': SimpleMath.add},
		'/' : {'priority': 2, 'func': SimpleMath.divide},
		'x' : {'priority': 2, 'func': SimpleMath.multiply},
	};

	this.operators = Object.keys(this.operators_precedence);
};


var Evaluator = Object.extend(Object, {
    constructor: function(parent_ele) {
    	this.operators_precedence = {
			'-' : {'priority': 1, 'func': SimpleMath.minus},
			'+' : {'priority': 1, 'func': SimpleMath.add},
			'/' : {'priority': 2, 'func': SimpleMath.divide},
			'x' : {'priority': 2, 'func': SimpleMath.multiply},
		};

		this.operators = Object.keys(this.operators_precedence);
    },

    _parser: function(expr){
		var tokens = [];
		var symbol = ''
		for(var i in expr){
			var atom = expr[i]
			if(this.operators_precedence.hasOwnProperty(atom)){
				if(symbol){
					symbol = parseFloat(symbol)
					tokens.push(symbol);
					symbol = '';
				}
				tokens.push(atom);
			}else{
				symbol+=atom;
			}
		}
		if(symbol){
			symbol = parseFloat(symbol);
			tokens.push(symbol);
		}
		return tokens;

	},

	_expr_to_postfix: function(tokens){
		var opstack = [];
		var output = [];

		for(var i in tokens){
			var token = tokens[i];
			if(this.operators.indexOf(token) > -1){
				var length = opstack.length;
				while( length && this.operators_precedence[opstack[length-1]].priority 
					>= this.operators_precedence[token].priority){
					output.push( opstack.pop() );
					length = opstack.length;
				}
				opstack.push(token);
			}else{
				output.push(token);
			}
		}

		while (opstack.length){
			output.push(opstack.pop());
		}
        
		return output;
	},

	eval_expr: function(expr){
		if(expr === undefined){
			return '';
		}
		if(expr[0] === '-'){
			expr = '0'+expr;
		}
		var tokens = this._parser(expr);
		var postfix_expr = this._expr_to_postfix(tokens);

		var operandStack = [];

		for(var i in postfix_expr){
			var token = postfix_expr[i];
			if(this.operators.indexOf(token) > -1){
				operand2 = operandStack.pop();
				operand1 = operandStack.pop();
				var func = this.operators_precedence[token].func;
				var result = func(operand1, operand2);
				operandStack.push(result)
			}else{
				operandStack.push(token);
			}
		}

		var eval_res = operandStack.pop();

		if (eval_res !== parseInt(eval_res, 10)){
			eval_res = eval_res.toFixed(2);
		}
    	return eval_res;
	}
});

