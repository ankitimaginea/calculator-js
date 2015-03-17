/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
var OButtonModel = Object.extend(Object, {
    constructor: function() {
    	// TBD
    	this._label = ''
    	this.styleChanged = new Event(this);
    	this.labelChanged = new Event(this);

    	this._style = {
    	}
    },

    getLabel : function() {
        return this._label;
    },

    setLabel : function(label) {
    	this._label = label;
        this.labelChanged.notify();
    },

    setStyle : function(args) {
    	for(var key in args){
    		this._style[key] = args[key];
    	}	
        this.styleChanged.notify();
    },

}).implement(ButtonModelInterface);