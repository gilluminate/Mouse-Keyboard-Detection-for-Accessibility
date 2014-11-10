Mouse/Keyboard Detection
========================

Detects keyboard and mouse events to add a classname to the &lt;body> tag. Styles can vary for :focus depending on whether or not the classnames are present.

Requires jQuery.

Setup
-----

include in your html
`<script src="jquery.keyboard-focus.js">`

include in your css
`.mouse-focus :focus {
	outline: none;
}`

Feel free to add specific `.keyboard-focus` or `.mouse-focus` classes depending which type of user you want to style for.
