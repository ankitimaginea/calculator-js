var OButton = Object.extend(Object, {
    constructor: function(parent_ele) {
        this._model = new OButtonModel();
		this._view = new OButtonView(this._model);
		this._controller = new OButtonController(this._model, this._view);
    },
    update: function(args){
    	this._controller.update(args);
    },
    changeClickFunc: function(func){
    	this._controller.setPressedFunc(func);
    },
    get_view: function(){
    	return this._controller.get_view();
    },
    get_label: function(){
        return this._controller.get_label();
    }
})