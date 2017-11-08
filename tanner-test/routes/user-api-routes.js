var db = require("../models");
var express = require('express');
var path = require("path");
const uuidv4 = require("uuid/v4");

module.exports = function(app) {

    app.post("/api/userSignup", function(req, res) {
      db.user.create(req.body).then(function(dbUser) {
        res.cookie("UserID", dbUser.userID);
        res.json(dbUser);
      });
    });
    app.post("/api/secretSignup", function(req, res) {
      db.usersecret.create(req.body).then(function(dbUserSecret) {
        res.json(dbUserSecret);
      });
    });

    app.get("/api/userLogin", function(req, res) {
        db.user.findOne({
            where:{
                username: req.username,
            }
        }).then(function(err,resp) {
          if(err){
            return err;
          }
          else{
            db.userSecret.findOne({
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

    app.delete("/api/user", function(req, res) {
        db.user.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

};