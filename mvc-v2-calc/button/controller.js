/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
var ButtonControllerInterface = {
    update: function(args){},
    _changeLabel : function (args) {},
    _changeStyle : function (args) {}
};

var ButtonController = Object.extend(Object, {
    constructor: function(model, view) {
        this._model = model;
        this._view = view;
        var _that = this;

        this._view.Pressed.attach(function(sender, args){
            _that.pressedFunc(args);
        });
    },
    update: function(args){
        if(args.hasOwnProperty('text')){
            this._changeLabel(args['text']);
        }else if(args.hasOwnProperty('style')){
            this._changeStyle(args['style']);
        }
    },

    _changeLabel: function(text){
        this._model.setLabel(text);
    },
    _changeStyle: function(style){
        this._model.setStyle(style);
    },
    pressedFunc: function(args){
        console.log('pressed');
    },
    setPressedFunc: function(func){
        this.pressedFunc = func;
    },
    get_view: function(){
        return this._view._get_view();
    },
    get_label: function(){
        return this._model.getLabel();
    }

}).implement(ButtonControllerInterface);