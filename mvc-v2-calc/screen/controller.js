/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */
var ScreenControllerInterface = {
    update: function(args){},
    _changeText : function (args) {},
    _changeStyle : function (args) {}
};

var ScreenController = Object.extend(Object, {
    constructor: function(model, view) {
        this._model = model;
        this._view = view;
    },
    update: function(args){
        if(args.hasOwnProperty('text')){
            this._changeText(args['text']);
        }else if(args.hasOwnProperty('style')){
            this._changeStyle(args['style']);
        }
    },
    get_text: function(){
        return this._model.getText();
    },
    _changeText: function(text){
        this._model.setText(text);
    },
    _changeStyle: function(style){
        this._model.setStyle(style);
    },
    get_view: function(){
        return this._view.get_view();
    }


}).implement(ScreenControllerInterface);