let RG = document.getElementById('rG');
let BY = document.getElementById('bY');
let Tot = document.getElementById('tot');
let Ban = document.getElementById('banner');
let Bio = document.getElementById('bio');
let Foo = document.getElementById('foo');
let pro = document.getElementById('projects');

let rgMode = function() {
    Ban.style.background="";
    Foo.style.background="";
    Bio.style.border="";
    pro.style.border="";
}

let byMode = function() {
    Ban.style.background="linear-gradient(-6deg, #df5d5d, #c50505, #fc9c9c, #c50505, #df5d5d)";
    Foo.style.background="linear-gradient(-4.5deg, #df5d5d, #c50505, #fc9c9c, #c50505, #df5d5d)";
    Bio.style.border="2px solid #c50505";
    pro.style.border="2px solid #c50505";
}

let totMode = function() {
    Ban.style.background="linear-gradient(-6deg, #696b6b, #797979, #9b9b9b, #797979, #696b6b)";
    Foo.style.background="linear-gradient(-4.5deg, #696b6b, #797979, #9b9b9b, #797979, #696b6b)";
    Bio.style.border="2px solid #9b9b9b";
    pro.style.border="2px solid #9b9b9b";
                
}

RG.addEventListener('click', rgMode);
BY.addEventListener('click', byMode);
Tot.addEventListener('click', totMode);

//I would prefer this to be an externally linked JS file,
//however it does not function when linked, so has been 
//put directly into the HTML. added as part of project
//solely for future reference.