/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
var ButtonModelInterface = {
    getLabel : function (args) {},
    setLabel : function (args) {},
    setStyle : function (args) {},

}
var ButtonModel = Object.extend(Object, {
    constructor: function() {
    	// TBD
    	this._label = ''
    	this.styleChanged = new Event(this);
    	this.labelChanged = new Event(this);

    	this._style = {
    		// 'color': '#fff',
    		// 'background-color': '#000',
    		// 'width': '20px',
    		// 'height': '20px'
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