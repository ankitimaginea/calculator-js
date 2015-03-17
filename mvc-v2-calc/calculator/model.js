/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */
var CalculatorModelInterface = {
    setStyle : function (args) {},

}
var CalculatorModel = Object.extend(Object, {
    constructor: function() {
    	// TBD
    	this._label = ''
    	this.styleChanged = new Event(this);
    	this.labelChanged = new Event(this);

    	this._style = {
            // 'color': 'rgb(255, 255, 255)',
            // 'background-color': 'rgb(77, 192, 175)',
            // 'height': '400px',
            // 'width': '320px',
    	},
        this._nbtn_arr = this.create_nbtns();
        this._obtn_arr = this.create_obtns();
        
        this._eval_btn = this.create_btn('=');
        this._clear_btn = this.create_btn('C');
        this._dec_btn = this.create_btn('.');

        this._screen = this.create_screen();
    },

    setStyle : function(args) {
    	for(var key in args){
    		this._style[key] = args[key];
    	}	
        this.styleChanged.notify();
    },


    create_screen: function(){
        var scrn = new Screen();
        return scrn
    },

    create_nbtns: function(){
        var nbtn_arr = []
        for(var i=0; i<10; i++){
            var btn = new NButton();
            btn.update({'text': i})
            nbtn_arr.push(btn);
        }
        return nbtn_arr;
    },

    create_obtns: function(){
        operators_arr = ['+', '-', '/', 'x'];
        var obtn_arr = [];

        for(var i in operators_arr){
            var btn = new OButton();
            btn.update({'text': operators_arr[i]})
            obtn_arr.push(btn)
        }
        return obtn_arr;
    },
    create_btn: function(label){
        var btn = new CButton();
        btn.update({'text': label});
        return btn;
    },

}).implement(CalculatorModelInterface);