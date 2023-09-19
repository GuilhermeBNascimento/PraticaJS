function converter() {
    let string = window.prompt("Digite sua string");
    let novastring = "";

    for (let i = string.length-1; i>=0; i--) {
        novastring += string[i];
    }
    return novastring
    
}

console.log(novastring);