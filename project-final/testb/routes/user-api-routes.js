var db = require("../models");
var express = require('express');
var path = require("path");
const uuidv4 = require("uuid/v4");

module.exports = function(app) {

    app.post("/api/userSignup", function(req, res) {
      db.User.create(req.body).then(function(dbUser) {
        res.cookie("UserID", dbUser.userID);
        res.json(dbUser);
      });
    });
    app.post("/api/secretSignup", function(req, res) {
      db.UserSecret.create(req.body).then(function(dbUserSecret) {
        res.json(dbUserSecret);
      });
    });

    app.get("/api/userLogin", function(req, res) {
        db.User.findOne({
            where:{
                username: req.username,
            }
        }).then(function(err,resp) {
          if(err){
            return err;
          }
          else{
            db.UserSecret.findOne({
              where:{
                userID: resp.userID
              }
            }).then(function(err,resp){
              if(err){
                return err;
              }
              else{
                res.cookie('UserID',resp.userID)
              }
            })
            res.json(dbUser);
          }
        });
    });

    app.put("/api/cardplay/down", function(req, res) {
      var card = req.cardname;
      db.Hand.update({
          card : false
      },
        {
          where: {
            handID: req.cookies.hand
          }
        }).then(function(dbHand) {
          res.json(dbHand);
        });
    });

      app.put("/api/cardplay/pick", function(req, res) {
        db.Hand.update({
            card : true
        },
          {
            where: {
              handID: req.cookies.hand
            }
          }).then(function(dbAgent) {
            res.json(dbHand);
          });
      });

      //app.put("/api/agent/warsaw", function(req, res) {
        //db.Agent.update({
          //  warsaw:true
       // },{
            //where: {
              //username: req.cookies.username
            //}
          //}).then(function(dbAgent) {
            //res.json(dbAgent);
          //});
      //});

    app.delete("/api/agent/:id", function(req, res) {
        db.Agent.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbAgent) {
            res.json(dbAgent);
        });
    });

};