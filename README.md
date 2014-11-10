Mouse/Keyboard Detection
========================

Detects keyboard and mouse events to add a classname to the &lt;body> tag. Styles can vary for :focus depending on whether or not the classnames are present.

This can allow for more visible and accessible styles for keyboard users while maintaining a nice clean look and feel for your typical mouse user.

Requires jQuery.

Setup
-----

include in your html
`<script src="jquery.keyboard-focus.js">`

which will automatically add `.keyboard-focus` or `.mouse-focus` classnames to the body tag depending which method of navigation your user is currently using (will switch as your user switches).

include in your css
`.mouse-focus :focus { outline: none; }`

Feel free to add specific `.keyboard-focus` or `.mouse-focus` usage in your css depending which type of user you want to style for.
