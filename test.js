// test.js
const generatePassword = require('./index');

// Generate a default password
console.log('Default Password:', generatePassword());

// Generate a password with custom options
const customPassword = generatePassword({
    length: 16,
    includeUppercase: true,
    includeNumbers: true,
    includeSpecialChars: false
});
console.log('Custom Password:', customPassword);
