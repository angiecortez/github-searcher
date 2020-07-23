import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	vertical-align: baseline;
	background: transparent;
	font-family:  sans-serif;
}
*,
*:before,
*:after {
	-ms-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

b {
	font-weight: 500;
}

body,
html {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	vertical-align: baseline;
	background: transparent;
	font-family: sans-serif;
	font-weight: 500;
	width: 100%;
	height: auto;
	font-size: 16px;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;
}

body {
	overflow-x: hidden;
	font-weight: normal;
	font-size: 16px;
	margin: 0;
	padding: 0;
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
	line-height: 1.5;
	color: #24292e;
	background-color: #fff;
} 

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input[type="number"] {
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button{
    display: none;
  }
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
`;

export default Global;
