


var butto = document.querySelectorAll("button");

for (i=0; i< butto.length; i++ ){
    document.querySelectorAll("button")[i].addEventListener('click',buttonpress);
}
function buttonpress() {

        var buttonss = this.innerHTML;
        alarting(buttonss);
        animate(buttonss);
}


document.addEventListener('keypress',keyboard)

function keyboard(event) {
    alarting(event.key);
    animate(event.key);
}



function alarting (buttonSelect){

    switch (buttonSelect) {
       case 'w':
           var crash = new Audio("sounds/tom-1.mp3");
           crash.play();
           break;
       case "a":
           var kick = new Audio("sounds/tom-2.mp3");
           kick.play();
           break;
       case "s":
           var snare = new Audio("sounds/tom-3.mp3");
           snare.play();
           break;
       case "d":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
       case "j":
           var tom2 = new Audio("sounds/snare.mp3");
           tom2.play()
           break;
       case "k":
           var tom3 = new Audio("sounds/crash.mp3");
           tom3.play();
           break;
       case "l":
           var tom4 = new Audio("sounds/kick-bass.mp3");
           tom4.play();
           break;
       default:
           alert("no sound detected");

   }
}

function animate(evnt){
  var anikey = document.querySelector("." + evnt);
  anikey.classList.add('pressed');

  setTimeout(function () {
   anikey.classList.remove("pressed");
  },200)

}