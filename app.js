
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/modules/date.js");

const app = express();

console.log(date.getDate());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

var items = [];
var workItems = [];

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let day = date.getDate().day;
  let msg = date.getDate().msg;
  res.render("list", { listTitle: day, msgOfDay: msg, listItems: items});
});

app.post("/", function(req, res){
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", listItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
})

app.listen(3000, function () {
  console.log("Server started at port 3000.");
});

