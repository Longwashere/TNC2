import Component from '@ember/component';

export default Component.extend({
  username: '',
  classNames: ['login'],
  password: '',
  actions: {
    updateUserName (value) {
      this.set('username', value);
    },
    updatePassword (value) {
      this.set('password', value);
    },
    clickLogin() {
      this.login();
    }
  }
});
