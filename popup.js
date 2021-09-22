/* eslint-disable linebreak-style */
/* eslint-disable func-style */

let colourChoice = "yellow";

function run(tab) {

  let params = {
    active: true,
    currentWindow: true
  };
  chrome.tabs.query(params, gotTabs);

  function gotTabs(tabs) {

    let msg = {
      txt: "clicked",
      colour: colourChoice
    };

    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
}

function yellowClick() {
  document.getElementById('buttonClicked').style.background = "#ffffcc";
  document.getElementById('header-1').style.background = "#ffffcc";
  document.getElementById('header-2').style.background = "#ffffcc";
  colourChoice = "yellow";
}

function blueClick() {
  document.getElementById('buttonClicked').style.background = "#b3d9ff";
  document.getElementById('header-1').style.background = "#b3d9ff";
  document.getElementById('header-2').style.background = "#b3d9ff";
  colourChoice = "blue";
}

function redClick() {
  document.getElementById('buttonClicked').style.background = "#ffe368";
  document.getElementById('header-1').style.background = "#ffe368";
  document.getElementById('header-2').style.background = "#ffe368";
  colourChoice = "red";
}

function greenClick() {
  document.getElementById('buttonClicked').style.background = "#75baff";
  document.getElementById('header-1').style.background = "#75baff";
  document.getElementById('header-2').style.background = "#75baff";
  colourChoice = "green";
}

function pinkClick() {
  document.getElementById('buttonClicked').style.background = "#b3b3b3";
  document.getElementById('header-1').style.background = "#b3b3b3";
  document.getElementById('header-2').style.background = "#b3b3b3";
  colourChoice = "pink";
}

document.getElementById('yellowColour').addEventListener('click', yellowClick);
document.getElementById('blueColour').addEventListener('click', blueClick);
document.getElementById('redColour').addEventListener('click', redClick);
document.getElementById('greenColour').addEventListener('click', greenClick);
document.getElementById('pinkColour').addEventListener('click', pinkClick);
document.getElementById('buttonClicked').addEventListener('click', run);