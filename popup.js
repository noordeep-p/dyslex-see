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
  colourChoice = "yellow";
}

function blueClick() {
  colourChoice = "blue";
}

function redClick() {
  colourChoice = "red";
}

function greenClick() {
  colourChoice = "green";
}

function pinkClick() {
  colourChoice = "pink";
}

document.getElementById('yellowColour').addEventListener('click', yellowClick);
document.getElementById('blueColour').addEventListener('click', blueClick);
document.getElementById('redColour').addEventListener('click', redClick);
document.getElementById('greenColour').addEventListener('click', greenClick);
document.getElementById('pinkColour').addEventListener('click', pinkClick);
document.getElementById('buttonClicked').addEventListener('click', run);