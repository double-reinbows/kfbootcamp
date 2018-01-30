// @flow

function checkPassword(password: string) {
  if (password.length < 8) {
    return {success: false, reason: 'Password too short'};
  }

  let regEx = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
  console.log(regEx.test(password));
  if (regEx.test(password)) {
    return {success: true, reason: 'Good job m8'};
  } else {
    return {success: false, reason: 'Bad'};
  }
}
checkPassword('haloabanGgi4444a!!!');
export default checkPassword;
