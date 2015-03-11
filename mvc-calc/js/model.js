/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
function CalculatorModel(expr) {
    this._expr = expr;
    this.exprChanged = new Event(this);
}

CalculatorModel.prototype = {
    getExpr : function () {
        return this._expr;
    },

    setExpr : function (expr) {
        this._expr = expr;
        this.exprChanged .notify({ 'expr' : expr });
    }
};