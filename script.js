var character = 
document.getElementById("character");
function jump(){
    if(character.classList != "animation"){
        character.classList.add("animation");
}
    setTimeout(function(){
        character.classList.remove("animation");
    },500)
}

var chekDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    var blockLeft =  
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 &&
        characterTop>=130){
            block.style.animation = "none";
            block.style.dispray = "none";
        alert("u lose.");
    }
},10);
