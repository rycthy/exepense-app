import authReducer from '../../reducers/auth';

test('should ad uid to auth state', () => {
  const uid = 1;
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(uid);
});

test('should wipe uid from auth state', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({uid: 'humdinger'}, action);
  expect(state).toEqual({});
});