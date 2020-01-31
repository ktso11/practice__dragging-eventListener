console.log("hello world");

$(document).ready(function(){

  var widget = document.getElementById('widget');
  var click = 0;
  var firstClick = 0;
  var secondClick = 0;

  //append numbered buttons
  for(i=1; i<=10; i++ ) {
    var btn = document.createElement("BUTTON")
    btn.innerHTML = i;
    btn.setAttribute('id', i);
    btn.setAttribute('class', "numberBtn");
    btn.setAttribute('draggable', "true");
    widget.appendChild(btn)
  }

  //get element by class to generate arr
  var numBtn = document.getElementsByClassName('numberBtn')

  //add listener to each button
  for(i=0; i<numBtn.length; i++) {
    numBtn[i].addEventListener("click", selectGroup)
    numBtn[i].addEventListener("dragstart", btnClicked)
    numBtn[i].addEventListener("dragover", btnClicked)
  } 

  //on click, assign class name to make it blue
  //if class name exist, remove it
  function btnClicked() {
    if(this.classList.contains('blue')){
      this.classList.remove('blue')
      click = click-1
    } else {
      this.classList.add('blue')
      click = click+1
    }
  }

  
  function selectGroup(){
    if(this.classList.contains('blue')){
      this.classList.remove('blue')
      return
    } if(secondClick===0 && firstClick>0) {
      secondClick = this.id
      console.log("setting second click to: " + secondClick + " firstclick is: " +firstClick)
      for(i=firstClick;i<secondClick;i++) {
        numBtn[i].classList.add('blue')
      }
      secondClick = 0
      firstClick = 0
      return
    } if (firstClick === 0){
      this.classList.add('blue')
      firstClick = this.id
      console.log("setting first click to: " + firstClick)
    } else {
      console.log("nothing happening")
    }


  //second click
  //get second click id
    // loop through to change class of numbers in between



  }
  
      //numberous buttons that are numbered
      //at one click = color changes
      //2nd click = color will revert
      //if sequence = color changes
      //if not in sequence = the buttons with colors will revert
      //click and drag
      //when click on another button, the previous button color will revert back to original

});
