/*Script goes here */
// global scope
//var sukh ="Sukh"; 0 eating my zombie
// IIFE - Immediately Invoked Function Expression
(function(){


    "use strict";
    // code here

    console.log("App started");

    /*
    // declare named function
    function writeToFirstParagraph()  {
      // debugging only
       console.log("Executing the writeToParagraph");
       //create an reference to p element with an id of the first paragraph
        var firstParagraph = document.getElementById("firstParagraph");
        firstParagraph.textContent = "It's alive!!!";
       // console.log(sukh);

    }
    */ 

    // declare a variable that point to anonomaus function
    var writeToFirstParagraph = function()
    {
        // debugging only
       console.log("Executing the writeToParagraph");
       //create an reference to p element with an id of the first paragraph
        var firstPTag = document.getElementById("firstParagraph");
        firstPTag.textContent = "It's alive!!!";
       // console.log(sukh);
    }    

   // var alias = writeToFirstParagraph;
    // execute function
    writeToFirstParagraph();

    console.log(firstPTag);
})();