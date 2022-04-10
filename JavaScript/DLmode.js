let Dark = document.getElementById('dark'), 
bod = document.getElementById('HomeBod'),
Light = document.getElementById('light');
let project = document.getElementById('projects'),
heading = document.getElementById('heading');

let dMode = function() {
bod.style.backgroundColor='#1d1d1d', bod.style.color='#e0d9d9';
heading.style.color='black';
}



let lMode = function() {
bod.style.backgroundColor='white';
bod.style.color='black';
proj.style.backgroundColor='black';
proj.style.color='white';
}

Dark.addEventListener('click', dMode)
Light.addEventListener('click', lMode)

//I would prefer this to be an externally linked JS file,
//however it does not function when linked, so has been 
//put directly into the HTML. added as part of project
//solely for future reference.