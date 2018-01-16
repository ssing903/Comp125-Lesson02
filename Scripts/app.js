/*Script goes here */
// IIFE - Immediately Invoked Function Expression
(function(){


    "use strict";
    // code here

    console.log("App started");

    //create an reference to p element with an id of the first paragraph
    var firstParagraph = document.getElementById("firstParagraph");
    firstParagraph.textContent = "It's alive!!!";
})();