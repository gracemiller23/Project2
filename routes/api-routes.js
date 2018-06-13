//var testApiController = require("../controllers/testApi");

var categoriesController = require("../controllers/categories");
var threadsController = require("../controllers/threads");
var postsController = require("../controllers/posts");
var subscriptionsController = require("../controllers/subscriptions");
var followersController = require("../controllers/followers");
var usersController = require("../controllers/users");

module.exports = function(app) {
  app.use(categoriesController);
  app.use(threadsController);
  app.use(postsController);
  app.use(subscriptionsController);
  app.use(followersController);
  app.use(usersController);
};