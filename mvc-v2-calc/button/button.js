var CButton = Object.extend(Object, {
    constructor: function() {
        this._model = new ButtonModel();
		this._view = new ButtonView(this._model);
		this._controller = new ButtonController(this._model, this._view);
    },
    update: function(args){
    	this._controller.update(args);
    },
    changeClickFunc: function(func){
    	this._controller.setPressedFunc(func);
    },
    get_view: function(){
        return this._controller.get_view()
    },
    get_label: function(){
        return this._controller.get_label()
    }
})