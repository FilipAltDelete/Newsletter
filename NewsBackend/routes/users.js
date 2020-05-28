var express = require("express");
var router = express.Router();
var fs = require("fs");
var loginSucess;

router.post("/", function (req, res) {
  //res.send(req.body);
  var user = req.body.user.username;
  var passw = req.body.user.password;

  fs.readFile("Users.json", (err, data) => {
    if (err) throw err;
    var users = JSON.parse(data);
    users.forEach((element) => {
      if (user === element.username && passw === element.password) {
        userLoggedin = {
          id: element.id,
          username: element.username,
          password: element.password,
          email: element.email,
          newsletter: element.newsletter,
        };
        loginSucess = userLoggedin;
      }
    });
    console.log(loginSucess);
    res.send(loginSucess);
  });
});

router.put("/", function (res, res) {
  var putId = res.body.user.id;
  var putUsername = res.body.user.username;
  var putPassword = res.body.user.password;
  var putEmail = res.body.user.email;
  var putNewsletter = res.body.user.newsletter;

  console.log("PUTTEN FUNKAR");
  console.log(putUsername);
});

module.exports = router;
