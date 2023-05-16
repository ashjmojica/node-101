const express = require("express");
const app = express();
const PORT = 3000;

const cowsay = require("cowsay");

console.log(cowsay.say({ text: "I'm a module" }));
app.listen(PORT, console.log(`listening on port ${PORT}`));