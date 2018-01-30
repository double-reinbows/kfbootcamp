// @flow

type User = {
  id: string;
  username: string;
  password: string;
}

function saveUser(username, password) {
  let user: User = {
    id: Math.random().toString(),
    username, //short for username: username
    password, //short for password: password
  };
  let success = global.db.save('Users', user);
  return {success, user}; //option: return [success, user]
}

let result = saveUser('Domi', 'kickave');
let success = result.success;
let user = result.user;
//shortcut via destructuring
let {success, user} = saveUser('Domi', 'kickave');
