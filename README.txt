Packet Name:- Page Preview

Current Problem: To peek at any point on a given web page we have to go to that position, which could be not that simple in the case of long documents

Proposed Solution: A peek box is revealed in case of hover on the scrollbar. The box contains the preview of the page at that scrollHeight

Functions of the packet: It has 2 basic functions
1. How the page preview at the corresponding scroll height.
2. Show and hide the box at all other times.

Content of the zip: This is a code packet containing two files
1. previewscript.js: Containing the JavaScript.
2. previewstyle.css: Containing the CSS.
3. demo.HTML: A demo of what the box would work without further customization.
4. README

How to Use: It involves just 2 steps (look at the demo.HTML first and hover over the scrollbar)
1. Download and add the two files (previewscript.js, previewstyle.css) to the same folder as index.HTML of your file
2. Add the given lines to the bottom of body tag

<script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script src="previewscript.js"></script>

Made by: Aishwarya Agrawal