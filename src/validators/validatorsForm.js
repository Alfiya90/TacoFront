export let requiredField;
requiredField = (value) => {
    if (value) return undefined;
    return 'Field is required'
};

export let maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbol`;
}

export let minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} symbol`;
}

 export let cvvValidation = (value) => {
    if (value.length == 3 &&
        value.split("").every(symbol => Number.isInteger(Number(symbol)) == true )){
        return undefined;
    } else return 'Invalid CVV'
 }

let ccExpirationValidation = (value) => {
    if (value.length == 5 && value[2] == "/" && Number.isInteger(Number(value[0])) == true &&
        Number.isInteger(Number(value[1])) == true && Number.isInteger(Number(value[3])) == true &&
        Number.isInteger(Number(value[4])) == true) {
        console.log("__________OK");

    } else
        console.log("__________Invalid ccExpiration")
}