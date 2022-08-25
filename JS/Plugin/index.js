const CounterPlugin = function ({ initialValue = 0, step = 1 } = {}) {
    this._value = initialValue
    this.step = step
}

CounterPlugin.prototype.increment = function () {
    this._value += this.step
}

const counter = new CounterPlugin({ step: 10 })

console.log(counter)

console.log("🚀 ~ file: index.js ~ line 5 ~ CounterPlugin ~ CounterPlugin", CounterPlugin)
