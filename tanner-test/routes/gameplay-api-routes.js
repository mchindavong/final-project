// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for finding all games by a particular user
    app.get("/api/gamesHosted", function(req, res) {
        db.game.findAll({
            where: {
                hostID: req.userID
            }
        }).then(function(hostedGames) {
            res.json(hostedGames);
        });
    });
    app.get("/api/gamesGuested", function(req, res) {
        db.game.findAll({
            where: {
                guestID: req.userID
            }
        }).then(function(guestedGames) {
            res.json(guestedGames);
        });
    });
    app.get("/api/playThisGame", function(req, res) {
        db.game.findOne({
            where: {
                gameID: req.gameID
            }
        }).then(function(thisGame) {
            res.cookie('GameID',res.gameID)
            res.sendFile(path.join(__dirname, "../public/game.html"));
        });
    });

    // PUT route for updating hands 
    app.put("/api/up/blanco", function(req, res) {
        let blanco = req.cardSpec;
        db.hand.update({
            blanco:true
        },{
            where: {
              handID: req.cookies.handID
            }
          }).then(function(hand) {
            res.json(hand);
          });
    });
    app.put("/api/down/blanco", function(req, res) {
        let blanco = req.cardSpec
        db.hand.update({
            blanco:false
        },{
            where: {
              handID: req.cookies.handID
            }
          }).then(function(hand) {
            res.json(hand);
          });
    });
    app.get("/api/hand", function(req, res) {
        db.hand.findOne({
            where: {
              handID: req.cookies.handID
            }
          }).then(function(hand) {
            res.json(hand);
          });
    });


    // CREATE route for new game
    app.create("/api/game/",function(req,res){
        
    });
    // DELETE route for deleting game
    app.delete("/api/questions/:id", function(req, res) {
        db.Question.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });

    // PUT route for updating Question on who has visited this city
    app.put("/api/updateVisit", function(req, res) {
        console.log(req.body);
        db.Question.update({
            visited: req.body.visit
        }, {
            where: {
                cityName: req.body.cityName
            }
        }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });

    // PUT route for updating the visit of this specific uuid/question
    app.put("/api/updateQuestionVisit", function(req, res) {
        console.log(req.body);
        db.Question.update({
            questionVisit: req.body.questionVisit
        }, {
            where: {
                uuid: req.body.uuid
            }
        }).then(function(dbQuestion) {
            res.json(dbQuestion);
        });
    });






};