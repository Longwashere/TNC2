import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login (){
      //promise logic
      this.transitionToRoute('lobby');
    }
  }
});
