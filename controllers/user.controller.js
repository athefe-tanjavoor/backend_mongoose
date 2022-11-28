const express = require("express");
const UserModel = require("../model/user.model");
const userData = require("../db/data");

const CreateUser = (req, res) => {
  UserModel.create(userData, (err, data) => {
    if (!err) {
      res.json({
        message: "user is created",
        status: 200,
        data: data,
      });
    } else {
      res.json({
        message: "user is not created",
        status: 404,
      });
    }
  });
};

function updateUser(req, res) {
  UserModel.updateOne(
    { name: userData.name },
    { name: "atif" },
    (err, data) => {
      if (!err) {
        res.json({
          message: "user is updated",
          status: 200,
          data: data,
        });
      } else {
        res.json({
          message: "user is not updated",
          status: 404,
        });
      }
    }
  );
}

function deleteUser(req, res) {
  UserModel.deleteOne(
    { _id: "" },

    (err, data) => {
      if (!err) {
        console.log(data);
        res.json({
          message: "user is deleted",
          status: 200,
          data: data,
        });
      } else {
        res.json({
          message: "user is not deleted",
          status: 404,
        });
      }
    }
  );
}

module.exports = { CreateUser, updateUser, deleteUser };
