const $ = require("jquery");
const sayHello = require("./say-hello");

console.log(sayHello());

const hello = () => console.log("Hello redwood from webpack!");

hello();

$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color", "gray");