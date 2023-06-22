// import {calculation} from "./src/components/calculateresult.js";
// import {keydown , button} from "./src/components/addEvenListener.js ";

// module islemedi import eliende islemirdi 

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".c-input");
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;
  
        if (buttonText === "=") {
          calculateResult();
        } else if (buttonText === "C") {
          input.value = "";
        } else {
          input.value += buttonText;
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        calculateResult();
      }
      else if (event.key==="C" || event.key==="c"){
        input.value="";
      }
    });




    function calculateResult() {
      try {
        const result = eval(input.value);
        input.value = result;
      } catch (error) {
        input.value = "Error";
      }
    }
   
  });
  