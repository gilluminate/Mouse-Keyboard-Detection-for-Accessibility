(($) => {
  const keyFocusClass = 'keyboard-focus';
  const mouseFocusClass = 'mouse-focus';
  $(() => {
    const bodyEl = $('body');
    bodyEl.addClass(mouseFocusClass);
    bodyEl.on('mousedown', () => {
      bodyEl.removeClass(keyFocusClass);
      bodyEl.addClass(mouseFocusClass);
    });
    bodyEl.on('keydown', (e: JQueryKeyEventObject) => {
      const ignoreArrowKeys =
        e.target.nodeName === 'INPUT' ||
        e.target.nodeName === 'TEXTAREA' ||
        e.target.nodeName === 'CONTENTEDITABLE';
      // Watch for Tab key or any of the arrow keys
      if (!e.key) {
          return;
      }
      if (
        e.key === 'Tab' ||
        (e.key.indexOf('Arrow') === 0 && !ignoreArrowKeys)
      ) {
        bodyEl.removeClass(mouseFocusClass);
        bodyEl.addClass(keyFocusClass);
      }
    });
  });
})(jQuery);
