
function check() {
  let getText = document.getElementById("text");
  let getMessage1 = document.getElementById("message1");
  let getPassword = document.getElementById("password");
  let getMessage2 = document.getElementById("message2");
  let textValue = getText.value;
  let passwordValue = getPassword.value;
  let str = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;
  let trueFalse = true;
 

  if (str.test(textValue)) {
    getMessage1.textContent = "";
  } else {
  getMessage1.innerHTML = "IDへは半角英数字記号のみで記入して下さい";
  getText.style.border = '1px #e22 solid';
    trueFalse = false;
  }
  

if (str.test(passwordValue)) {
  getMessage2.textContent = "";
} else {
  getMessage2.innerHTML = "Passwordへは半角英数字記号のみで記入して下さい";
  getPassword.style.border = '1px #e22 solid';
  trueFalse = false;
}
  

  if (textValue == "") {
    getMessage1.innerHTML = "IDが未入力です";
    trueFalse = false;
  }
  
  if (passwordValue == "") {
    getMessage2.innerHTML = "Passwordが未入力です";
    trueFalse = false;
  }

  return trueFalse;
}
