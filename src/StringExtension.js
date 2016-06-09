'use strict';
String.prototype.hasVowels = function () {
  return /[aeiou]/gi.test(this);
};

String.prototype.toUpper = function () {
  return validData(this) ? this.replace(/[a-z]/g, upperCase) : '';
};

String.prototype.toLower = function () {
  return validData(this) ? this.replace(/([A-Z])/g, lowerCase) : '';
};

String.prototype.ucFirst = function () {
  return validData(this) ? this.toUpper()[0].concat(trim(this).toLower()) : '';
};

function lowerCase(word) {
  return String.fromCharCode(word.charCodeAt() + 32);
}

function upperCase(word) {
  return String.fromCharCode(word.charCodeAt() - 32);
}

function validData(word){
  if(word){
    return true;
  }
}
