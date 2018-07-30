const assert = require('assert');
const app = require('../../src/app');

describe('\'todoAuth\' service', () => {
  it('registered the service', () => {
    const service = app.service('todo-auth');

    assert.ok(service, 'Registered the service');
  });
});
