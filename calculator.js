window.onload = function(){

	function add(arg1, arg2){
		return arg1 + arg2 ;
	}

	function minus(arg1, arg2){
		return arg1 - arg2 ;
	}

	function multiply(arg1, arg2){
		return arg1 * arg2 ;
	}

	function divide(arg1, arg2){
		try{
			return arg1/arg2;
		}
		catch(e){
			alert(e);
		}
	}
/*********** Evaluator Logic ************************/
	var operators_precedence = {
		'-' : {'priority': 1, 'func': minus},
		'+' : {'priority': 1, 'func': add},
		'/' : {'priority': 2, 'func': divide},
		'*' : {'priority': 2, 'func': multiply},
		
	};

	var operators = Object.keys(operators_precedence);

	function parser(expr){
		var tokens = [];
		var symbol = ''
		for(var i in expr){
			var atom = expr[i]
			if(operators_precedence.hasOwnProperty(atom)){
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
	}

	function expr_to_postfix(tokens){
		var opstack = [];
		var output = [];

		for(var i in tokens){
			var token = tokens[i];
			if(operators.indexOf(token) > -1){
				var length = opstack.length;
				while( length && operators_precedence[opstack[length-1]].priority >= operators_precedence[token].priority){
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
	}

	function eval_expr(expr){
		var tokens = parser(expr);
		var postfix_expr = expr_to_postfix(tokens);

		var operandStack = [];

		for(var i in postfix_expr){
			var token = postfix_expr[i];
			if(operators.indexOf(token) > -1){
				operand2 = operandStack.pop();
				operand1 = operandStack.pop();
				var func = operators_precedence[token].func;
				var result = func(operand1, operand2);
				operandStack.push(result)
			}else{
				operandStack.push(token);
			}
		}

    	return operandStack.pop() ;
	}

/*********************************************************************/


}