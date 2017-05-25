/**
 * Created by Jonathan Senecal on 2017-05-24.
 */
$(function(){
    console.log("typed.js");
    var selector = document.getElementById('typed-strings');
    console.log(selector);
    $(".typedjs").typed({
        stringsElement: selector,
        typeSpeed: 40,
        cursorChar: "_",
        loop: true
    });
});