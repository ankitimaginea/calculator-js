var CalculatorViewInterface = {
    _display_change : function (dispay_val) {}
}
var CalculatorView = Object.extend(Object, {
    constructor: function(model, parent_ele) {
        this._model = model;
        this._housing_unit = this._render();
        this._setStyle();
        
        this._model.labelChanged.attach(function (sender, args) {
            _that._display_change();
        });

        this._model.styleChanged.attach(function (sender, args) {
            _that._setStyle();
        });
    },

    _render: function(){
        // render housing
        var housing_unit = document.createElement('div');
        housing_unit.setAttribute('id', 'calculator') ;
        
        // render_screen
        this._render_screen(housing_unit);

        // render buttons
        this._render_btn(housing_unit);
        return housing_unit;
    },
    _render_screen: function(housing_unit){
        var screen_pad = document.createElement('div');
        screen_pad.setAttribute('class', 'screen_pad') ;

        var scrn_view = this._model._screen.get_view()
        screen_pad.appendChild(scrn_view);


        var btn = this._model._clear_btn;
        btn.update({
            'style':{
                'float': 'none',
            }
        });
        screen_pad.appendChild(btn.get_view());

        housing_unit.appendChild(screen_pad);
    },
    _render_btn: function(housing_unit){
        var num_unit = document.createElement('div');
        num_unit.setAttribute('class', 'num_unit') ;

        var label_order = [9, 8, 7, 6, 5, 4, 3, 2, 1, '.', 0, '='];
        var btn_arr = this._model._nbtn_arr;
        for(var i in label_order){
            for(var j in btn_arr){
                if(label_order[i] ===  btn_arr[j].get_label()){
                    var btn = btn_arr[j];
                    break;
                }
            }
            switch(label_order[i]) {
                case '.':
                    var btn = this._model._eval_btn;
                    break;
                case '=':
                    var btn = this._model._dec_btn;
                    break;
                default:
                    break;
            }

            var btn_view = btn.get_view();
            num_unit.appendChild(btn_view);

        }
        housing_unit.appendChild(num_unit);

        var operator_unit = document.createElement('div');
        operator_unit.setAttribute('class', 'operator_unit') ;

        for(var j in this._model._obtn_arr){
            var btn = this._model._obtn_arr[j];
            var btn_view = btn.get_view();
            operator_unit.appendChild(btn_view);
        }
        housing_unit.appendChild(operator_unit);
    },

    _setStyle: function(){
        for (var prop in this._model._style){
            this._housing_unit.style[prop] = this._model._style[prop] ;
        }
    },
    _display_change: function(){
        this._housing_unit.innerHTML = this._model._label;
    },
    get_view: function(){
        return this._housing_unit;
    }

}).implement(CalculatorViewInterface);