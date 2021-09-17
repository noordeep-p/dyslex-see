/* eslint-disable linebreak-style */
/* eslint-disable func-style */

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.txt === "clicked") {

    let everything = document.getElementsByTagName("body");


    for (let i = 0; i < everything.length; i++) {

      let txt = everything[i].innerHTML;
      let tokens = txt.split(/(<.*?>)/);

      for (let j = 0; j < tokens.length; j++) {

        if (tokens[j].charAt(0) !== '<') {

          tokens[j] = tokens[j].replace(/\b(\w\.\w\.)|([.?!])\s+(?=[A-Za-z])/gi, '<span class="redact">. <p></span>');

        }
      }

      everything[i].innerHTML = tokens.join('');

    }

    let all = document.getElementsByTagName("*");

    for (let i = 0, max = all.length; i < max; i++) {
      all[i].style.color = "black";
    }

    let s = document.getElementsByTagName('p');

    for (let i = 0; i < s.length; i++) {
      if (message.colour === "yellow") {
    
        s[i].setAttribute("style", "background-color: #ffffcc; margin:20px; font-family: OpenDyslexic;");
      } else if (message.colour === "blue") {
    
        s[i].setAttribute("style", "background-color: #b3d9ff; margin:20px; font-family: OpenDyslexic;");
      } else if (message.colour === "red") {
    
        s[i].setAttribute("style", "background-color: #ffe368; margin:20px; font-family: OpenDyslexic;");
      } else if (message.colour === "green") {
    
        s[i].setAttribute("style", "background-color: #75baff; margin:20px; font-family: OpenDyslexic;");
      } else if (message.colour === "pink") {
    
        s[i].setAttribute("style", "background-color: #b3b3b3; margin:20px; font-family: OpenDyslexic;");
      } else {
    
        s[i].setAttribute("style", "background-color: #ffffcc; margin:20px; font-family: OpenDyslexic;");
      }

    }

    s = document.getElementsByTagName('li');

    for (let i = 0; i < s.length; i++) {
      if (message.colour === "yellow") {
    
        s[i].setAttribute("style", "background-color: #ffffcc; margin:20px; font-family: OpenDyslexic;");
      } else if (message.colour === "blue") {
    
        s[i].setAttribute("style", "background-color: #b3d9ff; margin:20px; font-family: OpenDyslexic;");
      } else if (message.colour === "red") {
    
        s[i].setAttribute("style", "background-color: #ffe368; margin:20px; font-family: OpenDyslexic;");
      } else if (message.colour === "green") {
    
        s[i].setAttribute("style", "background-color: #75baff; margin:20px; font-family: OpenDyslexic;");
      } else if (message.colour === "pink") {
    
        s[i].setAttribute("style", "background-color: #b3b3b3; margin:20px; font-family: OpenDyslexic;");
      } else {
    
        s[i].setAttribute("style", "background-color: #ffffcc; margin:20px; font-family: OpenDyslexic;");
      }
    }

  }
}