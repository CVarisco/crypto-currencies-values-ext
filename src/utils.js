const getCurrencySymbol = (textValue) =>{
    if (textValue === "EUR"){
        return "&#x20AC;";
    }

    if (textValue=== "USD") {
        return "&#x24;";
    }
    if (textValue==="GBP") {
        return "&#xa3;"
    }

    return textValue;
}

export { getCurrencySymbol }