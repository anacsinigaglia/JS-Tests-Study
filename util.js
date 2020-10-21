//coloco como const e não exports para poder usar diretamente no arquivo "util":
const generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

exports.generateText = generateText;

exports.createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

//coloco como const ao invés de dar exports.validateInput para que os valores 
//de validate existam e não quebre o teste "should generate a valid text output":
const validateInput = (text, notEmpty, isNumber) => { 
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

exports.validateInput = validateInput;

//compõe um teste integrado:
exports.checkAndGenerateText = (name, age) => {
  if (!validateInput(name, true, false) || !validateInput(age, false, true)) { //pode falhar aqui antes de chegar no teste unitário
    return false;
  }
  return this.generateText(name, age);
}
