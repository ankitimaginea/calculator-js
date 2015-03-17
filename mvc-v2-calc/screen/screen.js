var Screen = Object.extend(Object, {
    constructor: function(parent_ele) {
        this._model = new ScreenModel();
		this._view = new ScreenView(this._model);
		this._controller = new ScreenController(this._model, this._view);
    },

    update: function(args){
    	this._controller.update(args);
    },
    get_view: function(){
    	return this._controller.get_view();
    },
    get_text: function(){
        return this._controller.get_text();
    },
})