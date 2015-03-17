var ButtonViewInterface = {
    _display_change : function (dispay_val) {}
}
var ButtonView = Object.extend(Object, {
    constructor: function(model) {
        this._model = model;
        this._print_unit = this._render_screen();
        this._setStyle();

        var _that = this;
        this.Pressed = new Event(this);
        this._print_unit.onclick = function(e){
            _that.Pressed.notify({ e: e });
        };
        
        this._model.labelChanged.attach(function (sender, args) {
            _that._display_change();
        });

        this._model.styleChanged.attach(function (sender, args) {
            _that._setStyle();
        });
    },

    _render_screen: function(){
        var print_unit = document.createElement('button');
        print_unit.setAttribute('class', 'button') ;
        return print_unit;
    },
    _setStyle: function(){
        for (var prop in this._model._style){
            this._print_unit.style[prop] = this._model._style[prop] ;
        }
    },
    _display_change: function(){
        this._print_unit.innerHTML = this._model._label;
    },

    _get_view: function(){
        return this._print_unit;
    }

}).implement(ButtonViewInterface);