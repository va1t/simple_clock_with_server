// helper.js

//every 1s push current time to each callback on the stack;
class Time {

  constructor() {
    this.callbackStack = [];
    setInterval(this.runCallbacks.bind(this), 1000);
  }

  addCallback(cb) {
    this.callbackStack.push(cb);
  }

  runCallbacks() {
    this.callbackStack.forEach((cb) => {
      cb(new Date());
    });
  }

};

module.exports = {
  Time: Time
};