var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");

router.get("/", function (req, res, next) {
  let currentUsers;
  var emails = [];
  fs.readFile("Users.json", (err, data) => {
    if (err) throw err;
    currentUsers = JSON.parse(data);
    const email = currentUsers.filter(function (event) {
      return event.newsletter === true;
    });
    email.forEach((element) => {
      emails.push(element.email);
    });
    console.log(emails);
    let html = "";
    html += "<html>";
    html += "<body>";

    currentUsers.forEach((user) => {
      html += "<br><div>";
      html += "<li>";
      html += "<l>";
      html += user.username;
      html += "</l>";
      html += "</li>";
      html += "</div>";
    });
    html += "<br><br>" + emails;
    html += "</body>";
    html += "</html>";
    res.send(html);
  });
});

module.exports = router;

/*

var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");


router.get("/", function (req, res, next) {
    fs.readFile("users.json", (err, data) => {
      if (err) throw err;
      let users = JSON.parse(data);
  
      let html = "";
  
      html += "<html>";
      html += "<body>";
  
      users.forEach((user) => {
        html += `<div id=${user.id}>`;
        html += `Id: ${user.id}<br>`;
        html += `Username: ${user.username}<br>`;
        html += `Password: ${user.password}<br>`;
  
        if (user.newsletter === true) {
          html += `Newsletter: <input type="checkbox" id="${user.id}" name="${user.username}" checked> <br><br>`;
        } else {
          html += `Newsletter: <input type="checkbox" id="${user.id}" name="${user.username}"> <br><br>`;
        }
  
        html += "</div>";
      });
  
      html += "<button id='btnSave'>Spara</button>";
      html += "</body>";
      html += "</html>";
  
      res.send(html);
    });
  });
  
  module.exports = router;
    */
