/* 
 * Palash Lalwani
 */
"use strict";

var welcome = document.getElementById("welcome");
var hello = document.getElementById("hello");

function nameChanged() {
    var fname = document.forms["names"]["firstname"].value;
    var lname = document.forms["names"]["lastname"].value;
    var name;

    if(fname.length == 0) {
        if(lname.length == 0){
            name = "{name}";
        }
        else {
            name = lname;
        }
    }
    else {
        if(lname.length == 0) {
            name = fname;
        }
        else {
            name = fname + " " + lname;
        }
    }

    hello.innerHTML = "Hello, "+name+"!";
    return false;
}

function alignmentChanged() {
    
    var align = document.getElementById("align").value;

    if (align == "center") {
    document.getElementById("target").style.textAlign = "center";}
   else if (align=="right") {document.getElementById("target").style.textAlign = "right";} 
   else {document.getElementById("target").style.textAlign = "left";}
}



function sizeChanged() { 
   var fontvar = document.getElementById("range").value;
   var font = document.getElementById("target");
   var currentFont = font.style.fontSize.value;
   font.style.fontSize = fontvar+ "px";

}