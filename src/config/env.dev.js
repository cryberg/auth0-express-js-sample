const dotenv = require("dotenv");

dotenv.config();

const audience = process.env.AUTH0_AUDIENCE;
const issuerUrl = process.env.AUTH0_ISSUER;
const serverPort = process.env.API_PORT;
const clientOriginUrl = process.env.APP_ORIGIN;

if (!audience) {
  throw new Error(
    ".env is missing the definition of an AUTH0_AUDIENCE environmental variable"
  );
}

if (!issuerUrl) {
  throw new Error(
    ".env is missing the definition of an AUTH0_ISSUER environmental variable"
  );
}

if (!serverPort) {
  throw new Error(
    ".env is missing the definition of a API_PORT environmental variable"
  );
}

if (!clientOriginUrl) {
  throw new Error(
    ".env is missing the definition of a APP_ORIGIN environmental variable"
  );
}

const clientOrigins = ["http://localhost:4040"];

module.exports = {
  audience,
  issuerUrl,
  serverPort,
  clientOriginUrl,
  clientOrigins,
};
