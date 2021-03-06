# Auth0 Express API Sample (JavaScript)

This repository contains a Node.js project that defines an Express API. You'll secure this API with Auth0 to practice making secure API calls from a client application.

Associated FE is here: https://github.com/cryberg/auth0-react-sample

## Get Started

Install the client project dependencies:

```bash
npm install
```

Create `.env` file under the project directory:

```bash
touch .env
```

Populate `.env` as follows:

```bash
API_PORT=7000
APP_ORIGIN=http://localhost:3000
AUTH0_AUDIENCE=
AUTH0_ISSUER=
```

Get the values for `AUTH0_AUDIENCE` and `AUTH0_ISSUER` from your Auth0 API in the Dashboard. You can find these values by following this path in the Dashboard:

**APIs > Your API > Quick Start > Node.js**

Locate the definition of `jwtCheck` on the code snippet:
 
```javascript
var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://<TENANT-NAME>.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://express.sample", // 👈 AUTH0_AUDIENCE value
  issuer: "https://<TENANT-NAME>.auth0.com/", // 👈 AUTH0_ISSUER value
  algorithms: ["RS256"],
});
```

Look at the object that the `jwt` function takes as argument and use the following properties to complete the values of your `.env` file:

The `audience` property is the value of `AUTH0_AUDIENCE`.

The `issuer` property is the value of `AUTH0_ISSUER`.

Run the Node.js project:

```bash
npm start
```