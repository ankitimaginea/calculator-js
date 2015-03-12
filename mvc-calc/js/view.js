function CalculatorView(model, elements) {
    this._model = model;
    this._elements = elements;

    // this.listModified = new Event(this);
    // this.addButtonClicked = new Event(this);
    // this.delButtonClicked = new Event(this);

    this.numPadPressed = new Event(this);
    this.opPadPressed = new Event(this);
    this.clearPressed = new Event(this);
    this.evalPressed = new Event(this);

    var _this = this;

    // attach model listeners
    this._model.exprChanged.attach(function (sender, args) {
        _this.updateScreen(args['expr']);
    });

    // attach listeners to HTML controls
    this._elements.numPad.onclick = function(e){
        _this.numPadPressed.notify({ e: e });
    };
    this._elements.opPad.onclick = function(e){
        _this.opPadPressed.notify({ e: e });
    };
    this._elements.clearPad.onclick = function(e){
        _this.clearPressed.notify();
    };
    this._elements.evalPad.onclick = function(e){
        _this.evalPressed.notify();
    };
}

CalculatorView.prototype = {
    show : function (expr) {
        this.updateScreen(expr);
    },

    updateScreen: function(expr){
        this._elements.screen.innerHTML = expr;
    },
};