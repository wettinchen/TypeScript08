"use strict";
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
store.state = "Dave";
const myState = new StateObject([15]);
myState.state = (["Dave", 42, true]);
console.log(myState.state);
