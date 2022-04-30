// 특정한 행동을 했는지 않했는지 (함수가 몇번 불렸는지, 등등)을 테스트하려면
// Stub보단 Mock으로 하는게 더 좋고 간편하다.

const UserService = require('./user_service.js');
const UserClient = require('./user_client.js');

jest.mock('./user_client.js');

describe('UserService', () => {
  const login = jest.fn(async () => 'success');
  UserClient.mockImplementation(() => {
    return {
      login,
    };
  });

  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    login.mockClear();
    UserClient.mockClear();
  });

  it('Calls login() on UserClient when tries to login', async () => {
    await userService.login('abc', 'abc');
    await userService.login('abc', 'abc');

    expect(login.mock.calls.length).toBe(1);
  });
});
