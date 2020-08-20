let letters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]

for (i = 0; i < letters.length; i++){
  let li =letters[i];
    let a = "<span onClick=\"letterClick('"+li+"')\">"+li+"</span>";
    if(li=="P"||li=="L"){
      a+="</br>"
    }
    let kba = document.getElementById("keyboard").innerHTML;
    document.getElementById("keyboard").innerHTML = kba + a;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let words = ["banana","excess","giggit","voodoo","pullup","rhythm","myrrhy"]
function getword(rexp){
  let re = new RegExp("["+rexp.toLowerCase()+"]");
  for (i = getRandomInt(words.length-1); i < words.length*3; i++){
    j= i%(words.length)
    //console.log(j);
    if (!re.test(words[j])){
      let sol = words[j].toUpperCase();
      document.getElementById("solution").innerHTML = sol[0]+" "+sol[1]+" "+sol[2]+" "+sol[3]+" "+sol[4]+" "+sol[5];
      return words[j]
    }
  }
  return null
}

let guessString = "";

function letterClick(letter){
  if(guessString.length<5){
    guessString += letter;
    showString = guessString + ("*".repeat(5-guessString.length))
    document.getElementById("guesses").innerHTML = showString;
    if(guessString.length==5){
      getword(guessString);
      document.getElementById("keyboard").innerHTML = "<div class=\"retry\" onClick=\"window.location.reload();\">You lost</br>Try again</div>"
    }
  }
}
