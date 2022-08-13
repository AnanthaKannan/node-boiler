const swagger = require('swagger-tools');
const yaml = require('js-yaml');
const fs = require('fs');

const auth = require('./middleware/auth')
const error = require("./middleware/error")
const swaggerDefFileName = __dirname + '/index.yaml';

// Convert YAML file into JSON file
const data = yaml.load(fs.readFileSync(swaggerDefFileName));
// swaggerRouter configuration
var options = {
  controllers: './controllers',
  useStubs: false//process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

module.exports = (app) => {

  swagger.initializeMiddleware(data, (middleware) => {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate request and response from the api
    app.use(middleware.swaggerValidator({ validateResponse: true }));

    // Token validation
    app.use(auth)

    // // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // common error handling
    app.use(error)
  });
}