var text = "w3resource"
//setInterval(rotate, 100);

function rotate() {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    //textNode.data = text;
    return text
}
console.log(text) //?
rotate() //?
rotate() //?