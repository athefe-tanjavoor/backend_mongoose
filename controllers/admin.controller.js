const express = require("express");
const AdminModel = require("../model/admin.model");



const CreateAdmin = (req, res) => {
    const body = req.body;
    AdminModel.create(
      {
        ...body,
        role: "ADMIN",
      },
      (err, data) => {
        console.log(data);
        if (!err) {
          res.json({
            message: "Admin is created",
            status: 200,
            data: data,
          });
        } else {
          res.json({
            message: "Admin is not created",
            status: 404,
          });
        }
      }
    );
  };



  module.exports= {CreateAdmin}