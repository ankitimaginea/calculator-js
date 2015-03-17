var ScreenViewInterface = {
    _display_change : function (dispay_val) {}
}
var ScreenView = Object.extend(Object, {
    constructor: function(model) {
        this._model = model;
        this._print_unit = this._render_screen();
        this._setStyle();

        var _that = this;
        this._model.textChanged.attach(function (sender, args) {
            _that._display_change();
        });

        this._model.styleChanged.attach(function (sender, args) {
            _that._setStyle();
        });
    },

    _render_screen: function(){
        var print_unit = document.createElement('div');
        print_unit.setAttribute('id', 'screen') ;
        return print_unit;
    },
    _setStyle: function(){
        for (var prop in this._model._style){
            this._print_unit.style[prop] = this._model._style[prop] ;
        }
    },

    _display_change: function(){
        this._print_unit.innerHTML = this._model._text;
    },
    get_view: function(){
        return this._print_unit;
    }

}).implement(ScreenViewInterface);