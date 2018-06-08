document.getElementById("form").addEventListener("click", function(){
    alert("FORM");
});

document.getElementById("div").addEventListener("click", function(){
    alert("DIV");
}, true);

document.getElementById("p").addEventListener("click", function(){
    alert("P");
});

document.getElementById("p").addEventListener("click", function(){
    alert("p1");
}, true);

document.getElementById("p").addEventListener("click", function(){
    alert("P2");
}, true);

document.getElementById("p").addEventListener("click", function(event){
    alert("P3");
}, false);

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

