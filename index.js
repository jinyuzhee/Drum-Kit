//detectingButtonPressed
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//detectingKeyboardPressed
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
} )

function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var crash = new Audio("sounds/kick-bass.mp3");
      crash.play();
      break;
    case "s":
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      break;
    case "d":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      break;
    case "j":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;
    case "k":
      var crash = new Audio("sounds/tom-3.mp3");
      crash.play();
      break;
    case "l":
      var crash = new Audio("sounds/tom-4.mp3");
      crash.play();
      break;

    default:console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function(){
      document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100 );
}
