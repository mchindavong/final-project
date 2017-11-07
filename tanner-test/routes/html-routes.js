// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
    // index route loads view.html
    

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/questions/", function(req, res) {

        res.sendFile(path.join(__dirname, "../public/neutral.html"));
    });


    
    //app.get("/9a5d03d6-6e04-49df-aaa3-0d1313b13676", function(req, res) {
        //berlin
        //var loc={
            //city:"Berlin"
        //};
        //res.render("Cities",loc);
      //});
    
    
      
    
    

    app.get("/questions/:uuid", function(req, res) {
        console.log(req.params.uuid);

        db.Question.findOne({
            where: {
                uuid: req.params.uuid
            },
            include: [db.Agent]
        }).then(function(dbQuestion) {
            dbQuestion.dataValues.question = dbQuestion.dataValues.question.replace(/&quot;/g, '"');
            res.render("Cities", dbQuestion.dataValues);
        });
    });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

};

