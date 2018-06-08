document.getElementById("form").addEventListener("click", function(){
    alert("FORM");
});

document.getElementById("div").addEventListener("click", function(){
    alert("DIV");
});

document.getElementById("p").addEventListener("click", function(){
    alert("P");
});



//Drugi primer

document.getElementById("form1").addEventListener("click", function(){
    alert("CAPTURING -> FORM");
}, true);

document.getElementById("div1").addEventListener("click", function(){
    alert("CAPTURING -> DIV");
}, true);

document.getElementById("p1").addEventListener("click", function(){
    alert("CAPTURING -> P");
}, true);

document.getElementById("form1").addEventListener("click", function(){
    alert("BUBBLING -> FORM");
});

document.getElementById("div1").addEventListener("click", function(){
    alert("BUBBLING ->  DIV");
});

document.getElementById("p1").addEventListener("click", function(){
    alert("BUBBLING -> P");
});

