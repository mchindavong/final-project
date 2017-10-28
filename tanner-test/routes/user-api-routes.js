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
        res.cookie("username", dbUser.username);
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
                res.cookie('UserID',resp.userID)
            })
            res.cookie('UserID',resp.id);
            res.json(dbAgent);
          }
        });
    });

      app.get("/api/cardplay/hostdown", function(req, res) {
        db.Game.findOne({
          where:{
            gameID:req.gameID
          }
        }).then(function(req,res){
          db.Hand.findOne({
            where:{
              handID: req.hostHandID
            }
          })
        }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/cardplay/pick", function(req, res) {
        db.Hand.update({
            card : true
        },
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/agent/moscow", function(req, res) {
        db.Agent.update({
            moscow:true
        }
        ,
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/agent/prague", function(req, res) {
        db.Agent.update({
            prague:true
        },
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/agent/rome", function(req, res) {
        db.Agent.update({
            rome:true
        }
        ,
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

      app.put("/api/agent/warsaw", function(req, res) {
        db.Agent.update({
            warsaw:true
        }
        ,
          {
            where: {
              username: req.cookies.username
            }
          }).then(function(dbAgent) {
            //res.cookie("username" , dbAgent.username);
            res.json(dbAgent);
          });
      });

    

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