var db = require("../models");
var express = require('express');
var path = require("path");
const uuidv4 = require("uuid/v4");

module.exports = function(app) {

    app.post("/api/userSignup", function(req, res) {
      db.user.create(req.body).then(function(dbAgent) {
        res.cookie("username", dbAgent.username);
        res.cookie('AgentId',dbAgent.id);
        res.json(dbAgent);
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
                userID:resp.userID
              }
            }).then(function(err,resp){
                res.cookie('UserID',resp.userID)
            })
            res.cookie('UserID',resp.id);
            res.json(dbAgent);
          }
        });
    });

      app.put("/api/agent/istanbul", function(req, res) {
        db.Agent.update({
            istanbul:true
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