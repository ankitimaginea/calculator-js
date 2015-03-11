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
    this._model.exprChanged.attach(function (e) {
        _this.updateScreen(e);
    });

    // attach listeners to HTML controls
    this._elements.numPad.onclick = function(e){
        _this.numPadPressed.notify({ key: e });
    };
    this._elements.opPad.onclick = function(e){
        _this.opPadPressed.notify({ key: e });
    };
    this._elements.clearPad.onclick = function(e){
        _this.clearPressed.notify({ key: e });
    };
    this._elements.evalPad.onclick = function(e){
        _this.evalPressed.notify({ key: e });
    };
}

CalculatorView.prototype = {
    show : function (e) {
        this.updateScreen(e);
    },

    updateScreen: function(e){
        alert(e);
    },

    // rebuildList : function () {
    //     var list, items, key;

    //     list = this._elements.list;
    //     list.html('');

    //     items = this._model.getItems();
    //     for (key in items) {
    //         if (items.hasOwnProperty(key)) {
    //             list.append($('<option>' + items[key] + '</option>'));
    //         }
    //     }
    //     this._model.setSelectedIndex(-1);
    // }
};