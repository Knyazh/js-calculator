export const button = buttons.forEach((button) => {
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

  export const keydown =  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      calculateResult();
    }
  });