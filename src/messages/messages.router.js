/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const { getPublicMessage, getProtectedMessage } = require("./messages.service");
const { checkJwt } = require("../authz/check-jwt");

/**
 * Router Definition
 */

const messagesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET messages/

messagesRouter.get("/public-message", (req, res) => {
  const message = getPublicMessage();
  // res.setHeader('Access-Control-Allow-Origin', process.env.APP_ORIGIN);
  res.status(200).send(message);
});

messagesRouter.get("/protected-message", checkJwt, (req, res) => {
  const message = getProtectedMessage();

  /* 
   * Note: setting the headers here isn't actually necessary, because the `cors` package
   * is used in the index.js file to take care of the Cross Header issue.
   * Originally, it wasn't working because the clientOrigins parameter had the wrong port number.
   * 
   * Leaving this header code here, commented out, as an example of another way to fix the CORS issue.
   */
  // res.setHeader('Access-Control-Allow-Origin', process.env.APP_ORIGIN);
  res.status(200).send(message);
});

module.exports = {
  messagesRouter,
};
