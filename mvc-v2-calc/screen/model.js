/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
var ScreenModelInterface = {
    getText : function (args) {},
    setText : function (args) {},

}
var ScreenModel = Object.extend(Object, {
    constructor: function(args) {
    	// TBD
    	this._text = ''
    	this.styleChanged = new Event(this);
    	this.textChanged = new Event(this);

    	this._style = {
    		// 'color': '#f00',
    		// 'background-color': '#0f0',
    		// 'width': '320px',
    		// 'height': '40px'
    	}
    },

    getText : function(key) {
        return this._text;
    },

    setText : function(text) {
    	this._text = text;
        this.textChanged.notify();
    },

    setStyle : function(args) {
    	for(var key in args){
    		this._style[key] = args[key];
    	}	
        this.styleChanged.notify();
    },

}).implement(ScreenModelInterface);