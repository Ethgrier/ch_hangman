let letters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
let words = ["banana","excess","giggit","voodoo","pullup","rhythm","myrrhy"];
let guessString = "";

window.onload = setKeyboard();

function setKeyboard(){
  let kba = ""
  for (i = 0; i < letters.length; i++){
    let li =letters[i];
      let a = "<span onClick=\"letterClick('"+li+"')\">"+li+"</span>";
      if(li=="P"||li=="L"){
        a+="</br>"
      }
      kba = kba + a;
  }
  document.getElementById("keyboard").innerHTML = kba
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getword(rexp){
  let re = new RegExp("["+rexp.toLowerCase()+"]");
  for (i = getRandomInt(words.length-1); i < words.length*3; i++){
    j= i%(words.length)
    //console.log(j);
    if (!re.test(words[j])){
      let sol = words[j].toUpperCase();

      return sol
    }
  }
  return null
}

function resetClick(){
  guessString = "";
  document.getElementById("solution").innerHTML = "_ _ _ _ _ _";
  document.getElementById("guesses").innerHTML = "*****";
  setKeyboard();
}

function letterClick(letter){
  if(guessString.length<5){
    guessString += letter;
    showString = guessString + ("*".repeat(5-guessString.length))
    document.getElementById("guesses").innerHTML = showString;
    if(guessString.length==5){
      sol = getword(guessString);
      document.getElementById("solution").innerHTML = sol[0]+" "+sol[1]+" "+sol[2]+" "+sol[3]+" "+sol[4]+" "+sol[5];
      document.getElementById("keyboard").innerHTML = "<div class=\"retry\" onClick=\"resetClick();\">You lost</br>Try again</div>"
    }
  }
}
