// controllers/componentsController.js
const { Component } = require('../models/Component');

exports.addComponent = (req, res) => {
    const result = Component.add(req.body);
    res.send(result);
};

exports.getAllComponents = (req, res) => {
    const result = Component.getAll();
    res.send(result);
};