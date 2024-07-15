let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = eval(string);
      } catch {
        string = "Error";
      }
      input.value = string;
      string = ""; // Reset string after evaluation
    } else if (e.target.innerHTML === 'AC') {
      string = "";
      input.value = string; // Clear the input box
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
