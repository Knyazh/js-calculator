export const calculation = function calculateResult() {
    try {
      const result = eval(input.value);
      input.value = result;
    } catch (error) {
      input.value = "Error";
    }
  }