(function($){
    var keyFocusConf = {
        keyFocusClass : 'keyboard-focus',
        mouseFocusClass : 'mouse-focus'
    };
    $(document).ready(function(){
        $('body').trackFocus();
    });
    $.fn.trackFocus = function () {
        var that = $(this);
        that
            .bind('mousedown', function(e){
                that.removeClass(keyFocusConf.keyFocusClass);
                that.addClass(keyFocusConf.mouseFocusClass);
            })
            .bind('keydown', function(e){
                if(e.keyCode==9){
                    that.removeClass(keyFocusConf.mouseFocusClass);
                    that.addClass(keyFocusConf.keyFocusClass);
                }
            });
    };
})(jQuery);
