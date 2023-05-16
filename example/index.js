const express = require("express");
const app = express();
const PORT = 3000;

const cowsay = require("cowsay");

console.log(cowsay.say({ text: "I'm a module" }));
app.listen(PORT, console.log(`listening on port ${PORT}`));


app.get("/cowsay", (req, res) => {
  res.send(
    cowsay.say({
      text: "I'm a moooodule",
      e: "oO",
      T: "U ",
    })
  );
});

app.listen(PORT, console.log(`listening on port ${PORT}`));