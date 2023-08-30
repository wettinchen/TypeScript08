class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject<string>("John")
console.log(store.state)
store.state = "Dave"

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (["Dave", 42, true])
console.log(myState.state)