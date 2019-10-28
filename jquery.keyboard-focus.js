(function ($) {
    var keyFocusClass = 'keyboard-focus';
    var mouseFocusClass = 'mouse-focus';
    $(function () {
        var bodyEl = $('body');
        bodyEl.addClass(mouseFocusClass);
        bodyEl.on('mousedown', function () {
            bodyEl.removeClass(keyFocusClass);
            bodyEl.addClass(mouseFocusClass);
        });
        bodyEl.on('keydown', function (e) {
            var ignoreArrowKeys = e.target.nodeName === 'INPUT' ||
                e.target.nodeName === 'TEXTAREA' ||
                e.target.nodeName === 'CONTENTEDITABLE';
            // Watch for Tab key or any of the arrow keys
            if (!e.key) {
                return;
            }
            if (e.key === 'Tab' ||
                (e.key.indexOf('Arrow') === 0 && !ignoreArrowKeys)) {
                bodyEl.removeClass(mouseFocusClass);
                bodyEl.addClass(keyFocusClass);
            }
        });
    });
})(jQuery);
