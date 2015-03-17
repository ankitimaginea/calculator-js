var NButton = Object.extend(Object, {
    constructor: function(parent_ele) {
        this._model = new NButtonModel();
		this._view = new NButtonView(this._model);
		this._controller = new NButtonController(this._model, this._view);
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