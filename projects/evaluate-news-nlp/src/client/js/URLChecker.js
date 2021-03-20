var validUrl = require('valid-url');
function checkForURL(inputText) {
    console.log("::: Running checkForName :::", inputText);
    if (validUrl.isUri(inputText)){
        console.log('Looks like an URI');
        return true;
    } else {
        console.log('Not a URI');
        return false;
    }
}

export { checkForURL }
