/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
var NButtonModel = Object.extend(Object, {
    constructor: function() {
    	// TBD
    	this._label = ''
    	this.styleChanged = new Event(this);
    	this.labelChanged = new Event(this);

    	this._style = {
            // 'color': 'rgb(255, 255, 255)',
            // 'width': '40px',
            // 'height': '30px',
            // 'background-color': 'rgb(0, 0, 0)',
            // 'margin-left': '5px',
            // 'margin-top': '5px',
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