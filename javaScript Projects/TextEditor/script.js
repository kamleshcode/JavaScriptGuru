document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input-field");
    const outputField = document.getElementById("output-field");
  
    const uppercaseButton = document.querySelector(".btn.uppercase");
    const lowercaseButton = document.querySelector(".btn.lowercase");
    const capitalizeButton = document.querySelector(".btn.capitalize");
    const boldButton = document.querySelector(".btn.bold");
    const italicButton = document.querySelector(".btn.italic");
    const underlineButton = document.querySelector(".btn.underline");
  
    const updateOutput = (formatFn) => {
      const text = inputField.value;
      outputField.innerHTML = formatFn(text);
    };
  
    uppercaseButton.addEventListener("click", () => {
      updateOutput((text) => text.toUpperCase());
    });
  
    lowercaseButton.addEventListener("click", () => {
      updateOutput((text) => text.toLowerCase());
    });
  
    capitalizeButton.addEventListener("click", () => {
      updateOutput((text) =>
        text.replace(/\b\w/g, (char) => char.toUpperCase())
      );
    });
  
    boldButton.addEventListener("click", () => {
      updateOutput((text) => `<b>${text}</b>`);
    });
  
    italicButton.addEventListener("click", () => {
      updateOutput((text) => `<i>${text}</i>`);
    });
  
    underlineButton.addEventListener("click", () => {
      updateOutput((text) => `<u>${text}</u>`);
    });
  });
  