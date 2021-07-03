class IntervalLifecycle {
  constructor(receivedFunction, intervalTimer) {
      this.receivedFunction = receivedFunction;
      this.intervalTimer = intervalTimer ? intervalTimer : 2000;
  }

    setUpNewMessageListener() {
      setInterval(() => {
        this.receivedFunction();
      }, this.intervalTimer);
    }
    
    tearDownNewMessageListener() {
      clearInterval(this.receivedFunction());
    }
}

export default IntervalLifecycle;