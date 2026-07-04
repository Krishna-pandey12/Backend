// Core Modules
const path = require('path');
const express = require('express');
const userRouter = express.Router();
const homeController = require("../controllers/homes");

// External Module


// Local Module


userRouter.get("/",homeController.getHomes);

module.exports = userRouter;