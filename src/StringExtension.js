'use strict';

/**
 * hasVowels -- Checks if a word contains a vowel i.e (A E I O U)
 * @return {Boolean} Returns true if the a
 * word contains a vowel and false otherwise.
 */
String.prototype.hasVowels = function () {
  return /[aeiou]/gi.test(this);
};

/**
 * Capitalize all the charater in a word
 * @return {String} Returns the uppercased string
 */
String.prototype.toUpper = function () {
  return validData(this) ? this.replace(/[a-z]/g, upperCase) : '';
};

/**
 * converts a word to lowercase
 * @return {String} Returns string with all alphabetic
 * characters converted to lowercase.
 */
String.prototype.toLower = function () {
  return validData(this) ? this.replace(/([A-Z])/g, lowerCase) : '';
};

/**
 * Make a word's first character uppercase
 * @return {String} [Returns a string with the first character
 * capitalized
 */
String.prototype.ucFirst = function () {
  return validData(this) ? this.toUpper()[0].concat(trim(this).toLower()) : '';
};

/**
 * Check if a String ends with a question mark
 * @return {Boolean} Return true if a string has
 * question mark or false otherwise
 */
String.prototype.isQuestion = function () {
  return validData(this) ? /([?])/.test(this) : false;
};

/**
 * Converts a string to an array of words
 * splits at non words and return all words that are not empty
 * @return {Array} An array of the words in the string
 */
String.prototype.words = function () {
  return validData(this) ? this.split(/\W+/g)
    .filter(function(word) { return word !==''; } ) : [];
};

/**
 * Counts the number of the words in a string
 * @return {Integer} The number of words in a string
 */
String.prototype.wordCount = function () {
  return validData(this) ? this.words().length : 0;
};

 /**
 * converts a digit to money format
 * positive look ahead for a number followed by 3 numbers then group them
 * then replace with match result and ,
 * @return {float} The money format
 */
String.prototype.toCurrency = function () {
   return parseFloat(this.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
};

/**
 * Converts a money format to numbers by replacing all , with empty spaces
 * @return {Float} The number format
 */
String.prototype.fromCurrency = function () {
  return validData(this) ? parseFloat(this.replace(/(,)/g, '')) : false;
};

/**
 * @param  {String} word uppercase case character
 * converts to unicode and adds 32 to get the lowercase value
 * @return {String} the lowercase character
 */
function lowerCase(word) {
  return String.fromCharCode(word.charCodeAt() + 32);
}

/**
 * @param  {String} word lowercase case character
 * converts to unicode and subtracts 32 to get the uppercase value
 * @return {String} the uppercase character
 */
function upperCase(word) {
  return String.fromCharCode(word.charCodeAt() - 32);
}

/**
 * @param  {String} words
 * gets the substring of word from index 1 to the end
 * @return {String} the substring
 */
function trim(words) {
  return words.substring(1);
}

/**
 * @param  {String} word
 * ascertains word is a truthy value
 * @return {Boolean} true if the word is truthy
 */
function validData(word) {
  if(word) {
    return true;
  }
}
