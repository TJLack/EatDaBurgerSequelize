var express = require("express");
var router = express.Router();

var db = require("../models/");


//redirect the get route 
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

//mirror sequelize 
router.get("/burgers", function(req, res) {

    db.Burger.findAll()
        //promise method 
        .then(function(dbBurger) {
            console.log(dbBurger);

            var hbsObject = { burger: dbBurger };
            return res.render("index, hbsOject");
        });
});

//post - create burgers 
router.post("/burgers/create", function(req, res) {
    db.Burger.create({
            burger_name: req.body.burger_name
        })
        .then(function(dbBurger) {
            console.log(dbBurger);
            res.redirect("/");
        });
});

router.put("/burgers/update", function(req, res) {
    //modifying 1 burger
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.body.burger_id
        }
    })

    .then(function(dbBurger) {
        res.redirect("/");
    });
});

module.exports = router;