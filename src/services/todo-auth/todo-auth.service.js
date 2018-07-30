// Initializes the `todoAuth` service on path `/todo-auth`
const createService = require('feathers-nedb');
const createModel = require('../../models/todo-auth.model');
const hooks = require('./todo-auth.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'todo-auth',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/todo-auth', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('todo-auth');

  service.hooks(hooks);
};
