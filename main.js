let input = document.querySelector(".show");
let buttons = document.querySelectorAll("#btn input");
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.value == "=") {
      if(string == ""){
        string+=0;
      }
      string = eval(string);
      input.value = string;
      string=input.value;
    }
    else if (e.target.value == "AC") {
      string = "";
      input.value = string;
    }
    else if (e.target.value == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
    else {
      string += e.target.value;
      input.value = string;
    }
  })

})