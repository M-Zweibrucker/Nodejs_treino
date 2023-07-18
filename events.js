const { EventEmitter } = require(`events`)
const ev = new EventEmitter()

ev.on(`saysomething`, (message) => {
    console.log(`eu ouvi voce`, message)
})

ev.emit(`saysomething`, `matheus`)