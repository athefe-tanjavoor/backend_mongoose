const express = require("express");
const UserModel = require("../model/user.model");
// const userData = require("../db/data");

const CreateAdmin = (req, res) => {
  const body = req.body;
  UserModel.create(
    {
      ...body,
      role: "ADMIN",
    },
    (err, data) => {
      console.log(data);
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
    }
  );
};

const CreateUser = (req, res) => {
  const body = req.body;
  UserModel.create(
    {
      ...body,
      role: "USER",
    },
    (err, data) => {
      if (!err) {
        console.log(data);

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
    }
  );
};

function updateUser(req, res) {
  UserModel.updateOne(
    { name: body.name },

    (err, data) => {
      if (!err) {
        console.log(data);
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
  UserModel.deleteOne((err, data) => {
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
  });
}

module.exports = { CreateAdmin, CreateUser, updateUser, deleteUser };
