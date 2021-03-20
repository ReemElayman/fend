var validUrl = require('valid-url');

function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);
    if (validUrl.isUri(inputText)){
        return true;
    } else {
        return false;
    }
}

export { checkForURL }
